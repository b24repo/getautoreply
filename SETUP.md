# GetAutoReply - Setup Guide

## Current Status
- ✅ Landing page live at getautoreply.in
- ✅ GitHub repo at github.com/b24repo/getautoreply
- ⚠️ Waitlist form needs Formspree setup

## TODO: Set Up Waitlist Form

### Option A: Formspree (Quick)
1. Go to formspree.io
2. Create free account
3. Create new form
4. Copy form ID (looks like: xpwzgvqk)
5. Update `src/app/page.tsx` line with form action

### Option B: Supabase (Better for MVP)
1. Go to supabase.com
2. Create project: "getautoreply"
3. Create table: waitlist
   - id (auto)
   - name (text)
   - whatsapp (text)
   - business_type (text)
   - created_at (timestamp)
4. Get API keys
5. Update app with Supabase client

## Environment Variables Needed
```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Quick Commands
```bash
# Run locally
cd projects/getautoreply
npm install
npm run dev

# Deploy
vercel --prod
```

## Accounts Needed
- [x] GitHub (b24repo)
- [x] Vercel (connected)
- [x] Domain (getautoreply.in via Namecheap)
- [ ] Formspree or Supabase (for waitlist)
- [ ] Meta Business (for WhatsApp API - later)
- [ ] Razorpay (for payments - later)
