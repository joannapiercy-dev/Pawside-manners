const STORAGE_KEY = 'pawside_progress';

export function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch { return {}; }
}

export function markComplete(scenarioId, mode) {
  const p = getProgress();
  if (!p[scenarioId]) p[scenarioId] = {};
  p[scenarioId][mode] = true;
  p[scenarioId].lastAttempt = Date.now();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

export function getStats(scenarios) {
  const p = getProgress();
  const total = scenarios.length;
  const attempted = Object.keys(p).length;
  const quizDone = Object.values(p).filter(v => v.quiz).length;
  const roleplayDone = Object.values(p).filter(v => v.roleplay).length;
  return { total, attempted, quizDone, roleplayDone };
}

export function isComplete(scenarioId, mode) {
  const p = getProgress();
  return !!(p[scenarioId] && p[scenarioId][mode]);
}
