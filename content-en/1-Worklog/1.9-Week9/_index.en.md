---
title: "Week 9: Python SDK and Consistency in Data Updates"
weight: 9
chapter: false
pre: "<b>1.9. </b>"
---

**Topic** Python SDK and consistency in data updates.

**Week within the internship** 03/10/2026–09/10/2026.

## Week 9 objectives

- Learn how Boto3 represents DynamoDB operations.
- Understand transaction principles and their connection to concurrent updates.

## Learning activities

| Date | Activity | Reference |
| --- | --- | --- |
| 05/10/2026 | Read the structure of a Python program that initializes a connection and operates on DynamoDB tables. | [FCAJ – Amazon DynamoDB](https://000060.awsfcaj.com/) |
| 06/10/2026 | Review an example of loading JSON records with put_item. | [FCAJ – Amazon DynamoDB](https://000060.awsfcaj.com/) |
| 07/10/2026 | Learn Query operations with key conditions in Boto3 code. | [FCAJ – Amazon DynamoDB](https://000060.awsfcaj.com/) |
| 08/10/2026 | Read about TransactWriteItems for updating related items within one transaction. | [FCAJ – DynamoDB transaction](https://000039.awsfcaj.com/1-lhol/1.2/1.2.6/) |
| 09/10/2026 | Relate transaction atomicity to keeping state and audit records consistent. | [FCAJ – DynamoDB transaction](https://000039.awsfcaj.com/1-lhol/1.2/1.2.6/) |

## Week 9 learning outcomes

- Understand how the SDK converts Python operations into requests to AWS services.
- Explain why transactions are needed when several records must be updated together.

## Connection to Authentication & User responsibilities

Moderation uses DynamoDB transactions according to the group design. User data in S3 uses conditional writes with ETags. The two mechanisms are compared when explaining consistency across storage layers.

[Account source code and test evidence](/1-worklog/#test-evidence).
