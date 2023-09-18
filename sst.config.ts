import { SSTConfig } from 'sst';
import { NextjsSite, NextjsSiteProps } from 'sst/constructs';
import dotenv from 'dotenv';

import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import cloudfront, { ViewerProtocolPolicy } from 'aws-cdk-lib/aws-cloudfront';

// declare let bucket: s3.Bucket;

console.log(process.env);

const target = process.env.APP;

interface TBuildOptions extends dotenv.DotenvParseOutput {
  DEPLOY_PATH: string;
  DEPLOY_ID: string;
  S3_BUCKET: string;
}

if (!target) {
  throw new Error('Build app target is not defined.');
}

export default {
  config(input) {
    const stage = input.stage;
    const environment = dotenv.config({
      path: `./envs/${target}/.env.${stage}`,
    }).parsed as TBuildOptions;    

    console.log('environment', environment);

    const { SST_ID } = environment;

    return {
      name: SST_ID,
      region: 'ap-northeast-2',
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const stage = stack.stage;
      const environment = dotenv.config({
        path: `./envs/${target}/.env.${stage}`,
      }).parsed as TBuildOptions;

      const { DEPLOY_PATH, S3_BUCKET, DEPLOY_ID } = environment;

      const appBucket = s3.Bucket.fromBucketName(stack, 'Bucket', S3_BUCKET);
      const cachePolicy = new cloudfront.CachePolicy(stack, 'dataCachePolicy', {
        // query string
        queryStringBehavior: cloudfront.CacheQueryStringBehavior.all(),
        // cookie
        cookieBehavior: cloudfront.CacheCookieBehavior.allowList(
          'Authorization',
          'refreshToken',
          'userId',
        ),
        // header
        headerBehavior: cloudfront.CacheHeaderBehavior.allowList('User-Agent'),
        // ttl options
        defaultTtl: cdk.Duration.minutes(30),
        minTtl: cdk.Duration.seconds(1),
        maxTtl: cdk.Duration.seconds(1),
      });

      const behavirOptions = {
        origin: new origins.S3Origin(appBucket),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy,
      };

      const cdkOptions = {
        // @ts-ignore
        bucket: appBucket,
      } satisfies NextjsSiteProps['cdk'];

      const site = new NextjsSite(stack, `${DEPLOY_ID}-${stage}`, {
        path: DEPLOY_PATH,
        // @ts-ignore
        cdk: cdkOptions,
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  }
} satisfies SSTConfig;