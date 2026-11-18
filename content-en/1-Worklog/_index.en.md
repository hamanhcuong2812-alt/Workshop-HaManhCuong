---
title: "AWS learning journal and application to the project"
weight: 1
chapter: false
---

**Student** Hà Mạnh Cường – K68CNTTC – Vietnam National University of Agriculture.

**Internship period** 08/08/2026–31/10/2026.

**Project** Vietnam IT Job Market.

**Role** Authentication & User – Accounts, authorization, and personal features.

During the internship, I followed the group AWS learning path, from accounts, IAM, networking, and servers to storage, data, and monitoring. This journal organizes the knowledge into 12 topics and relates each topic to the account functionality in Vietnam IT Job Market.

## Twelve-week overview

| Week | Period | Topic |
| --- | --- | --- |
| 1 | 08/08–14/08/2026 | [Getting started with AWS and cost monitoring](1.1-Week1/) |
| 2 | 15/08–21/08/2026 | [Identity and access management with IAM](1.2-Week2/) |
| 3 | 22/08–28/08/2026 | [AWS networking and application connectivity controls](1.3-Week3/) |
| 4 | 29/08–04/09/2026 | [EC2 and the backend runtime environment](1.4-Week4/) |
| 5 | 05/09–11/09/2026 | [Application IAM roles and administration through SSM](1.5-Week5/) |
| 6 | 12/09–18/09/2026 | [S3 object storage and CLI operations](1.6-Week6/) |
| 7 | 19/09–25/09/2026 | [Protecting user data in S3](1.7-Week7/) |
| 8 | 26/09–02/10/2026 | [NoSQL structure and DynamoDB access patterns](1.8-Week8/) |
| 9 | 03/10–09/10/2026 | [Python SDK and consistency in data updates](1.9-Week9/) |
| 10 | 10/10–16/10/2026 | [Data layers and metadata with Glue Data Catalog](1.10-Week10/) |
| 11 | 17/10–23/10/2026 | [Querying job posting data with Athena](1.11-Week11/) |
| 12 | 24/10–30/10/2026 | [Monitoring, knowledge review, and handover](1.12-Week12/) |

The internship ended on 31/10/2026.

## Notes on compiling this journal

The learning content follows the shared curriculum, which I confirmed was broadly similar to that of other interns in the same period. The topics and project connections have been rewritten for my Authentication & User role. For this report, study dates were distributed across five sessions from Monday to Friday each week, from 10/08 to 30/10/2026, within the internship period of 08/08–31/10/2026. This is a reconstructed presentation schedule and can be checked and adjusted against actual records. The dates 08–09/08 cover the introductory stage, and 31/10 marks the end of the internship.

The learning outcomes summarize the knowledge reviewed. Resource creation, deployment, and testing require corresponding evidence of execution. References use FCAJ lessons from the shared group materials.

## Personal responsibilities and follow-up work

Authentication & User includes registration, login, permission checks, saved jobs, application history, and profiles. Account testing evidence is provided in [Test evidence](#test-evidence).

Updates on 01/11 and deployment evidence on 11/11 belong to follow-up work after the internship. An additional test run on 12/11 in a separate local environment recorded 49 successful executions across six account-related test groups. Logs from the initial and repeated runs were retained for comparison. [View test details](#test-evidence).

## Test evidence

The additional run on 12/11/2026 used Python 3.12.10 and Streamlit 1.65.0 in a separate local environment. Six test groups—auth, registration, s3_store, s3_auth, job_actions, and account_security—recorded 49 successful executions, 0 failures, and 0 errors. Test class inheritance means the execution count includes authentication checks run in several contexts.

The tests use fake clients. The results were recorded during follow-up work after the internship and verify local source-code logic.

- [Test log](/evidence/authentication-tests.txt).
- [Result summary](/evidence/authentication-tests.json).
- [Dependency versions](/evidence/authentication-test-environment.txt).
- [Source fingerprint](/evidence/authentication-source-manifest.json).
