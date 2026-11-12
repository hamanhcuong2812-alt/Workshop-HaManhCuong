---
title: "Worklog Tuần 9"
menuTitle: "Worklog Tuần 9"
weight: 9
chapter: false
pre: "<b>1.9. </b>"
---

**Chủ đề** Python SDK và tính nhất quán khi cập nhật dữ liệu.

**Khung tuần trong kỳ thực tập** 03/10/2026–09/10/2026.

## Mục tiêu tuần 9

- Tìm hiểu cách Boto3 biểu diễn thao tác với DynamoDB.
- Hiểu nguyên tắc transaction và liên hệ với cập nhật dữ liệu đồng thời.

## Nội dung học tập

| Ngày thực hiện | Nội dung | Tài liệu tham khảo |
| --- | --- | --- |
| 05/10/2026 | Đọc cấu trúc chương trình Python khởi tạo kết nối và thao tác bảng DynamoDB. | [FCAJ – Amazon DynamoDB](https://000060.awsfcaj.com/) |
| 06/10/2026 | Theo dõi ví dụ nạp các bản ghi JSON bằng put_item. | [FCAJ – Amazon DynamoDB](https://000060.awsfcaj.com/) |
| 07/10/2026 | Tìm hiểu Query bằng điều kiện khóa trong mã Boto3. | [FCAJ – Amazon DynamoDB](https://000060.awsfcaj.com/) |
| 08/10/2026 | Đọc cơ chế TransactWriteItems để cập nhật các item có quan hệ trong một giao dịch. | [FCAJ – DynamoDB transaction](https://000039.awsfcaj.com/1-lhol/1.2/1.2.6/) |
| 09/10/2026 | Liên hệ tính nguyên tử của transaction với yêu cầu giữ trạng thái và audit nhất quán. | [FCAJ – DynamoDB transaction](https://000039.awsfcaj.com/1-lhol/1.2/1.2.6/) |

## Kết quả tổng hợp tuần 9

- Hiểu cách SDK chuyển thao tác Python thành yêu cầu tới dịch vụ AWS.
- Giải thích được mục đích của transaction khi nhiều bản ghi phải cùng được cập nhật.

## Liên hệ với phần việc Authentication & User

Moderation dùng transaction DynamoDB theo thiết kế nhóm. Dữ liệu cá nhân trên S3 dùng conditional writes với ETag. Hai cơ chế được đối chiếu khi giải thích tính nhất quán ở các lớp lưu trữ.

[Mã nguồn và minh chứng phần tài khoản](/1-worklog/#minh-chung-kiem-thu).
