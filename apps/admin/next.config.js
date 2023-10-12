const { resolve, join } = require('path');
const dotenv = require('dotenv');

const ROOT_PATH = resolve(__dirname);
const PROJECT_PATH = resolve(ROOT_PATH, '..', '..');

const env = dotenv.config({
  path: join(PROJECT_PATH, 'envs', 'admin', `.env.${stage}`),
}).parsed;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
