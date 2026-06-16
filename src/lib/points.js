import { getSupabase, getSession } from './supabase.js';

const PASS_THRESHOLD = 75; // percent

// Award points for a quiz pass — only once per source
export async function awardQuizPoints(sourceId) {
  try {
    const sb = await getSupabase();
    const session = await getSession();
    if (!session) return;

    // Check if points already awarded for this quiz
    const { data: existing } = await sb
      .from('points_events')
      .select('id')
      .eq('user_id', session.user.id)
      .eq('source_id', sourceId)
      .eq('event_type', 'quiz_pass')
      .maybeSingle();

    if (existing) return; // Already awarded — no more points

    await sb.from('points_events').insert({
      user_id:    session.user.id,
      event_type: 'quiz_pass',
      source_id:  sourceId,
      points:     10
    });
  } catch (e) {
    console.error('awardQuizPoints error:', e);
  }
}

// Award points for completing a roleplay — only once per scenario
export async function awardRoleplayPoints(sourceId) {
  try {
    const sb = await getSupabase();
    const session = await getSession();
    if (!session) return;

    const { data: existing } = await sb
      .from('points_events')
      .select('id')
      .eq('user_id', session.user.id)
      .eq('source_id', sourceId)
      .eq('event_type', 'roleplay_complete')
      .maybeSingle();

    if (existing) return;

    await sb.from('points_events').insert({
      user_id:    session.user.id,
      event_type: 'roleplay_complete',
      source_id:  sourceId,
      points:     10
    });
  } catch (e) {
    console.error('awardRoleplayPoints error:', e);
  }
}

// Get total points for the current user
export async function getMyPoints() {
  try {
    const sb = await getSupabase();
    const session = await getSession();
    if (!session) return 0;

    const { data } = await sb
      .from('points_events')
      .select('points')
      .eq('user_id', session.user.id);

    return (data || []).reduce((sum, r) => sum + r.points, 0);
  } catch (e) {
    return 0;
  }
}

// Check if points already earned for a given source
export async function alreadyEarned(sourceId, eventType) {
  try {
    const sb = await getSupabase();
    const session = await getSession();
    if (!session) return false;

    const { data } = await sb
      .from('points_events')
      .select('id')
      .eq('user_id', session.user.id)
      .eq('source_id', sourceId)
      .eq('event_type', eventType)
      .maybeSingle();

    return !!data;
  } catch (e) {
    return false;
  }
}

export { PASS_THRESHOLD };
