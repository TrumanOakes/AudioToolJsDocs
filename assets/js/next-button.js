(function () {
  var nextMap = {
    'getting-started/overview':                   'authorization-and-setup.html',
    'getting-started/whats-new':                  'authorization-and-setup.html',
    'getting-started/authorization-and-setup':    'examples-and-next-steps.html',
    'how-nexus-works/system-overview':            'documents.html',
    'how-nexus-works/documents':                  'entities-and-fields.html',
    'how-nexus-works/entities-and-fields':        'making-changes.html',
    'how-nexus-works/making-changes':             'queries-and-events.html',
    'how-nexus-works/queries-and-events':         'package-structure.html',
    'how-nexus-works/package-structure':          'tips-and-patterns.html',
    'working-with-audiotool-projects/sign-in-and-connect':               'open-or-create-a-project-context.html',
    'working-with-audiotool-projects/open-or-create-a-project-context':  'create-devices.html',
    'working-with-audiotool-projects/create-devices':                    'work-with-timeline-data.html',
    'working-with-audiotool-projects/work-with-timeline-data':           'find-and-read-entities.html',
    'working-with-audiotool-projects/find-and-read-entities':            'listen-for-changes.html',
    'working-with-audiotool-projects/listen-for-changes':                'make-safe-changes.html',
    'working-with-audiotool-projects/make-safe-changes':                 'work-offline-for-testing.html',
    'working-with-audiotool-projects/work-offline-for-testing':          'use-platform-apis-through-the-client.html',
    'errors-and-fixes/before-you-debug':          'authorization-problems.html',
    'errors-and-fixes/authorization-problems':    'setup-problems.html',
    'errors-and-fixes/setup-problems':            'validation-errors.html',
    'errors-and-fixes/validation-errors':         'query-and-event-confusion.html',
    'errors-and-fixes/query-and-event-confusion': 'offline-vs-synced-behavior.html',
    'reference/quick-answers':                    'package-entry-points.html',
    'reference/package-entry-points':             'document-model.html',
    'reference/document-model':                   'entity-reference.html',
    'reference/entity-reference':                 'utilities.html',
    'reference/utilities':                        'platform-api-types.html',
  };

  function getNextUrl() {
    var path = window.location.pathname.replace(/\/+$/, '').replace(/\.html$/, '');
    var parts = path.split('/').filter(Boolean);
    if (parts.length < 2) return null;
    var key = parts.slice(-2).join('/');
    return nextMap[key] || null;
  }

  function injectButton(href) {
    var a = document.createElement('a');
    a.href = href;
    a.className = 'next-page-btn';
    a.setAttribute('aria-label', 'Next page');
    a.textContent = 'Next \u203a';
    document.body.appendChild(a);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var href = getNextUrl();
    if (href) injectButton(href);
  });
})();
