terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# S3 + DynamoDB + Lambda (Mumbai)
provider "aws" {
  region = "ap-south-1"
}

# CloudFront (REQUIRED us-east-1)
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}
