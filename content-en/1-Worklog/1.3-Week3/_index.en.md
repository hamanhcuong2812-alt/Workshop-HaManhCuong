---
title: "Week 3: Understanding the Connection from Users to the Application"
weight: 3
chapter: false
pre: "<b>1.3. </b>"
---

**Topic** AWS networking and application connectivity controls.

**Week within the internship** 22/08/2026–28/08/2026.

## Week 3 objectives

- Understand the roles of VPCs, subnets, and route tables.
- Understand how security groups affect website connectivity.

## Learning activities

| Date | Activity | Reference |
| --- | --- | --- |
| 24/08/2026 | Learn how a VPC organizes the network environment for AWS resources. | [FCAJ – Amazon VPC](https://000003.awsfcaj.com/) |
| 25/08/2026 | Read about CIDR, subnet address ranges, and subnet placement in an Availability Zone. | [FCAJ – Amazon VPC](https://000003.awsfcaj.com/) |
| 26/08/2026 | Review how a route table selects the path for network traffic. | [FCAJ – Amazon VPC](https://000003.awsfcaj.com/) |
| 27/08/2026 | Analyze inbound and outbound security group rules for different connection types. | [FCAJ – Amazon VPC](https://000003.awsfcaj.com/) |
| 28/08/2026 | Summarize the checks needed when an application on EC2 cannot be reached. | [FCAJ – Amazon VPC](https://000003.awsfcaj.com/) |

## Week 3 learning outcomes

- Describe the relationship between a server, subnet, route, and traffic controls.
- Identify network settings to review when testing application access.

## Connection to Authentication & User responsibilities

In the group architecture, users access the website through Nginx over HTTPS. Authentication & User features must be checked through this access path; network deployment is a shared responsibility within the group.

[Account source code and test evidence](/1-worklog/#test-evidence).
