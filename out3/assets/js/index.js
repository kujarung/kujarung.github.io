cssVars({
  // Only styles from CodePen's CSS panel
  include: 'style:not([data-ignore])',
  // Treat all browsers as legacy
  onlyLegacy: false,

  // DEMO: Toggles to see results
  // ----------------------------
  // preserveStatic: false,
  // preserveVars: true,
  // updateURLs: false,
  // variables: { '--color': 'purple' },
  // ----------------------------

  // Display transformed CSS
  onComplete: function (cssText, styleNodes, cssVariables, benchmark) {
    var codeElm = document.querySelector('code');
  },
});
