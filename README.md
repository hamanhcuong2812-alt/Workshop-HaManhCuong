# Báo cáo thực tập – Hà Mạnh Cường

Báo cáo Vietnam IT Job Market, vai trò Authentication & User, giai đoạn 08/08/2026–31/10/2026.

## Nội dung

Trang chủ và bảy mục báo cáo bằng tiếng Việt. Worklog có 12 chủ đề học AWS và 60 buổi được phân bổ khi tổng hợp. Bản đề xuất và Workshop dùng nội dung chung của nhóm. Mục Blog ghi chưa có bài được đăng, mục Sự kiện ghi hoạt động đã xác nhận tham dự.

## Chỉnh sửa

- Nội dung trang chủ tại content/trang-chu.html.
- Nội dung các mục tại content/.
- Ảnh và log tại assets/.
- Giao diện tại style.css và app.js.

## Chạy local

Cần Node.js và Python.

```powershell
node build.mjs
node check.mjs
python -m http.server 8765 --directory dist
```

Mở http://127.0.0.1:8765.

## GitHub Pages

Trong Settings → Pages, chọn nguồn GitHub Actions. Workflow tự tạo và kiểm tra website rồi triển khai sau mỗi lần push lên main. Website dùng đường dẫn /Workshop-HaManhCuong/ khi tên repository là Workshop-HaManhCuong.

Để thử cấu hình đường dẫn repository bằng PowerShell.

```powershell
$env:SITE_BASE_PATH = '/Workshop-HaManhCuong/'
node build.mjs
node check.mjs
```

Nội dung báo cáo và cấu hình triển khai nằm trong repository này. Các thông tin xác thực cùng dữ liệu runtime của ứng dụng AWS được quản lý riêng.
