# Welcome Email Sequence

## Email 1: Instant Welcome (Send immediately after signup)

**Subject:** 🎉 Welcome to GetAutoReply - You're in!

**Body:**
```
Namaste [NAME]! 🙏

Thank you for joining the GetAutoReply waitlist!

You're one of the first [BUSINESS_TYPE] owners to sign up. That means:
✅ 1 month FREE when we launch
✅ Lifetime early-bird discount
✅ Direct founder support on WhatsApp

**What's GetAutoReply?**
A simple WhatsApp auto-reply tool for busy business owners like you.

When customers message asking "Price kya hai?" or "Open hai?" - your phone replies automatically. Even at 11 PM. Even on Sunday.

**What happens next?**
1. We're launching in 2 weeks
2. You'll get first access
3. Setup takes 5 minutes

Have questions? Just reply to this email or WhatsApp us at +91-XXXXXXXXXX.

See you soon!

Virendra & KallU
Co-founders, GetAutoReply

P.S. Know another business owner who'd love this? Forward this email - they'll get early access too!
```

---

## Email 2: Value Email (Send 3 days later)

**Subject:** 5 WhatsApp auto-replies every [BUSINESS_TYPE] needs

**Body:**
```
Hey [NAME],

Quick tip that'll save you time 👇

Here are 5 auto-replies we recommend for [BUSINESS_TYPE] businesses:

1. **"Price"** → Send your rate list or catalog link
2. **"Timing"** → Share your working hours
3. **"Location"** → Send Google Maps link
4. **"Hi/Hello"** → Welcome message + menu of options
5. **"Thanks"** → Friendly goodbye + ask for review

When GetAutoReply launches, you can set all 5 in under 10 minutes.

Talk soon!
Team GetAutoReply
```

---

## Email 3: Launch Email (Send on launch day)

**Subject:** 🚀 GetAutoReply is LIVE - Claim your free month!

**Body:**
```
[NAME], it's time!

GetAutoReply is now live. As an early supporter, here's your exclusive access:

🎁 **Your Free Month:** [COUPON_CODE]
⚡ **Get Started:** getautoreply.in/dashboard

Setup takes 5 minutes:
1. Login with your phone number
2. Pick your business type
3. Choose auto-reply templates
4. Connect WhatsApp (we'll guide you)
5. Done! Start saving time.

Need help? Reply to this email or WhatsApp +91-XXXXXXXXXX.

Let's go! 🚀

Team GetAutoReply
```

---

## Setup Instructions (Supabase + Email)

**Option 1: Supabase Edge Functions + Resend**
- Trigger on waitlist insert
- Send via Resend API (free tier: 100 emails/day)

**Option 2: Zapier/Make**
- Connect Supabase webhook to email service
- No code required

**Option 3: Manual for now**
- Export signups daily
- Send via Gmail/personal email
- Personal touch works better for first 50 users!

---

*Created: Jan 31, 2026*
