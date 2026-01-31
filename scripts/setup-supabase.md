# Supabase Setup (5 minutes)

## 1. Create Project
1. Go to https://supabase.com
2. Sign up with GitHub
3. Click "New Project"
4. Name: `getautoreply`
5. Password: (save this!)
6. Region: Mumbai (ap-south-1)

## 2. Run Schema
1. Go to SQL Editor
2. Paste contents of `database/schema.sql`
3. Click "Run"

## 3. Get Credentials
From Project Settings > API:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 4. Add to Vercel
1. Go to Vercel dashboard
2. Project Settings > Environment Variables
3. Add both keys above

## 5. Redeploy
Push any commit or click "Redeploy" in Vercel

---
Done! Database connected.
