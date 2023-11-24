terraform {
  required_version = "~> 1.5"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  alias  = "global"
  region = "us-east-1"
}

locals {
  domain_name = "dev.kernyoo.net"
  default_tags = {
    Project     = "terraform-aws-next"
    Environment = "dev"
  }
}

module "opennext" {
  source = "nhs-england-tools/opennext/aws"

  prefix              = "terraform-aws-opennext"
  opennext_build_path = "../.open-next"
  hosted_zone_id      = data.aws_route53_zone.zone.zone_id

  cloudfront = {
    aliases             = [local.domain_name]
    acm_certificate_arn = aws_acm_certificate_validation.ssl_certificate.certificate_arn
    assets_paths        = ["/images/*"]
  }
}
