import { renderHome } from './pages/home.js';
import { renderModules } from './pages/modules.js';
import { renderScenario } from './pages/scenario.js';
import { renderDashboard } from './pages/dashboard.js';

const app = document.getElementById('app');

function getRoute() {
  const hash = window.location.hash.slice(1) || '/';
  return hash;
}

function render() {
  const route = getRoute();

  if (route === '/' || route === '') {
    renderHome(app, navigate);
  } else if (route === '/train') {
    renderModules(app, navigate);
  } else if (route.startsWith('/scenario/')) {
    const id = route.replace('/scenario/', '');
    renderScenario(app, navigate, id);
  } else if (route === '/progress') {
    renderDashboard(app, navigate);
  } else {
    renderHome(app, navigate);
  }
}

function navigate(path) {
  window.location.hash = path;
}

window.addEventListener('hashchange', render);
render();
