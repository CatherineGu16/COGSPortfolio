// version-switcher.js
// Builds the version dropdown from versions.js. You edit versions.js, never this file.
// Loaded from the site root by EVERY version, so all versions share one switcher.

var versionSelect = document.getElementById('versionSelect');

if (versionSelect && typeof PORTFOLIO_VERSIONS !== 'undefined') {
  var currentPath = window.location.pathname;

  // Decide which version we're viewing: assume the root (current) version,
  // then look for a version folder (e.g. "v1.0/") in the current URL.
  var currentIndex = 0;
  for (var i = 0; i < PORTFOLIO_VERSIONS.length; i++) {
    var folder = PORTFOLIO_VERSIONS[i].path;
    if (folder && currentPath.indexOf(folder) !== -1) {
      currentIndex = i;
    }
  }

  // Build one <option> per version.
  for (var j = 0; j < PORTFOLIO_VERSIONS.length; j++) {
    var version = PORTFOLIO_VERSIONS[j];
    var option = document.createElement('option');
    option.value = SITE_ROOT + version.path;   // full URL path to that version
    option.textContent = version.label;
    if (j === currentIndex) { option.selected = true; }
    versionSelect.appendChild(option);
  }

  // Go to the chosen version when you pick one.
  versionSelect.addEventListener('change', function () {
    window.location.href = versionSelect.value;
  });
}
