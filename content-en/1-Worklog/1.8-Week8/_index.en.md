---
title: "Week 8: Amazon DynamoDB and the NoSQL Data Model"
weight: 8
chapter: false
pre: "<b>1.8. </b>"
---

**Topic** NoSQL structure and DynamoDB access patterns.

**Week within the internship** 26/09/2026–02/10/2026.

## Week 8 objectives

- Understand DynamoDB table components and the purpose of keys.
- Read data operation examples using the Console or SDK.

## Learning activities

| Date | Activity | Reference |
| --- | --- | --- |
| 28/09/2026 | Explore tables, items, and attributes to understand the DynamoDB data model. | [FCAJ – Amazon DynamoDB](https://000060.awsfcaj.com/) |
| 29/09/2026 | Learn attribute types and how item keys are defined. | [FCAJ – Amazon DynamoDB](https://000060.awsfcaj.com/) |
| 30/09/2026 | Read an example of creating a table with a partition key and a sort key. | [FCAJ – Amazon DynamoDB](https://000060.awsfcaj.com/) |
| 01/10/2026 | Review the create, read, update, and delete item operations in the lesson. | [FCAJ – Amazon DynamoDB](https://000060.awsfcaj.com/) |
| 02/10/2026 | Learn key conditions in Query operations and relate data design to access patterns. | [FCAJ – Amazon DynamoDB](https://000060.awsfcaj.com/) |

## Week 8 learning outcomes

- Distinguish a DynamoDB table from a JSON document stored in S3.
- Understand how key selection affects item retrieval.

## Connection to Authentication & User responsibilities

In this project, DynamoDB supports the moderation and audit layer maintained by the administration component. Authentication & User uses moderation state to check whether a job can be saved or recorded in application history.

[Account source code and test evidence](/1-worklog/#test-evidence).
