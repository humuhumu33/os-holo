// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Static, serverless docs for Hologram OS.
// Builds to fully static HTML (default Astro output) so the result can itself be
// served as content-addressed κ objects — keeping Law L5 true of the docs.
//
// Deploys under /docs of the gateway's web root: the build is emitted straight
// into the repo-root `docs/` directory and all links carry the base, so
// `index.html`'s relative "Docs" link → `docs/` resolves with no extra plumbing.
//
// BASE is deployment-relative. On a ROOT site (localhost via holo-serve-fhs, a
// <user>.github.io site, or a custom domain) the docs live at `/docs`. On a GitHub
// PROJECT page they live under `/<repo>/docs` — so the absolute asset/link refs Astro
// bakes in (`/docs/_astro/…`) would otherwise escape the project subpath and 404,
// rendering the docs unstyled. The Pages workflow sets DOCS_BASE=/<repo>/docs; local
// builds keep the `/docs` default.
export default defineConfig({
  site: 'https://hologram.os',
  base: process.env.DOCS_BASE || '/docs',
  outDir: '../../../docs',
  // Mirror the OS's own flat URL space; trailing-slash-free, hashable pages.
  trailingSlash: 'never',
  integrations: [
    starlight({
      title: 'Hologram OS',
      description:
        'A sovereign, serverless internet computer. Every object is self-verifying — its identity is the hash of its content (Law L5).',
      logo: {
        light: './src/assets/holo-mark-light.svg',
        dark: './src/assets/holo-mark-dark.svg',
        alt: 'Hologram OS',
      },
      customCss: ['./src/styles/brand.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/humuhumu33/os-holo',
        },
      ],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      // Every page links back to its source on GitHub ("Edit this page").
      editLink: {
        baseUrl: 'https://github.com/humuhumu33/os-holo/edit/main/system/docs/site/',
      },
      // Pagefind full-text search and dark mode ship by default.
      // Code blocks get copy buttons via Expressive Code by default.
      // Diátaxis nav: Get started → Concepts (why) → Build (how) → Reference (what)
      // → Architecture. Two Reference pages and the Architecture index are GENERATED
      // from source by scripts/gen-reference.mjs (prebuild), so they cannot drift.
      sidebar: [
        {
          label: 'Get started',
          items: [
            { label: 'What is Hologram OS?', link: '/' },
            { label: 'Quickstart', link: '/quickstart' },
          ],
        },
        {
          label: 'Concepts',
          items: [
            { label: 'The substrate', link: '/concepts/substrate' },
            { label: 'The five Laws', link: '/concepts/the-five-laws' },
            { label: 'The boot chain', link: '/concepts/boot-chain' },
            { label: 'Proof, not promises', link: '/concepts/conformance' },
          ],
        },
        {
          label: 'Build an app',
          items: [{ label: 'Build, run, share', link: '/build/an-app' }],
        },
        {
          label: 'Reference',
          items: [
            { label: 'The κ-route', link: '/reference/kappa-route' },
            { label: 'The Q door', link: '/reference/q' },
            { label: 'App manifest', link: '/reference/app-manifest' },
            { label: 'Agent doors', link: '/reference/agent-doors' },
            { label: 'Conformance rows', link: '/reference/conformance', badge: 'generated' },
          ],
        },
        {
          label: 'Architecture',
          items: [
            { label: 'Architecture decisions', link: '/architecture/adrs', badge: 'generated' },
          ],
        },
      ],
    }),
  ],
});
