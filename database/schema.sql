-- GetAutoReply Database Schema
-- For Supabase (PostgreSQL)

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  phone VARCHAR(15) UNIQUE NOT NULL,
  name VARCHAR(100),
  email VARCHAR(255),
  business_name VARCHAR(255),
  business_type VARCHAR(50), -- kirana, doctor, tutor, salon, restaurant, retail, other
  plan VARCHAR(20) DEFAULT 'free', -- free, starter, growth
  plan_expires_at TIMESTAMP,
  whatsapp_connected BOOLEAN DEFAULT FALSE,
  whatsapp_phone VARCHAR(15),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Auto-replies table
CREATE TABLE auto_replies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  trigger_word VARCHAR(100) NOT NULL,
  trigger_type VARCHAR(20) DEFAULT 'contains', -- contains, exact, starts_with
  response_text TEXT NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  priority INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Messages log table
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  from_phone VARCHAR(15) NOT NULL,
  message_text TEXT,
  auto_replied BOOLEAN DEFAULT FALSE,
  auto_reply_id UUID REFERENCES auto_replies(id),
  response_sent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Waitlist table (for pre-launch signups)
CREATE TABLE waitlist (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100),
  phone VARCHAR(15) NOT NULL,
  email VARCHAR(255),
  business_type VARCHAR(50),
  source VARCHAR(50), -- website, referral, social
  converted BOOLEAN DEFAULT FALSE,
  converted_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Analytics/Stats table
CREATE TABLE daily_stats (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  messages_received INT DEFAULT 0,
  messages_auto_replied INT DEFAULT 0,
  unique_contacts INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, date)
);

-- Subscriptions table
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  plan VARCHAR(20) NOT NULL,
  amount_inr INT NOT NULL,
  razorpay_subscription_id VARCHAR(100),
  razorpay_payment_id VARCHAR(100),
  status VARCHAR(20) DEFAULT 'active', -- active, cancelled, expired
  starts_at TIMESTAMP NOT NULL,
  ends_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_auto_replies_user ON auto_replies(user_id);
CREATE INDEX idx_auto_replies_active ON auto_replies(user_id, is_active);
CREATE INDEX idx_messages_user ON messages(user_id);
CREATE INDEX idx_messages_date ON messages(created_at);
CREATE INDEX idx_waitlist_phone ON waitlist(phone);
CREATE INDEX idx_daily_stats_user_date ON daily_stats(user_id, date);

-- Row Level Security (RLS) policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE auto_replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Users can only see their own data
CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (auth.uid() = id);

-- Auto-replies policies
CREATE POLICY "Users can view own auto_replies" ON auto_replies
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own auto_replies" ON auto_replies
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own auto_replies" ON auto_replies
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own auto_replies" ON auto_replies
  FOR DELETE USING (auth.uid() = user_id);

-- Messages policies
CREATE POLICY "Users can view own messages" ON messages
  FOR SELECT USING (auth.uid() = user_id);

-- Stats policies
CREATE POLICY "Users can view own stats" ON daily_stats
  FOR SELECT USING (auth.uid() = user_id);
