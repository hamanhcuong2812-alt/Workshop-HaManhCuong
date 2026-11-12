---
title: "Nhật ký học AWS và vận dụng vào đề tài"
weight: 1
chapter: false
pre: "<b>1. </b>"
---

**Sinh viên** Hà Mạnh Cường – K68CNTTC – Học viện Nông nghiệp Việt Nam.

**Thời gian thực tập** 08/08/2026–31/10/2026.

**Đề tài** Vietnam IT Job Market.

**Vai trò** Authentication & User – Tài khoản, phân quyền và chức năng cá nhân.

Trong kỳ thực tập, tôi theo lộ trình tìm hiểu AWS cùng nhóm, từ tài khoản, IAM, mạng và máy chủ đến lưu trữ, dữ liệu và giám sát. Nhật ký này hệ thống hóa kiến thức theo 12 chủ đề và liên hệ từng nội dung với phần tài khoản của Vietnam IT Job Market.

## Nội dung 12 tuần

| Tuần | Khung thời gian | Chủ đề |
| --- | --- | --- |
| 1 | 08/08–14/08/2026 | [Làm quen môi trường AWS và theo dõi chi phí](1.1-Week1/) |
| 2 | 15/08–21/08/2026 | [Danh tính và quyền truy cập với IAM](1.2-Week2/) |
| 3 | 22/08–28/08/2026 | [Mạng AWS và kiểm soát kết nối ứng dụng](1.3-Week3/) |
| 4 | 29/08–04/09/2026 | [EC2 và môi trường chạy backend](1.4-Week4/) |
| 5 | 05/09–11/09/2026 | [IAM Role cho ứng dụng và quản trị qua SSM](1.5-Week5/) |
| 6 | 12/09–18/09/2026 | [Lưu trữ object trên S3 và thao tác với CLI](1.6-Week6/) |
| 7 | 19/09–25/09/2026 | [Bảo vệ dữ liệu người dùng trên S3](1.7-Week7/) |
| 8 | 26/09–02/10/2026 | [Cấu trúc NoSQL và cách truy cập DynamoDB](1.8-Week8/) |
| 9 | 03/10–09/10/2026 | [Python SDK và tính nhất quán khi cập nhật dữ liệu](1.9-Week9/) |
| 10 | 10/10–16/10/2026 | [Các lớp dữ liệu và metadata với Glue Data Catalog](1.10-Week10/) |
| 11 | 17/10–23/10/2026 | [Truy vấn dữ liệu tuyển dụng với Athena](1.11-Week11/) |
| 12 | 24/10–30/10/2026 | [Giám sát, tổng hợp kiến thức và bàn giao](1.12-Week12/) |

Ngày 31/10/2026 là mốc kết thúc kỳ thực tập.

## Ghi chú về quá trình tổng hợp

Nội dung học dựa trên lộ trình chung mà cá nhân xác nhận có mức độ tương đồng với các thành viên cùng kỳ. Các chủ đề và phần liên hệ đã được viết lại theo vai trò Authentication & User. Theo cách tổng hợp được lựa chọn, ngày học được phân bổ đều 5 buổi từ thứ Hai đến thứ Sáu mỗi tuần, từ 10/08 đến 30/10/2026, trong kỳ thực tập 08/08–31/10/2026. Đây là lịch phân bổ để trình bày báo cáo; có thể đối chiếu và điều chỉnh theo ghi chép thực tế. Ngày 08–09/08 thuộc giai đoạn khởi động và 31/10 là mốc kết thúc kỳ.

Các kết quả học tập thể hiện kiến thức được hệ thống hóa. Những thao tác tạo tài nguyên, triển khai và kiểm thử cần đi kèm minh chứng thực hiện tương ứng. Tài liệu tham khảo sử dụng các bài học FCAJ trong bộ tài liệu chung của nhóm.

## Phần việc cá nhân và giai đoạn hoàn thiện

Phần Authentication & User gồm đăng ký, đăng nhập, kiểm tra quyền, việc làm đã lưu, lịch sử ứng tuyển và hồ sơ. Mã nguồn liên quan cùng minh chứng được trình bày tại [mục 5.10](/5-workshop/5.10-users-administration/).

Các cập nhật ngày 01/11 và minh chứng triển khai ngày 11/11 thuộc giai đoạn hoàn thiện sau kỳ thực tập. Lượt kiểm tra bổ sung ngày 12/11 trong môi trường local riêng ghi nhận 49 trường hợp thành công thuộc sáu nhóm kiểm thử tài khoản; log lượt đầu và lượt chạy lại được lưu để đối chiếu. [Xem chi tiết kiểm thử](/1-worklog/#minh-chung-kiem-thu).


## Minh chứng kiểm thử

Lượt kiểm tra bổ sung ngày 12/11/2026 sử dụng Python 3.12.10 và Streamlit 1.65.0 trong môi trường local riêng. Sáu nhóm test gồm auth, registration, s3_store, s3_auth, job_actions và account_security ghi nhận 49 lượt thành công, 0 failure và 0 error. Các lớp test có kế thừa nên số lượt gồm cả kiểm tra xác thực được chạy trong nhiều bối cảnh.

Bộ test sử dụng fake clients. Kết quả được ghi ở giai đoạn hoàn thiện sau kỳ thực tập và có phạm vi kiểm tra logic của mã nguồn tại local.

- [Log kiểm thử](/evidence/authentication-tests.txt).
- [Kết quả tổng hợp](/evidence/authentication-tests.json).
- [Phiên bản dependency](/evidence/authentication-test-environment.txt).
- [Fingerprint mã nguồn](/evidence/authentication-source-manifest.json).
