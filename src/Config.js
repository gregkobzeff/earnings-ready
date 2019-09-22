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

const stage = process.env.REACT_APP_STAGE;
const config = stage === 'prod' ? prod : dev;
console.log("stage: ", stage);

export default {
  GA_Tracking_ID: "UA-147348500-1",
  REGEX_EMAIL_ADDRESS: "\\S+@\\S+\\.\\S+",
  REGEX_PASSWORD: "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(.*){8,}$",
  REGEX_CONFIRMATION_CODE: "^\\d{6}$",
  ...config
};
