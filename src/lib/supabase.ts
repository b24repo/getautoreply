import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export interface User {
  id: string;
  phone: string;
  name: string | null;
  email: string | null;
  business_name: string | null;
  business_type: string | null;
  plan: 'free' | 'starter' | 'growth';
  whatsapp_connected: boolean;
  created_at: string;
}

export interface AutoReply {
  id: string;
  user_id: string;
  trigger_word: string;
  trigger_type: 'contains' | 'exact' | 'starts_with';
  response_text: string;
  is_active: boolean;
  priority: number;
  created_at: string;
}

export interface Message {
  id: string;
  user_id: string;
  from_phone: string;
  message_text: string;
  auto_replied: boolean;
  response_sent: string | null;
  created_at: string;
}

export interface WaitlistEntry {
  id: string;
  name: string;
  phone: string;
  business_type: string;
  created_at: string;
}

// Database functions
export async function getUser(phone: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('phone', phone)
    .single();
  
  if (error) throw error;
  return data as User;
}

export async function getAutoReplies(userId: string) {
  const { data, error } = await supabase
    .from('auto_replies')
    .select('*')
    .eq('user_id', userId)
    .order('priority', { ascending: false });
  
  if (error) throw error;
  return data as AutoReply[];
}

export async function createAutoReply(userId: string, trigger: string, response: string) {
  const { data, error } = await supabase
    .from('auto_replies')
    .insert({
      user_id: userId,
      trigger_word: trigger.toLowerCase(),
      response_text: response,
      is_active: true,
    })
    .select()
    .single();
  
  if (error) throw error;
  return data as AutoReply;
}

export async function updateAutoReply(id: string, updates: Partial<AutoReply>) {
  const { data, error } = await supabase
    .from('auto_replies')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  
  if (error) throw error;
  return data as AutoReply;
}

export async function deleteAutoReply(id: string) {
  const { error } = await supabase
    .from('auto_replies')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
}

export async function logMessage(
  userId: string,
  fromPhone: string,
  messageText: string,
  autoReplied: boolean,
  responseSent: string | null
) {
  const { error } = await supabase
    .from('messages')
    .insert({
      user_id: userId,
      from_phone: fromPhone,
      message_text: messageText,
      auto_replied: autoReplied,
      response_sent: responseSent,
    });
  
  if (error) throw error;
}

export async function getDailyStats(userId: string, days: number = 7) {
  const { data, error } = await supabase
    .from('daily_stats')
    .select('*')
    .eq('user_id', userId)
    .order('date', { ascending: false })
    .limit(days);
  
  if (error) throw error;
  return data;
}

export async function addToWaitlist(name: string, phone: string, businessType: string) {
  const { data, error } = await supabase
    .from('waitlist')
    .insert({
      name,
      phone,
      business_type: businessType,
    })
    .select()
    .single();
  
  if (error) throw error;
  return data as WaitlistEntry;
}

// Find matching auto-reply for incoming message
export async function findMatchingReply(userId: string, messageText: string) {
  const autoReplies = await getAutoReplies(userId);
  const lowerMessage = messageText.toLowerCase();
  
  for (const reply of autoReplies) {
    if (!reply.is_active) continue;
    
    const trigger = reply.trigger_word.toLowerCase();
    
    switch (reply.trigger_type) {
      case 'exact':
        if (lowerMessage === trigger) return reply;
        break;
      case 'starts_with':
        if (lowerMessage.startsWith(trigger)) return reply;
        break;
      case 'contains':
      default:
        if (lowerMessage.includes(trigger)) return reply;
        break;
    }
  }
  
  return null;
}
