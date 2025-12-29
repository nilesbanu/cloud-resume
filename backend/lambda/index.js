const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME;

exports.handler = async () => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id: "visitorCount" },
    UpdateExpression: "SET visits = if_not_exists(visits, :start) + :inc",
    ExpressionAttributeValues: {
      ":inc": 1,
      ":start": 0
    },
    ReturnValues: "UPDATED_NEW"
  };

  const result = await dynamo.update(params).promise();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({ count: result.Attributes.visits })
  };
};
