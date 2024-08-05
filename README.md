# HTML to PDF Serverless

## Requires node v18.x

## To deploy changes: 
cdk deploy --profile={profile name with AWS CLI credentials}

## To deploy in a new account: 
First -> cdk bootstrap --profile=bhealth-ai" 
Then deploy

## Permisions:
The AWS account used to deploy must have the following policies attached:

    "iam:CreateRole",
    "iam:TagRole",
    "iam:AttachRolePolicy",
    "iam:DeleteRole",
    "iam:PassRole",
    "iam:PutRolePolicy",
    "iam:DetachRolePolicy",
    "ssm:GetParameter",
    "iam:DeletePolicy"

## Local testing:
To test locally, assure to have Docker use the default socket (if using docker desktop, activate it in advanced settings)
Then: sam local start-api -t ./cdk.out/HtmlPdfServerlessStack.template.json 

## IMPORTANT - Lambda restriction update
https://www.reddit.com/r/aws/comments/1c774zh/aws_puppeteer_issues/

## Medium guide
https://medium.com/@philblenk6/html-to-pdf-using-aws-lambda-a61abcdd50d4