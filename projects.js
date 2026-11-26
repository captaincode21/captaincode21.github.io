// Edit this file to update the projects. status: "Planned", "Ongoing" or "Completed".
// Leave repo and details empty until there is a real link to show.
const PROJECTS = [
  {
    title: 'Real-time soft sensor and hybrid physics-ML',
    category: 'State estimation',
    status: 'Planned',
    summary: 'Predict unmeasured reactor concentration in an exothermic CSTR using fast temperature and flow sensors.',
    tools: ['Extended Kalman filter', 'LightGBM', 'FastAPI', 'Docker', 'TimescaleDB', 'Grafana'],
    art: 'reactor',
    repo: '',
    details: '',
  },
  {
    title: 'Industrial fault detection and root-cause diagnostics',
    category: 'Process monitoring',
    status: 'Planned',
    summary: 'Detect control valve stiction, pump cavitation or heat exchanger fouling early and pinpoint the faulty sensor.',
    tools: ['Dynamic PCA', 'T² and Q statistics', 'Contribution plots', 'SHAP', 'OPC UA', 'MQTT', 'Grafana'],
    art: 'monitor',
    repo: '',
    details: '',
  },
  {
    title: 'Smart energy dispatch and economic MPC',
    category: 'Optimisation and control',
    status: 'Planned',
    summary: 'Minimise electricity and diesel costs for an industrial load over a 24-hour rolling horizon.',
    tools: ['Quantile regression', 'LightGBM', 'MILP', 'Pyomo', 'HiGHS', 'Grafana'],
    art: 'dispatch',
    repo: '',
    details: '',
  },
];
