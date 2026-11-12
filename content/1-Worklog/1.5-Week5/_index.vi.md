---
title: "Worklog Tuần 5"
menuTitle: "Worklog Tuần 5"
weight: 5
chapter: false
pre: "<b>1.5. </b>"
---

**Chủ đề** IAM Role cho ứng dụng và quản trị qua SSM.

**Khung tuần trong kỳ thực tập** 05/09/2026–11/09/2026.

## Mục tiêu tuần 5

- Hiểu cách ứng dụng trên EC2 nhận quyền truy cập dịch vụ AWS.
- Tìm hiểu Session Manager trong hoạt động quản trị máy chủ.

## Nội dung học tập

| Ngày thực hiện | Nội dung | Tài liệu tham khảo |
| --- | --- | --- |
| 07/09/2026 | So sánh việc cấp quyền bằng role với cách đưa thông tin truy cập cố định vào ứng dụng. | [FCAJ – IAM Role cho EC2](https://000048.awsfcaj.com/) |
| 08/09/2026 | Đọc trust policy cho EC2 và policy mô tả tài nguyên ứng dụng cần dùng. | [FCAJ – IAM Role cho EC2](https://000048.awsfcaj.com/) |
| 09/09/2026 | Tìm hiểu cách SDK nhận thông tin xác thực khi chương trình chạy trên EC2 có role. | [FCAJ – IAM Role cho EC2](https://000048.awsfcaj.com/) |
| 10/09/2026 | Khảo sát Session Manager và các điều kiện để mở phiên quản trị instance. | [FCAJ – Session Manager](https://000058.awsfcaj.com/) |
| 11/09/2026 | Phân biệt phiên quản trị máy chủ với quyền backend gọi API đọc/ghi S3. | [FCAJ – Session Manager](https://000058.awsfcaj.com/) |

## Kết quả tổng hợp tuần 5

- Giải thích được vai trò của thông tin xác thực tạm thời trong môi trường EC2.
- Hiểu các lớp danh tính gồm người quản trị máy chủ, backend ứng dụng và người dùng website.

## Liên hệ với phần việc Authentication & User

Đối chiếu user_storage.py và aws_clients.py để lần theo cấu hình truy cập S3. Khi giải thích đăng nhập website, cần nêu rõ danh tính AWS được dùng ở backend.

[Mã nguồn và minh chứng phần tài khoản](/1-worklog/#minh-chung-kiem-thu).
