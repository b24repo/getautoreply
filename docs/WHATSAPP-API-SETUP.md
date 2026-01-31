# WhatsApp Cloud API Setup Guide

## Overview
WhatsApp Cloud API is the official API from Meta. It's free for service conversations (customer-initiated) but costs money for marketing messages.

## Pricing (India)
- **Service conversations**: FREE (24-hour window after customer messages)
- **Marketing messages**: ₹0.73/message
- **Utility messages**: ₹0.30/message

## Prerequisites
1. Meta Business Account
2. Facebook Page (can be private)
3. WhatsApp Business Phone Number
4. Meta Developer Account

---

## Step-by-Step Setup

### Step 1: Create Meta Business Account
1. Go to https://business.facebook.com
2. Click "Create Account"
3. Add business details
4. Verify your business (may take 1-3 days)

### Step 2: Create Meta Developer Account
1. Go to https://developers.facebook.com
2. Click "Get Started" / "Register"
3. Link to your Meta Business Account

### Step 3: Create WhatsApp Business App
1. Go to https://developers.facebook.com/apps
2. Click "Create App"
3. Select "Business" type
4. Add WhatsApp product to app

### Step 4: Get API Credentials
From the App Dashboard:
- **Phone Number ID**: Found in WhatsApp > API Setup
- **WhatsApp Business Account ID**: Same location
- **Access Token**: Generate a permanent token

### Step 5: Set Up Webhook
1. Go to WhatsApp > Configuration
2. Add Webhook URL: `https://getautoreply.in/api/webhook`
3. Verify Token: (create a secret token)
4. Subscribe to: `messages` field

---

## API Endpoints

### Send Message
```bash
curl -X POST "https://graph.facebook.com/v18.0/{PHONE_NUMBER_ID}/messages" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "messaging_product": "whatsapp",
    "to": "919876543210",
    "type": "text",
    "text": {"body": "Hello!"}
  }'
```

### Webhook Payload (Incoming Message)
```json
{
  "object": "whatsapp_business_account",
  "entry": [{
    "changes": [{
      "value": {
        "messages": [{
          "from": "919876543210",
          "text": {"body": "What is the price?"},
          "type": "text"
        }]
      }
    }]
  }]
}
```

---

## Our Implementation Plan

### Phase 1: Webhook Receiver
```typescript
// /api/webhook/route.ts
export async function POST(req: Request) {
  const body = await req.json();
  const message = body.entry[0].changes[0].value.messages[0];
  
  // Find matching auto-reply
  const trigger = findTrigger(message.text.body);
  
  if (trigger) {
    await sendReply(message.from, trigger.response);
  }
  
  return Response.json({ status: 'ok' });
}
```

### Phase 2: Send Reply
```typescript
async function sendReply(to: string, text: string) {
  await fetch(`https://graph.facebook.com/v18.0/${PHONE_ID}/messages`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to,
      type: 'text',
      text: { body: text },
    }),
  });
}
```

---

## Environment Variables Needed
```env
WHATSAPP_PHONE_ID=
WHATSAPP_ACCESS_TOKEN=
WHATSAPP_WEBHOOK_SECRET=
WHATSAPP_BUSINESS_ACCOUNT_ID=
```

---

## Alternative: Baileys (Unofficial)

For MVP/testing without Meta approval, we can use Baileys library:
- https://github.com/WhiskeySockets/Baileys
- Works with personal WhatsApp
- No API costs
- But: Against WhatsApp ToS, risk of ban

**Recommendation**: Start with Baileys for MVP testing with consenting users, then migrate to official API for production.

---

## Timeline
1. Week 1: Build webhook + basic auto-reply (Baileys)
2. Week 2: Test with beta users
3. Week 3: Apply for Meta Business verification
4. Week 4: Migrate to official Cloud API

---

## Resources
- [WhatsApp Cloud API Docs](https://developers.facebook.com/docs/whatsapp/cloud-api)
- [Baileys Library](https://github.com/WhiskeySockets/Baileys)
- [Meta Business Verification](https://www.facebook.com/business/help/2058515294227817)

---

*Last updated: Jan 31, 2026*
