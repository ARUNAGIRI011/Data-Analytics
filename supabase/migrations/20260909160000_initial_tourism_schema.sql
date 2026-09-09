create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'customer' check (role in ('customer','partner','admin')),
  created_at timestamptz not null default now()
);

create table if not exists public.destinations (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  state text,
  country text not null default 'India',
  description text,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.itineraries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  destination_id uuid references public.destinations(id) on delete set null,
  title text not null,
  days integer not null check (days between 1 and 60),
  travel_style text,
  budget numeric(12,2),
  currency text not null default 'INR',
  content jsonb not null default '{}'::jsonb,
  is_paid boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.partners (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique references auth.users(id) on delete cascade,
  business_name text not null,
  partner_type text not null,
  website text,
  commission_rate numeric(5,2) not null default 0 check (commission_rate between 0 and 100),
  status text not null default 'pending' check (status in ('pending','active','suspended')),
  created_at timestamptz not null default now()
);

create table if not exists public.referrals (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid references public.partners(id) on delete set null,
  destination_id uuid references public.destinations(id) on delete set null,
  click_id text unique not null,
  status text not null default 'clicked' check (status in ('clicked','converted','cancelled')),
  commission numeric(12,2) not null default 0,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.destinations enable row level security;
alter table public.itineraries enable row level security;
alter table public.partners enable row level security;
alter table public.referrals enable row level security;

create policy "public can view published destinations" on public.destinations for select to anon, authenticated using (is_published = true);
create policy "users view own profile" on public.profiles for select to authenticated using ((select auth.uid()) = id);
create policy "users update own profile" on public.profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);
create policy "users view own itineraries" on public.itineraries for select to authenticated using ((select auth.uid()) = user_id);
create policy "users create own itineraries" on public.itineraries for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "partners view own record" on public.partners for select to authenticated using ((select auth.uid()) = user_id);
create policy "partners create own record" on public.partners for insert to authenticated with check ((select auth.uid()) = user_id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name) values (new.id, coalesce(new.raw_user_meta_data->>'full_name','')) on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();
