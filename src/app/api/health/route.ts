import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({ status: 'ok', service: 'indian-tourism-saas', timestamp: new Date().toISOString() })
}
