// import { resolve, join } from 'path';
// import dotenv from 'dotenv';
const { resolve, join } = require('path');
const dotenv = require('dotenv');

const ROOT_PATH = resolve(__dirname);
const PROJECT_PATH = resolve(ROOT_PATH, '..', '..');

const stage = process.env.STAGE;
const env = dotenv.config({
  path: join(PROJECT_PATH, 'envs', 'admin', `.env.${stage}`),
}).parsed;

console.log('stage =====>', stage);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
}

// export default nextConfig;

module.exports = nextConfig
