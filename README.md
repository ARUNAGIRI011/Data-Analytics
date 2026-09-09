# Anaayasaas — Indian Tourism SaaS

Production-oriented foundation for an Indian travel marketplace: destination discovery, AI-assisted itineraries, paid travel plans, partner/affiliate tracking and customer operations.

## Stack
- Next.js App Router + TypeScript
- Supabase Auth + PostgreSQL + RLS + Storage
- Vercel deployment
- AI provider via server-side environment variable
- Razorpay-ready payment layer
- GitHub Actions CI

## Product modules
- Public tourism landing page
- Destination catalogue and SEO pages
- AI itinerary generation foundation
- Paid itinerary products
- Customer accounts and dashboards
- Partner onboarding and commission tracking
- Hotel/activity/transport marketplace integration points
- Orders, referrals and future booking workflows
- Admin and operational tooling foundation

## Production setup
1. Import this GitHub repository into Vercel.
2. Add the variables from `.env.example` in Vercel Project Settings.
3. Create a Supabase project and run `supabase/migrations/20260909160000_initial_tourism_schema.sql` using the Supabase SQL editor or migration workflow.
4. Configure Supabase Auth redirect URLs for the production domain.
5. Add payment, AI and email provider credentials only in Vercel/Supabase secrets.
6. Deploy `main` to production after CI passes.
7. Verify `/api/health`, authentication, database RLS and payment webhooks before accepting real transactions.

## Security
Never commit `.env`, service-role keys, payment secrets, AI keys or webhook secrets. Browser code must use only the public Supabase key. Server-only credentials must remain in server environments.

## Current status
The repository is now structured for production expansion. External provider accounts, credentials, domain ownership and live payment/affiliate contracts must be configured before commercial launch.
