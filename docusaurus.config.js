// @ts-check
const config = {
  title: 'Visualisierung & Datenaufbereitung',
  url: 'https://localhost:3000',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'local-dev',
  projectName: 'visdat-course',
  deploymentBranch: 'gh-pages',
  presets: [
    ['@docusaurus/preset-classic', {
      docs: { routeBasePath: '/', sidebarPath: require.resolve('./sidebars.js') },
      blog: false, 
      theme: { 
        customCss: require.resolve('./src/css/custom.css')
      }
    }]
  ]
};
module.exports = config;
