(function () {
  'use strict';

  var root = document.documentElement;
  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  var preference;

  try {
    preference = localStorage.getItem('theme');
  } catch (error) {
    // The toggle still works when browser storage is unavailable.
  }

  if (preference !== 'light' && preference !== 'dark') preference = null;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);

    var button = document.getElementById('theme-toggle');
    if (button) {
      var label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
      button.setAttribute('aria-pressed', String(theme === 'dark'));
    }

    var themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', theme === 'dark' ? '#191c22' : '#ffffff');
  }

  function currentTheme() {
    return preference || (systemTheme.matches ? 'dark' : 'light');
  }

  // Apply before styles load so a saved dark theme does not flash white.
  applyTheme(currentTheme());

  document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('theme-toggle');
    if (!button) return;

    applyTheme(currentTheme());
    button.hidden = false;
    button.addEventListener('click', function () {
      preference = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(preference);
      try {
        localStorage.setItem('theme', preference);
      } catch (error) {
        // Keep the selected theme for this page even without persistent storage.
      }
    });
  });

  systemTheme.addEventListener('change', function () {
    if (!preference) applyTheme(currentTheme());
  });
}());
