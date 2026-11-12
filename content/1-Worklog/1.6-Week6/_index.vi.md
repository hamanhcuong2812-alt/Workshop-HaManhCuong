---
title: "Worklog Tuần 6"
menuTitle: "Worklog Tuần 6"
weight: 6
chapter: false
pre: "<b>1.6. </b>"
---

**Chủ đề** Lưu trữ object trên S3 và thao tác với CLI.

**Khung tuần trong kỳ thực tập** 12/09/2026–18/09/2026.

## Mục tiêu tuần 6

- Hiểu mô hình bucket, object và key.
- Đọc các thao tác CLI liên quan đến dữ liệu của ứng dụng.

## Nội dung học tập

| Ngày thực hiện | Nội dung | Tài liệu tham khảo |
| --- | --- | --- |
| 14/09/2026 | Tìm hiểu các trường hợp sử dụng object storage và cấu trúc dữ liệu trong bucket. | [FCAJ – Amazon S3](https://000057.awsfcaj.com/) |
| 15/09/2026 | Đọc quy tắc chọn Region, đặt tên bucket và tổ chức object key. | [FCAJ – Amazon S3](https://000057.awsfcaj.com/) |
| 16/09/2026 | Theo dõi luồng tải dữ liệu lên S3 và nhận diện vị trí object sau khi lưu. | [FCAJ – Amazon S3](https://000057.awsfcaj.com/) |
| 17/09/2026 | Tìm hiểu cấu hình profile, Region và định dạng đầu ra của AWS CLI. | [FCAJ – AWS CLI](https://000011.awsfcaj.com/) |
| 18/09/2026 | Đọc các ví dụ liệt kê, sao chép và tải dữ liệu để đối chiếu bucket cùng key đích. | [FCAJ – AWS CLI](https://000011.awsfcaj.com/) |

## Kết quả tổng hợp tuần 6

- Mô tả được cách một object được định danh trong S3.
- Hiểu ý nghĩa của cấu hình môi trường và đích thao tác trước khi sử dụng CLI.

## Liên hệ với phần việc Authentication & User

Liên hệ users/accounts.json với tài khoản và users/activity/<hash-user-id>.json với hoạt động cá nhân. Mã nguồn đối chiếu gồm user_storage.py và s3_store.py.

[Mã nguồn và minh chứng phần tài khoản](/1-worklog/#minh-chung-kiem-thu).
