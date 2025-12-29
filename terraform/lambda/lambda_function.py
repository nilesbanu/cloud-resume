import json
import boto3

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table("visitor_counter")

def lambda_handler(event, context):
    response = table.update_item(
        Key={"id": "resume"},
        UpdateExpression="SET #c = if_not_exists(#c, :zero) + :one",
        ExpressionAttributeNames={"#c": "count"},
        ExpressionAttributeValues={
            ":one": 1,
            ":zero": 0
        },
        ReturnValues="UPDATED_NEW"
    )

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
        "body": json.dumps({
            "visits": int(response["Attributes"]["count"])
        })
    }
