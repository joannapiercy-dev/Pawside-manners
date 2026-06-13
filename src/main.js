import { renderHome } from './pages/home.js';
import { renderModules } from './pages/modules.js';
import { renderScenario } from './pages/scenario.js';
import { renderDashboard } from './pages/dashboard.js';
import { renderTerminology, renderDeck } from './pages/terminology.js';
import { renderTriageHome, renderTriageTree } from './pages/triage.js';
import { renderTestsHome, renderTestCategory } from './pages/tests.js';
import { renderCrucial } from './pages/crucial.js';
import { renderDietsHome, renderDietsCategory } from './pages/diets.js';
import { renderAppointmentsHome } from './pages/appointments.js';
import { renderSocialHome } from './pages/social.js';
import { renderQuickHit } from './pages/quickhit.js';
import { renderQuickPromptsHome } from './pages/quickprompts.js';
import { renderBadges } from './pages/badges.js';

const app = document.getElementById('app');

function getRoute() {
  return window.location.hash.slice(1) || '/';
}

function render() {
  const route = getRoute();
  if (route === '/' || route === '') {
    renderHome(app, navigate);
  } else if (route === '/train') {
    renderModules(app, navigate);
  } else if (route.startsWith('/scenario/')) {
    renderScenario(app, navigate, route.replace('/scenario/', ''));
  } else if (route === '/progress') {
    renderDashboard(app, navigate);
  } else if (route === '/terminology') {
    renderTerminology(app, navigate);
  } else if (route.startsWith('/terminology/')) {
    renderDeck(app, navigate, route.replace('/terminology/', ''));
  } else if (route === '/triage') {
    renderTriageHome(app, navigate);
  } else if (route.startsWith('/triage/')) {
    renderTriageTree(app, navigate, route.replace('/triage/', ''));
  } else if (route === '/crucial') {
    renderCrucial(app, navigate);
  } else if (route === '/quickprompts') {
    renderQuickPromptsHome(app, navigate);
  } else if (route === '/quickhit') {
    renderQuickHit(app, navigate);
  } else if (route === '/badges') {
    renderBadges(app, navigate);
  } else if (route === '/social') {
    renderSocialHome(app, navigate);
  } else if (route === '/appointments') {
    renderAppointmentsHome(app, navigate);
  } else if (route === '/diets') {
    renderDietsHome(app, navigate);
  } else if (route.startsWith('/diets/')) {
    renderDietsCategory(app, navigate, route.replace('/diets/', ''));
  } else if (route === '/tests') {
    renderTestsHome(app, navigate);
  } else if (route.startsWith('/tests/')) {
    renderTestCategory(app, navigate, route.replace('/tests/', ''));
  } else {
    renderHome(app, navigate);
  }
}

function navigate(path) {
  window.location.hash = path;
  // hashchange listener handles render() and scrollTo
}

window.addEventListener('hashchange', () => {
  window.scrollTo(0, 0);
  render();
});

render();
