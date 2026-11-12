---
title: "Worklog Tuần 7"
menuTitle: "Worklog Tuần 7"
weight: 7
chapter: false
pre: "<b>1.7. </b>"
---

**Chủ đề** Bảo vệ dữ liệu người dùng trên S3.

**Khung tuần trong kỳ thực tập** 19/09/2026–25/09/2026.

## Mục tiêu tuần 7

- Tìm hiểu các lớp kiểm soát truy cập và mã hóa dữ liệu.
- Liên hệ các thiết lập S3 với yêu cầu bảo vệ thông tin cá nhân.

## Nội dung học tập

| Ngày thực hiện | Nội dung | Tài liệu tham khảo |
| --- | --- | --- |
| 21/09/2026 | Đọc cách phối hợp IAM policy và bucket policy trong quản lý truy cập. | [FCAJ – Bảo mật Amazon S3](https://000069.awsfcaj.com/) |
| 22/09/2026 | Tìm hiểu mục đích Block Public Access đối với dữ liệu trong bucket. | [FCAJ – Bảo mật Amazon S3](https://000069.awsfcaj.com/) |
| 23/09/2026 | Theo dõi điều kiện yêu cầu truyền dữ liệu qua HTTPS trong bucket policy. | [FCAJ – Bảo mật Amazon S3](https://000069.awsfcaj.com/) |
| 24/09/2026 | Tìm hiểu versioning và cách sử dụng các phiên bản object khi cần phục hồi. | [FCAJ – Amazon S3](https://000057.awsfcaj.com/) |
| 25/09/2026 | Đọc yêu cầu mã hóa server-side và phân biệt với kiểm soát người được truy cập. | [FCAJ – Bảo mật Amazon S3](https://000069.awsfcaj.com/) |

## Kết quả tổng hợp tuần 7

- Phân biệt bảo vệ kết nối, mã hóa dữ liệu và giới hạn quyền đọc/ghi.
- Hiểu versioning có liên quan đến lưu trữ và quy trình phục hồi dữ liệu.

## Liên hệ với phần việc Authentication & User

Đối chiếu s3_store.py với ServerSideEncryption và điều kiện ghi object. Phần tài khoản đồng thời có xử lý băm mật khẩu trong passwords.py và kiểm tra quyền sở hữu dữ liệu tại service.

[Mã nguồn và minh chứng phần tài khoản](/1-worklog/#minh-chung-kiem-thu).
