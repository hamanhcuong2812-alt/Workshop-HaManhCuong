---
title: "Worklog Tuần 2"
menuTitle: "Worklog Tuần 2"
weight: 2
chapter: false
pre: "<b>1.2. </b>"
---

**Chủ đề** Danh tính và quyền truy cập với IAM.

**Khung tuần trong kỳ thực tập** 15/08/2026–21/08/2026.

## Mục tiêu tuần 2

- Hiểu cách IAM biểu diễn danh tính và quyền đối với tài nguyên.
- Đọc được policy và xác định phạm vi quyền ứng dụng cần sử dụng.

## Nội dung học tập

| Ngày thực hiện | Nội dung | Tài liệu tham khảo |
| --- | --- | --- |
| 17/08/2026 | Hệ thống hóa cách tổ chức IAM User và Group theo nhu cầu truy cập. | [FCAJ – AWS IAM](https://000002.awsfcaj.com/) |
| 18/08/2026 | Phân tích các thành phần của policy, gồm hành động, tài nguyên và điều kiện. | [FCAJ – AWS IAM](https://000002.awsfcaj.com/) |
| 19/08/2026 | Tìm hiểu Role và mối quan hệ tin cậy khi một dịch vụ đảm nhận vai trò. | [FCAJ – AWS IAM](https://000002.awsfcaj.com/) |
| 20/08/2026 | Đọc luồng Switch Role để hiểu cách sử dụng quyền được cấp cho một vai trò khác. | [FCAJ – AWS IAM](https://000002.awsfcaj.com/) |
| 21/08/2026 | Liên hệ nguyên tắc quyền tối thiểu với backend đọc và ghi dữ liệu trên S3. | [FCAJ – AWS IAM](https://000002.awsfcaj.com/) |

## Kết quả tổng hợp tuần 2

- Phân biệt danh tính thực hiện yêu cầu với policy giới hạn các thao tác được phép.
- Hiểu quyền USER/ADMIN của website được xử lý ở lớp ứng dụng; IAM kiểm soát truy cập tài nguyên AWS.

## Liên hệ với phần việc Authentication & User

Đối chiếu config/user_data_iam_policy.json để giải thích các quyền s3:GetObject, s3:PutObject và phạm vi users/ mà backend sử dụng.

[Mã nguồn và minh chứng phần tài khoản](/1-worklog/#minh-chung-kiem-thu).
