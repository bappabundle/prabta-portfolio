/* ==========================================================================
   TABS MODULE
   Generic tab switcher: [data-tab-group] wraps [data-tab] buttons and
   [data-panel] targets sharing the same group name.
   ========================================================================== */
(function () {
  const groups = document.querySelectorAll('[data-tab-group]');
  groups.forEach((group) => {
    const tabs = group.querySelectorAll('[data-tab]');
    const panels = document.querySelectorAll(
      `[data-panel-group="${group.dataset.tabGroup}"]`
    );
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        tabs.forEach((t) => t.classList.toggle('is-active', t === tab));
        panels.forEach((p) =>
          p.classList.toggle('is-active', p.dataset.panel === target)
        );
      });
    });
  });
})();
