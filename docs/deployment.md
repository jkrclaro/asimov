# Deployment

Currently using AWS Elastic Beanstalk for deploying a single docker container.

## Setup

*NOTE: As of this writing, awsebcli is broken with Python 3.7.*

Install awsebcli, **EB CLI 3.14.6 (Python 2.7.1)**. Consider using **brew**
to separate your system's default Python3 version.

To update
```
eb deploy
```

# Notes
- Make sure to only have one Dockerfile for the .zip file being created by EB if platform is a single docker container. Otherwise deployment will fail. Use .ebignore if you have to.