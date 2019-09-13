const dev = {
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://lzjjbep0q1.execute-api.us-west-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_Uv9XuZ2F6",
    APP_CLIENT_ID: "2mk53hkq2td7jpjknerg6rhkli",
    IDENTITY_POOL_ID: "us-west-2:d4735e80-6ec3-4740-aa9b-bbe8bd43f8c8"
  }
};

const prod = {
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://vil2v8mz58.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_eMcjDdPru",
    APP_CLIENT_ID: "3ei8ns24t2e950siqrfuq4t3r3",
    IDENTITY_POOL_ID: "us-west-2:e8f6bb45-2f75-4c28-a243-77498e78860a"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  GA_Tracking_ID: "UA-147348500-1",
  Tooltip_Earnings_Reaction: "Price change the first day after reporting earnings.",
  ...config
};
