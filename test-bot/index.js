/**
 * GetAutoReply Test Bot
 * Simple keyword-based WhatsApp auto-reply
 */

const { default: makeWASocket, DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
const pino = require('pino');
const qrcode = require('qrcode-terminal');

// Auto-reply rules
const AUTO_REPLIES = {
  'price': '💰 Our services:\n\n• Starter: ₹299/month\n• Growth: ₹499/month\n\nVisit getautoreply.in for details!',
  'timing': '🕐 Business Hours:\n\nMonday - Saturday: 9 AM - 9 PM\nSunday: 10 AM - 6 PM',
  'hi': '👋 Welcome to our business!\n\nHow can I help you today?\n\nType:\n• "price" for pricing\n• "timing" for business hours\n• "location" for address',
  'hello': '👋 Welcome to our business!\n\nHow can I help you today?\n\nType:\n• "price" for pricing\n• "timing" for business hours\n• "location" for address',
  'location': '📍 Our Location:\n\nShop No. 123, Main Market\nYour City, State - 123456\n\nGoogle Maps: https://maps.google.com',
  'menu': '📋 Our Services:\n\n1. Auto-Reply Setup\n2. WhatsApp Business Solutions\n3. Customer Support Automation\n\nReply with a number for details!',
  'help': '🤖 Available commands:\n\n• price - View pricing\n• timing - Business hours\n• location - Our address\n• menu - Our services\n\nOr just type your question!'
};

const DEFAULT_REPLY = '👋 Thanks for your message!\n\nI\'ll get back to you shortly.\n\nMeanwhile, type "help" to see what I can answer instantly!';

let reconnectAttempts = 0;
const MAX_RECONNECTS = 3;

async function startBot() {
  console.log('🚀 GetAutoReply Test Bot Starting...\n');
  
  const { state, saveCreds } = await useMultiFileAuthState('./auth');
  const { version } = await fetchLatestBaileysVersion();
  
  const sock = makeWASocket({
    version,
    auth: state,
    logger: pino({ level: 'silent' }),
    browser: ['GetAutoReply', 'Chrome', '120.0.0']
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect, qr } = update;
    
    if (qr) {
      console.log('\n📱 SCAN THIS QR CODE WITH WHATSAPP:\n');
      qrcode.generate(qr, { small: true });
      console.log('\n👆 Open WhatsApp > Settings > Linked Devices > Link a Device\n');
      reconnectAttempts = 0; // Reset on new QR
    }
    
    if (connection === 'close') {
      const statusCode = lastDisconnect?.error?.output?.statusCode;
      const shouldReconnect = statusCode !== DisconnectReason.loggedOut && reconnectAttempts < MAX_RECONNECTS;
      
      if (statusCode === DisconnectReason.loggedOut) {
        console.log('❌ Logged out. Clearing auth and restarting...');
        require('fs').rmSync('./auth', { recursive: true, force: true });
        reconnectAttempts = 0;
        setTimeout(startBot, 2000);
      } else if (shouldReconnect) {
        reconnectAttempts++;
        console.log(`🔄 Reconnecting... (attempt ${reconnectAttempts}/${MAX_RECONNECTS})`);
        setTimeout(startBot, 3000);
      } else {
        console.log('❌ Connection failed. Please restart the bot.');
      }
    } else if (connection === 'open') {
      console.log('\n✅ BOT CONNECTED SUCCESSFULLY!\n');
      console.log('📨 Listening for messages...');
      console.log('🔑 Keywords:', Object.keys(AUTO_REPLIES).join(', '));
      console.log('\n💡 Test by sending a message from another phone!\n');
      reconnectAttempts = 0;
    }
  });

  sock.ev.on('messages.upsert', async ({ messages, type }) => {
    if (type !== 'notify') return;
    
    for (const msg of messages) {
      if (!msg.message || msg.key.fromMe) continue;
      
      const sender = msg.key.remoteJid;
      const text = msg.message.conversation || 
                   msg.message.extendedTextMessage?.text || 
                   '';
      
      if (!text || sender.includes('@g.us')) continue; // Skip groups
      
      const lowerText = text.toLowerCase().trim();
      console.log(`\n📩 From ${sender.split('@')[0]}: "${text}"`);
      
      let reply = DEFAULT_REPLY;
      for (const [keyword, response] of Object.entries(AUTO_REPLIES)) {
        if (lowerText.includes(keyword)) {
          reply = response;
          console.log(`🤖 Triggered: "${keyword}"`);
          break;
        }
      }
      
      try {
        await sock.sendMessage(sender, { text: reply });
        console.log(`✉️ Reply sent!`);
      } catch (err) {
        console.log(`❌ Failed to send: ${err.message}`);
      }
    }
  });
}

startBot().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
