// versions.js — the SINGLE list that controls EVERY version's dropdown.
// Every version (current and old) loads THIS file from the site root, so
// editing it here updates the toggle everywhere at once.
//
// SITE_ROOT = your site's path after the domain.
// For https://catherinegu16.github.io/COGSPortfolio/ it is "/COGSPortfolio/".
var SITE_ROOT = "/COGSPortfolio/";

// Each version: "label" shows in the dropdown, "path" is its folder under SITE_ROOT.
// "" (empty) = the current version, which lives at the site root.
// To add a version later: add one line here AND add its tag to deploy.yml.
var PORTFOLIO_VERSIONS = [
  { label: "v2.0 (Draft)",          path: ""      },
  { label: "v1.0 — September 2026", path: "v1.0/" },
];
