import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

let _supabase = null;

async function getClient() {
  if (_supabase) return _supabase;
  const res = await fetch('/.netlify/functions/config');
  const { url, anon } = await res.json();
  _supabase = createClient(url, anon);
  return _supabase;
}

export async function getSupabase() {
  return getClient();
}

export async function getSession() {
  const sb = await getClient();
  const { data: { session } } = await sb.auth.getSession();
  return session;
}

export async function getProfile() {
  const sb = await getClient();
  const session = await getSession();
  if (!session) return null;
  const { data } = await sb
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .single();
  return data;
}

export async function signOut() {
  const sb = await getClient();
  await sb.auth.signOut();
}

// Named export so pages can get the client directly
export { getClient as supabase };
