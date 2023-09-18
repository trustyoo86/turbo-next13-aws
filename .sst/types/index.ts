import "sst/node/config";
declare module "sst/node/config" {
  export interface ConfigTypes {
    APP: string;
    STAGE: string;
  }
}

import "sst/node/site";
declare module "sst/node/site" {
  export interface NextjsSiteResources {
    "my-admin-dev": {
      url: string;
    }
  }
}

