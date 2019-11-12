export default {
  STRIPE_KEY: "pk_test_OWubGbmOynJvBq11uUporPnl0071qYZ3cU",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-petrovic"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://xfj95at9m2.execute-api.us-east-1.amazonaws.com/prod/"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_8JgZ1hW9r",
    APP_CLIENT_ID: "1hreqbs3oq8969t6l69af1mssj",
    IDENTITY_POOL_ID: "us-east-1:bbe40694-4b08-4f4d-9621-5cfea1585cfb"
  }
};