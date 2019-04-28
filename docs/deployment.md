# Deployment

Currently using AWS Elastic Beanstalk for deployment.

## Setup

Install awscli

```
pipenv install awscli
```

## Initial steps

Create application
```
aws elasticbeanstalk create-application --application-name=webprecon
```

Create environment
```
aws elasticbeanstalk --application-name=webprecon create-environment --environment-name=webprecon --cname-prefix=webprecon --solution-stack-name="64bit Amazon Linux 2018.03 v2.12.10 running Docker 18.06.1-ce"
```

List of solution stack names, can be found in [AWS Docs for Elastic Beanstalk
Supported Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/platforms/platforms-supported.html)
