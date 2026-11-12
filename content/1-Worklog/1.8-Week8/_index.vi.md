---
title: "Worklog Tuần 8"
menuTitle: "Worklog Tuần 8"
weight: 8
chapter: false
pre: "<b>1.8. </b>"
---

**Chủ đề** Cấu trúc NoSQL và cách truy cập DynamoDB.

**Khung tuần trong kỳ thực tập** 26/09/2026–02/10/2026.

## Mục tiêu tuần 8

- Hiểu các thành phần của bảng DynamoDB và ý nghĩa khóa.
- Nắm cách đọc ví dụ thao tác dữ liệu bằng Console hoặc SDK.

## Nội dung học tập

| Ngày thực hiện | Nội dung | Tài liệu tham khảo |
| --- | --- | --- |
| 28/09/2026 | Khảo sát Table, Item và Attribute để hiểu mô hình dữ liệu DynamoDB. | [FCAJ – Amazon DynamoDB](https://000060.awsfcaj.com/) |
| 29/09/2026 | Tìm hiểu các kiểu thuộc tính và cách xác định khóa cho item. | [FCAJ – Amazon DynamoDB](https://000060.awsfcaj.com/) |
| 30/09/2026 | Đọc ví dụ tạo bảng có partition key kết hợp sort key. | [FCAJ – Amazon DynamoDB](https://000060.awsfcaj.com/) |
| 01/10/2026 | Theo dõi các thao tác tạo, đọc, sửa và xóa item trong bài học. | [FCAJ – Amazon DynamoDB](https://000060.awsfcaj.com/) |
| 02/10/2026 | Tìm hiểu điều kiện Query gắn với khóa và liên hệ thiết kế dữ liệu theo truy cập. | [FCAJ – Amazon DynamoDB](https://000060.awsfcaj.com/) |

## Kết quả tổng hợp tuần 8

- Phân biệt bảng DynamoDB với việc lưu một tài liệu JSON trong S3.
- Hiểu lựa chọn khóa ảnh hưởng đến cách truy xuất item.

## Liên hệ với phần việc Authentication & User

Trong đề tài, DynamoDB thuộc lớp moderation và audit do phần quản trị phụ trách. Authentication & User sử dụng trạng thái kiểm duyệt để kiểm tra điều kiện lưu hoặc ghi nhận ứng tuyển.

[Mã nguồn và minh chứng phần tài khoản](/1-worklog/#minh-chung-kiem-thu).
