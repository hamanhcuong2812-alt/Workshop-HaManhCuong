---
title: "Worklog Week 2"
weight: 2
chapter: false
pre: "<b>1.2. </b>"
---

**Topic** Identity and access management with IAM.

**Week within the internship** 15/08/2026–21/08/2026.

## Week 2 objectives

- Understand how IAM represents identities and permissions for resources.
- Read policies and identify the permissions the application needs.

## Learning activities

| Date | Activity | Reference |
| --- | --- | --- |
| 17/08/2026 | Review how IAM users and groups are organized according to access needs. | [FCAJ – AWS IAM](https://000002.awsfcaj.com/) |
| 18/08/2026 | Analyze policy elements, including actions, resources, and conditions. | [FCAJ – AWS IAM](https://000002.awsfcaj.com/) |
| 19/08/2026 | Learn about roles and trust relationships when a service assumes a role. | [FCAJ – AWS IAM](https://000002.awsfcaj.com/) |
| 20/08/2026 | Read the Switch Role workflow to understand how permissions from another role are used. | [FCAJ – AWS IAM](https://000002.awsfcaj.com/) |
| 21/08/2026 | Relate the principle of least privilege to backend reads and writes in S3. | [FCAJ – AWS IAM](https://000002.awsfcaj.com/) |

## Week 2 learning outcomes

- Distinguish the identity making a request from the policy restricting allowed actions.
- Understand that website USER/ADMIN authorization is handled by the application, while IAM controls access to AWS resources.

## Connection to Authentication & User responsibilities

Review config/user_data_iam_policy.json to explain s3:GetObject, s3:PutObject, and the users/ prefix accessed by the backend.

[Account source code and test evidence](/1-worklog/#test-evidence).
