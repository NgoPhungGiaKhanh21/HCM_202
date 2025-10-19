import Header from "../components/Header";
import {
  Sparkles,
  TrendingUp,
  Globe,
  Cpu,
  Factory,
  BarChart3,
} from "lucide-react";
import poster from "../assets/posterMLN.png";
import TakeQuiz from "./TakeQuiz";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="text-center mb-16 pt-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Sparkles size={20} />
            <span className="text-sm font-medium">
              Chương 6: CNH - HĐH & Hội nhập kinh tế quốc tế
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Trí tuệ nhân tạo và Chuyển đổi số: <br />
            <span className="text-blue-600">
              Bước nhảy công nghiệp hóa mới
            </span>{" "}
            cho Việt Nam?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Khám phá vai trò của AI và chuyển đổi số trong quá trình công nghiệp
            hoá, hiện đại hoá và hội nhập kinh tế quốc tế của Việt Nam
          </p>

          <div className="max-w-4xl mx-auto">
            <img
              src={poster}
              alt="Thanh niên Việt Nam và công nghệ"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
            <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Factory className="text-blue-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Công nghiệp hoá
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Quá trình chuyển đổi từ nền kinh tế nông nghiệp sang công nghiệp,
              ứng dụng công nghệ hiện đại vào sản xuất
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
            <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="text-green-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Hiện đại hoá
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Nâng cao trình độ khoa học kỹ thuật, cải tiến phương thức quản lý
              và nâng cao chất lượng cuộc sống
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
            <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Globe className="text-purple-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Hội nhập kinh tế
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Tham gia sâu rộng vào nền kinh tế thế giới, mở rộng thương mại và
              hợp tác quốc tế
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-10 mb-16 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">
                Vai trò của AI & Chuyển đổi số
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Trí tuệ nhân tạo và chuyển đổi số đang tạo ra cơ hội lớn cho
                Việt Nam trong việc rút ngắn khoảng cách công nghệ, tăng năng
                suất lao động và nâng cao sức cạnh tranh quốc tế.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <Cpu size={16} />
                  </div>
                  <span>Tự động hóa sản xuất và tối ưu quy trình</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <BarChart3 size={16} />
                  </div>
                  <span>Phân tích dữ liệu lớn để ra quyết định chính xác</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <Globe size={16} />
                  </div>
                  <span>Kết nối toàn cầu và mở rộng thị trường</span>
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <Cpu className="text-white mb-4" size={64} />
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">4.0</div>
                  <div className="text-blue-100">Cách mạng công nghiệp</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cơ hội</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span>Rút ngắn quá trình phát triển công nghiệp</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span>Tăng năng suất và hiệu quả sản xuất</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span>Tạo việc làm mới và nâng cao kỹ năng lao động</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span>Cải thiện dịch vụ công và chất lượng cuộc sống</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Thách thức
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">!</span>
                <span>Thiếu nguồn nhân lực chất lượng cao</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">!</span>
                <span>Hạ tầng công nghệ chưa đồng đều</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">!</span>
                <span>Khoảng cách số giữa các vùng miền</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">!</span>
                <span>Cần đầu tư lớn vào nghiên cứu và phát triển</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="text-center bg-white rounded-xl shadow-lg p-10 border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Câu hỏi đặt ra
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Liệu Trí tuệ nhân tạo và chuyển đổi số có thể trở thành
            <span className="font-bold text-blue-600">
              {" "}
              "bước nhảy công nghiệp hóa mới"
            </span>{" "}
            cho Việt Nam, giúp đất nước vươn lên ngang tầm với các quốc gia phát
            triển trong kỷ nguyên số?
          </p>
        </section>

        <TakeQuiz />
      </main>
    </div>
  );
}
