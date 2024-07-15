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