import { renderHome } from './pages/home.js';
import { renderModules } from './pages/modules.js';
import { renderScenario } from './pages/scenario.js';
import { renderDashboard } from './pages/dashboard.js';
import { renderTerminology, renderDeck } from './pages/terminology.js';
import { renderTriageHome, renderTriageTree } from './pages/triage.js';
import { renderTestsHome, renderTestCategory } from './pages/tests.js';

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
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', () => window.scrollTo(0, 0));

render();
