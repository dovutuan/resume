<script setup>
import {defineComponent} from 'vue';
import SkillComponent from '@/components/Skill.vue';

defineComponent({name: 'BodyComponent'});
</script>

<template>
  <main class="container mx-auto px-6 py-12">
    <div class="grid lg:grid-cols-3 gap-8">
      <!-- Left Column -->
      <div class="lg:col-span-2 space-y-8">
        <!-- About Section -->
        <section class="bg-white rounded-2xl p-8 card-shadow hover-lift">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <i class="fas fa-user-circle text-purple-600"></i>
            Giới thiệu
          </h2>
          <p class="text-gray-600 leading-relaxed text-lg">
            Tôi là một Full Stack Developer với hơn 5 năm kinh nghiệm phát triển ứng dụng web và mobile.
            Đam mê tạo ra những sản phẩm công nghệ có tác động tích cực đến cuộc sống người dùng.
            Có khả năng làm việc độc lập và theo nhóm, luôn học hỏi và cập nhật các công nghệ mới.
          </p>
        </section>

        <!-- Experience Section -->
        <section class="bg-white rounded-2xl p-8 card-shadow hover-lift">
          <h2 class="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <i class="fas fa-briefcase text-purple-600"></i>
            Kinh nghiệm làm việc
          </h2>

          <div class="space-y-8">
            <div class="relative pl-8 border-l-4 border-purple-200">
              <div class="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full"></div>
              <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-xl font-semibold text-gray-800">Senior Full Stack Developer</h3>
                <p class="text-purple-600 font-medium mb-2">TechCorp Vietnam</p>
                <p class="text-gray-500 text-sm mb-4">01/2022 - Hiện tại</p>
                <ul class="text-gray-600 space-y-2">
                  <li>• Phát triển và duy trì các ứng dụng web quy mô lớn phục vụ 100k+ người dùng</li>
                  <li>• Thiết kế kiến trúc microservices và triển khai CI/CD pipeline</li>
                  <li>• Mentoring team junior developers và code review</li>
                </ul>
              </div>
            </div>

            <div class="relative pl-8 border-l-4 border-purple-200">
              <div class="absolute -left-3 top-0 w-6 h-6 bg-purple-400 rounded-full"></div>
              <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-xl font-semibold text-gray-800">Full Stack Developer</h3>
                <p class="text-purple-600 font-medium mb-2">StartupXYZ</p>
                <p class="text-gray-500 text-sm mb-4">06/2020 - 12/2021</p>
                <ul class="text-gray-600 space-y-2">
                  <li>• Xây dựng ứng dụng e-commerce từ đầu với React.js và Node.js</li>
                  <li>• Tích hợp các API thanh toán và vận chuyển</li>
                  <li>• Tối ưu hóa performance và SEO</li>
                </ul>
              </div>
            </div>

            <div class="relative pl-8 border-l-4 border-purple-200">
              <div class="absolute -left-3 top-0 w-6 h-6 bg-purple-300 rounded-full"></div>
              <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-xl font-semibold text-gray-800">Frontend Developer</h3>
                <p class="text-purple-600 font-medium mb-2">WebStudio</p>
                <p class="text-gray-500 text-sm mb-4">03/2019 - 05/2020</p>
                <ul class="text-gray-600 space-y-2">
                  <li>• Phát triển giao diện responsive cho các dự án web</li>
                  <li>• Làm việc với các framework như Vue.js và Angular</li>
                  <li>• Tối ưu hóa trải nghiệm người dùng</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- Projects Section -->
        <section class="bg-white rounded-2xl p-8 card-shadow hover-lift">
          <h2 class="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <i class="fas fa-code text-purple-600"></i>
            Dự án nổi bật
          </h2>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="border border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-colors">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <i class="fas fa-shopping-cart text-purple-600"></i>
                </div>
                <h3 class="text-lg font-semibold">E-commerce Platform</h3>
              </div>
              <p class="text-gray-600 mb-4">
                Nền tảng thương mại điện tử đầy đủ tính năng với admin dashboard,
                thanh toán online và quản lý kho hàng.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
                <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">MongoDB</span>
              </div>
              <a href="#" class="text-purple-600 hover:text-purple-800 font-medium">
                Xem demo <i class="fas fa-external-link-alt ml-1"></i>
              </a>
            </div>

            <div class="border border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-colors">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <i class="fas fa-chart-line text-green-600"></i>
                </div>
                <h3 class="text-lg font-semibold">Analytics Dashboard</h3>
              </div>
              <p class="text-gray-600 mb-4">
                Dashboard phân tích dữ liệu real-time với biểu đồ tương tác
                và báo cáo tự động.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Vue.js</span>
                <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Laravel</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">PostgreSQL</span>
              </div>
              <a href="#" class="text-purple-600 hover:text-purple-800 font-medium">
                Xem demo <i class="fas fa-external-link-alt ml-1"></i>
              </a>
            </div>
          </div>
        </section>
      </div>

      <!-- Right Column -->
      <div class="space-y-8">
        <!-- Skills Section -->
        <skill-component/>

        <!-- Education Section -->
        <section class="bg-white rounded-2xl p-6 card-shadow hover-lift">
          <h2 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <i class="fas fa-graduation-cap text-purple-600"></i>
            Học vấn
          </h2>

          <div class="space-y-4">
            <div class="border-l-4 border-purple-200 pl-4">
              <h3 class="font-semibold text-gray-800">Cử nhân Công nghệ Thông tin</h3>
              <p class="text-purple-600 font-medium text-sm">Đại học Bách Khoa Hà Nội</p>
              <p class="text-gray-500 text-sm">2015 - 2019</p>
              <p class="text-gray-600 text-sm mt-2">GPA: 3.6/4.0</p>
            </div>
          </div>
        </section>

        <!-- Certifications Section -->
        <section class="bg-white rounded-2xl p-6 card-shadow hover-lift">
          <h2 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <i class="fas fa-certificate text-purple-600"></i>
            Chứng chỉ
          </h2>

          <div class="space-y-4">
            <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <i class="fab fa-aws text-orange-500"></i>
              <div>
                <div class="font-medium text-gray-800">AWS Solutions Architect</div>
                <div class="text-sm text-gray-500">2023</div>
              </div>
            </div>
            <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <i class="fab fa-google text-blue-500"></i>
              <div>
                <div class="font-medium text-gray-800">Google Cloud Professional</div>
                <div class="text-sm text-gray-500">2022</div>
              </div>
            </div>
            <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <i class="fab fa-docker text-blue-600"></i>
              <div>
                <div class="font-medium text-gray-800">Docker Certified Associate</div>
                <div class="text-sm text-gray-500">2021</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Languages Section -->
        <section class="bg-white rounded-2xl p-6 card-shadow hover-lift">
          <h2 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <i class="fas fa-language text-purple-600"></i>
            Ngôn ngữ
          </h2>

          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="font-medium text-gray-700">Tiếng Việt</span>
              <span class="text-sm text-gray-500">Bản ngữ</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="font-medium text-gray-700">Tiếng Anh</span>
              <span class="text-sm text-gray-500">IELTS 7.0</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="font-medium text-gray-700">Tiếng Nhật</span>
              <span class="text-sm text-gray-500">N3</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>