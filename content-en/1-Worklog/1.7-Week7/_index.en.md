---
title: "Week 7: Access Controls and Personal Data Protection"
weight: 7
chapter: false
pre: "<b>1.7. </b>"
---

**Topic** Protecting user data in S3.

**Week within the internship** 19/09/2026–25/09/2026.

## Week 7 objectives

- Learn access control and data encryption layers.
- Relate S3 settings to personal data protection requirements.

## Learning activities

| Date | Activity | Reference |
| --- | --- | --- |
| 21/09/2026 | Read how IAM policies and bucket policies work together to control access. | [FCAJ – Amazon S3 security](https://000069.awsfcaj.com/) |
| 22/09/2026 | Learn the purpose of Block Public Access for bucket data. | [FCAJ – Amazon S3 security](https://000069.awsfcaj.com/) |
| 23/09/2026 | Review bucket policy conditions that require HTTPS for data transfer. | [FCAJ – Amazon S3 security](https://000069.awsfcaj.com/) |
| 24/09/2026 | Learn about versioning and using object versions for recovery. | [FCAJ – Amazon S3](https://000057.awsfcaj.com/) |
| 25/09/2026 | Read server-side encryption requirements and distinguish encryption from access control. | [FCAJ – Amazon S3 security](https://000069.awsfcaj.com/) |

## Week 7 learning outcomes

- Distinguish connection protection, data encryption, and read/write permission restrictions.
- Understand the relationship between versioning, storage, and data recovery.

## Connection to Authentication & User responsibilities

Review s3_store.py, ServerSideEncryption, and conditional object writes. The account functionality also hashes passwords in passwords.py and checks data ownership in the service layer.

[Account source code and test evidence](/1-worklog/#test-evidence).
