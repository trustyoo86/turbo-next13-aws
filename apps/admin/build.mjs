import { build } from 'open-next/build.js';

const { DEPLOY_PATH, DEPLOY_ID, STAGE } = process.env;

console.log(DEPLOY_PATH);

await build({
  buildCommand: `STAGE=${STAGE} next build`,
});
