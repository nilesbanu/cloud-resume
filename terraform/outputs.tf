output "website_url" {
  value = "https://${aws_cloudfront_distribution.cdn.domain_name}"
}

output "visitor_api_url" {
  value = "${aws_apigatewayv2_api.api.api_endpoint}/visit"
}
