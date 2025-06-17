import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // o .edge según lo que uses

export default defineConfig({
  output: 'server',
  adapter: vercel(),
});
