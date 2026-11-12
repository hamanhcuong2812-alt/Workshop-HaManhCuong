---
title: "Worklog Tuần 3"
menuTitle: "Worklog Tuần 3"
weight: 3
chapter: false
pre: "<b>1.3. </b>"
---

**Chủ đề** Mạng AWS và kiểm soát kết nối ứng dụng.

**Khung tuần trong kỳ thực tập** 22/08/2026–28/08/2026.

## Mục tiêu tuần 3

- Nắm vai trò VPC, subnet và bảng định tuyến.
- Hiểu cách Security Group ảnh hưởng đến đường truy cập website.

## Nội dung học tập

| Ngày thực hiện | Nội dung | Tài liệu tham khảo |
| --- | --- | --- |
| 24/08/2026 | Tìm hiểu cách VPC tổ chức môi trường mạng cho tài nguyên AWS. | [FCAJ – Amazon VPC](https://000003.awsfcaj.com/) |
| 25/08/2026 | Đọc khái niệm CIDR, phạm vi subnet và vị trí subnet trong Availability Zone. | [FCAJ – Amazon VPC](https://000003.awsfcaj.com/) |
| 26/08/2026 | Theo dõi vai trò Route Table trong việc lựa chọn đường đi của lưu lượng. | [FCAJ – Amazon VPC](https://000003.awsfcaj.com/) |
| 27/08/2026 | Phân tích luật inbound và outbound của Security Group theo loại kết nối. | [FCAJ – Amazon VPC](https://000003.awsfcaj.com/) |
| 28/08/2026 | Tổng hợp các điểm cần kiểm tra khi ứng dụng trên EC2 chưa truy cập được. | [FCAJ – Amazon VPC](https://000003.awsfcaj.com/) |

## Kết quả tổng hợp tuần 3

- Mô tả được mối liên hệ giữa máy chủ, subnet, route và lớp kiểm soát lưu lượng.
- Xác định được các cấu hình mạng cần đối chiếu khi kiểm tra đường truy cập ứng dụng.

## Liên hệ với phần việc Authentication & User

Trong kiến trúc nhóm, người dùng truy cập website qua Nginx và HTTPS. Phần Authentication & User cần được kiểm tra trong bối cảnh đường truy cập này; triển khai mạng thuộc phần phối hợp của nhóm.

[Mã nguồn và minh chứng phần tài khoản](/1-worklog/#minh-chung-kiem-thu).
