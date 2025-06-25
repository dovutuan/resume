export const efalconV2 = {
    icon: 'fa-solid fa-check-to-slot',
    name: 'E-falcon V2',
    time: '09/2024 - 02/2025',
    position: 'DevOps',
    customer: 'Nhật Bản',
    size: '24MM',
    backends: ['Laravel', 'NestJS', 'Redis'],
    frontends: null,
    databases: ['MySQL'],
    tools: ['Docker', 'Fluentd', 'Slack', 'Sentry'],
    iacs: ['Terraform', 'Terragrunt'],
    clouds: ['AWS'],
    description:
        '• Tái thiết kế và xây dựng lại kiến trúc hệ thống (Architecture) cho toàn bộ ứng dụng hiện tại, bao gồm cả hệ thống migrate dữ liệu.'
        + '\n' +
        '• Nâng cấp hạ tầng: chuyển đổi từ EC2 sang ECS Fargate cho các service chính như: Web, PDF Capture, Fluentd, Schedule và Queue (Job).'
        + '\n' +
        '• Chuyển đổi cách giao tiếp giữa các service nội bộ từ gọi API qua public sang sử dụng Route 53 private zone để giao tiếp nội bộ (ví dụ: Fluentd đồng bộ log sang S3).'
        + '\n' +
        '• Nâng cấp hệ thống log: chuyển sang sử dụng CloudWatch Logs để đọc log hệ thống và ứng dụng dễ dàng hơn.'
        + '\n' +
        '• Thiết lập hệ thống giám sát và cảnh báo (CloudWatch Alarms): gửi thông báo qua Slack khi xảy ra lỗi code, hoặc hệ thống quá tải (CPU, Memory).'
        + '\n' +
        '• Hỗ trợ khách hàng triển khai quá trình migrate hệ thống đến người dùng cuối (end-users) một cách trơn tru, đảm bảo không phát sinh sự cố nghiêm trọng.'
        + '\n' +
        '• Thiết lập và triển khai toàn bộ hạ tầng Cloud AWS bằng Terraform và Terragrunt, đảm bảo tự động hóa, mở rộng linh hoạt, và đồng nhất giữa các môi trường: staging, pre-staging, production, pre-production.'
        + '\n' +
        '• Triển khai hệ thống CI/CD hoàn chỉnh thông qua CodePipeline, CodeBuild, CodeDeploy, và sử dụng CodeStar Notifications để gửi thông báo trạng thái build/deploy.'
};
