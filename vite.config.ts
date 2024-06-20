import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { createHtmlPlugin as html } from 'vite-plugin-html'
import sitemap from 'vite-plugin-sitemap'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // Forward `ref` to the root SVG tag.
        ref: true,
        // Do not prefix `class`/`id` attributes.
        svgo: false,
      },
      // Both `.svg` and `.svg?react` imports are React components
      include: ['**/*.svg', '**/*.svg?react'],
    }),
    sitemap({
      hostname: 'https://www.julianaguedes.com',
      dynamicRoutes: [
        '/tratamentos',
        '/contacto',
        '/sobre',
      ],
      exclude: [
        '/securimage/captcha',
        '/securimage/database',
        '/tarteaucitronjs',
      ],
      outDir: 'build',
      robots: [{
        userAgent: '*',
        disallow: [
          '/securimage/',
          '/tarteaucitronjs/',
        ],
      }],
      changefreq: 'monthly',
      priority: {
        '/': 1.0,
        '/contacto': 0.7,
        '/sobre': 0.5,
        '/tratamentos': 0.5,
      },
    }) as Plugin,
    html({
      minify: true,
      inject: {
        data: {
          updatedTime: new Date().toISOString(),
        },
      },
    }),
  ],
  build: {
    ssr: false,
    outDir: 'build',
  },
})
