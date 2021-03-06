// @ts-check

// This file contains all urls from the old non-Docusaurus website that need a redirect so no links are broken

/**
 * @type {import('@docusaurus/plugin-client-redirects/lib/types').RedirectOption[]}
 */
const redirects = [
  // Content pages
  { from: '/example', to: '/docs/General/example' },
  { from: '/mutators', to: '/docs/mutation-testing-elements/supported-mutators' },
  { from: ['/plugins', '/stryker/plugins'], to: '/docs/stryker/plugins' },
  { from: ['/quickstart', '/stryker/quickstart'], to: '/docs/stryker/getting-started' },
  { from: ['/faq'], to: '/docs/General/faq' },
  { from: ['/stryker', '/stryker/index'], to: '/docs/stryker/getting-started' },
  { from: ['/stryker-net', '/stryker-net/index', '/stryker-net/quickstart'], to: '/docs/stryker-net/Introduction' },
  { from: ['/stryker4s', '/stryker4s/index', '/stryker4s/quickstart'], to: '/docs/stryker4s/getting-started' },
  { from: ['/stryker/handbook', '/stryker4s/handbook', '/stryker-net/handbook'], to: '/docs/' },
  // Blogs
  { from: '/blog/2016-12-30/stryker-0-5-5', to: '/blog/stryker-0-5-5' },
  { from: '/blog/2017-01-01/happy-new-stryker', to: '/blog/happy-new-stryker' },
  { from: '/blog/2017-01-17/introduction-to-mutation-testing', to: '/blog/introduction-to-mutation-testing' },
  { from: '/blog/2017-02-21/stryker-weekend', to: '/blog/stryker-weekend' },
  { from: '/blog/2017-06-10/stryker-0-6-4', to: '/blog/stryker-0-6-4' },
  { from: '/blog/2017-07-14/road-to-stryker-1-0', to: '/blog/road-to-stryker-1-0' },
  { from: '/blog/2017-08-11/stryker-0-8-0', to: '/blog/stryker-0-8-0' },
  { from: '/blog/2017-10-06/typescript-support', to: '/blog/typescript-support' },
  { from: '/blog/2017-10-28/new-html-report', to: '/blog/new-html-report' },
  { from: '/blog/2017-12-01/babel-support', to: '/blog/babel-support' },
  { from: '/blog/2018-01-10/typescript-coverage-analysis-support', to: '/blog/typescript-coverage-analysis-support' },
  { from: '/blog/2018-01-26/webpack-support', to: '/blog/webpack-support' },
  { from: '/blog/2018-02-08/get-your-mutation-score-badge-now', to: '/blog/get-your-mutation-score-badge-now' },
  { from: '/blog/2018-04-04/use-git-to-select-files', to: '/blog/use-git-to-select-files' },
  { from: '/blog/2018-10-6/mutation-switching', to: '/blog/mutation-switching' },
  { from: '/blog/2018-12-24/anouncing-stryker-0-34', to: '/blog/announcing-stryker-0-34' },
  { from: '/blog/2018-12-25/stryker4s-0-1-0-released', to: '/blog/stryker4s-0-1-0-released' },
  { from: '/blog/2018-9-27/csharp-and-scala-support', to: '/blog/csharp-and-scala-support' },
  { from: '/blog/2019-02-13/announcing-stryker-1-0', to: '/blog/announcing-stryker-1-0' },
  { from: '/blog/2019-04-03/one-mutation-testing-html-report', to: '/blog/one-mutation-testing-html-report' },
  { from: '/blog/2019-04-05/announcing-dotnet-framework-support', to: '/blog/announcing-dotnet-framework-support' },
  { from: '/blog/2019-05-17/announcing-stryker-2-0', to: '/blog/announcing-stryker-2-0' },
  {
    from: '/blog/2019-12-27/stryker-dashboard-host-your-mutation-testing-report',
    to: '/blog/stryker-dashboard-host-your-mutation-testing-report',
  },
  { from: '/blog/2020-03-11/stryker-version-3', to: '/blog/stryker-version-3' },
  { from: '/blog/2020-04-01/anouncing-100-mode', to: '/blog/announcing-100-mode' },
  { from: '/blog/2020-05-15/azure-pipelines-integration', to: '/blog/azure-pipelines-integration' },
  {
    from: '/blog/2020-07-13/announcing-stryker-4-beta-mutation-switching',
    to: '/blog/announcing-stryker-4-beta-mutation-switching',
  },
  {
    from: '/blog/2020-10-07/announcing-stryker-4-mutation-switching',
    to: '/blog/announcing-stryker-4-mutation-switching',
  },
];

module.exports = redirects;
