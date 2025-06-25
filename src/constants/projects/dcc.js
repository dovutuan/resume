export const dcc = {
    icon: 'fa-solid fa-hospital',
    name: 'Dcc',
    time: '08/2020 - 01/2021',
    position: 'Dev Backend',
    customer: 'Nhật Bản',
    size: '20MM',
    backends: ['Laravel'],
    frontends: ['Angular'],
    databases: ['MySQL', 'PostgreSQL'],
    tools: [],
    iacs: [],
    clouds: [],
    description:
        '• Dự án phục vụ cho một bệnh viện mắt tại Nhật Bản, bao gồm hai máy chủ cục bộ với mức độ bảo mật cao, được quản lý riêng biệt.'
        + '\n' +
        '• Máy chủ thứ nhất: kết nối với hệ thống dữ liệu PostgreSQL nội bộ thông qua ODBC (odbc_exec). Mã hóa dữ liệu và lưu trữ vào MySQL. Thiết lập hệ thống job tự động chạy hằng ngày để đồng bộ dữ liệu giữa hai cơ sở dữ liệu. Lưu trữ thông tin chi tiết của quá trình đồng bộ: tổng số bản ghi đọc, ghi thành công, ghi lỗi – hỗ trợ trích xuất và phân tích sau này.'
        + '\n' +
        '• Cung cấp lệnh giải mã dữ liệu để máy khách (client) có thể xác minh nội dung khi cần thiết.'
        + '\n' +
        '• Máy chủ thứ hai: phát triển hệ thống web nội bộ phục vụ quản lý thông tin bệnh viện, mẫu báo cáo, phân quyền người dùng, và tạo giao diện trực quan hóa dữ liệu phân tích theo từng người dùng.'
};
