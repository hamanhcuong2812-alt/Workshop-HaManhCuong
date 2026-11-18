---
title: "Week 5: Service Access through Roles and SSM Administration Sessions"
weight: 5
chapter: false
pre: "<b>1.5. </b>"
---

**Topic** Application IAM roles and administration through SSM.

**Week within the internship** 05/09/2026–11/09/2026.

## Week 5 objectives

- Understand how an application on EC2 obtains access to AWS services.
- Learn about Session Manager for server administration.

## Learning activities

| Date | Activity | Reference |
| --- | --- | --- |
| 07/09/2026 | Compare role-based permissions with embedding long-term credentials in an application. | [FCAJ – IAM roles for EC2](https://000048.awsfcaj.com/) |
| 08/09/2026 | Read the EC2 trust policy and the policy describing resources needed by the application. | [FCAJ – IAM roles for EC2](https://000048.awsfcaj.com/) |
| 09/09/2026 | Learn how the SDK obtains credentials when a program runs on EC2 with an attached role. | [FCAJ – IAM roles for EC2](https://000048.awsfcaj.com/) |
| 10/09/2026 | Explore Session Manager and the prerequisites for opening an administration session. | [FCAJ – Session Manager](https://000058.awsfcaj.com/) |
| 11/09/2026 | Distinguish a server administration session from backend permissions to call S3 read/write APIs. | [FCAJ – Session Manager](https://000058.awsfcaj.com/) |

## Week 5 learning outcomes

- Explain the role of temporary credentials in the EC2 environment.
- Understand the identities of server administrators, the application backend, and website users.

## Connection to Authentication & User responsibilities

Review user_storage.py and aws_clients.py to trace the S3 access configuration. When explaining website login, identify the AWS identity used by the backend.

[Account source code and test evidence](/1-worklog/#test-evidence).
