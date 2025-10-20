import Header from "../components/Header";
import ChatBoxAI from "../components/ChatBoxAI";
import {
  Sparkles,
  TrendingUp,
  Globe,
  Factory,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import poster1 from "../assets/posterMLN.png";
import poster2 from "../assets/bg1.jpg";
import poster3 from "../assets/bg2.jpg";
import poster4 from "../assets/bg3.jpg";
import { Carousel } from "antd";
import TakeQuiz from "../page/TakeQuiz";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="text-center mb-16 pt-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 border border-blue-200">
            <Sparkles size={20} />
            <span className="text-sm font-medium">
              Chương 6: Công nghiệp hóa, Hiện đại hóa & Hội nhập kinh tế quốc tế
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight text-balance">
            Công nghiệp hóa, Hiện đại hóa <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              và Hội nhập kinh tế quốc tế
            </span>{" "}
            của Việt Nam
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Khám phá quá trình chuyển đổi nền kinh tế Việt Nam từ nền sản xuất
            lạc hậu sang nền sản xuất hiện đại, và vai trò của hội nhập kinh tế
            quốc tế trong sự phát triển bền vững
          </p>

          <div className="max-w-4xl mx-auto">
            <Carousel
              autoplay
              dotPosition="bottom"
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              {[poster1, poster2, poster3, poster4].map((img, index) => (
                <div key={index}>
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Poster ${index + 1}`}
                    className="w-full h-[1500px] object-cover"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 group">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Factory className="text-blue-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Công nghiệp hóa
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Quá trình chuyển đổi căn bản từ sử dụng sức lao động thủ công sang
              sử dụng công nghệ, phương tiện hiện đại, nhằm tạo ra năng suất lao
              động xã hội cao
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-green-200 group">
            <div className="bg-gradient-to-br from-green-100 to-green-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="text-green-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Hiện đại hóa
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Nâng cao trình độ khoa học kỹ thuật, cải tiến phương thức quản lý,
              và nâng cao chất lượng cuộc sống toàn xã hội
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-purple-200 group">
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Globe className="text-purple-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Hội nhập kinh tế quốc tế
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Quá trình gắn kết nền kinh tế Việt Nam với nền kinh tế thế giới,
              mở rộng thị trường và hợp tác quốc tế
            </p>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-10 border border-gray-100 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Các cuộc Cách mạng Công nghiệp
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Lần thứ I (Thế kỷ XVIII-XIX)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Khởi phát ở Anh, chuyển từ lao động thủ công sang sử dụng máy
                móc, cơ giới hóa sản xuất bằng năng lượng nước và hơi nước
              </p>
            </div>
            <div className="border-l-4 border-green-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Lần thứ II (Thế kỷ XIX-XX)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Chuyển nền sản xuất cơ khí sang nền sản xuất điện-cơ khí và tự
                động hóa cục bộ trong sản xuất
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Lần thứ III (Thập niên 60-cuối thế kỷ XX)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Xuất hiện công nghệ thông tin, tự động hóa sản xuất, và sự phát
                triển của máy tính
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Lần thứ IV (Từ năm 2011)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Xuất hiện các công nghệ đột phá: trí tuệ nhân tạo, big data, in
                3D, và Internet of Things
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-2xl shadow-2xl p-10 mb-16 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">
                Công nghiệp hóa, Hiện đại hóa ở Việt Nam
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Công nghiệp hóa ở Việt Nam được thực hiện theo định hướng xã hội
                chủ nghĩa với mục tiêu "dân giàu, nước mạnh, dân chủ, công bằng,
                văn minh"
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1 flex-shrink-0">
                    <CheckCircle size={16} />
                  </div>
                  <span>
                    Tạo lập điều kiện chuyển đổi từ nền sản xuất lạc hậu sang
                    hiện đại
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1 flex-shrink-0">
                    <CheckCircle size={16} />
                  </div>
                  <span>Ứng dụng thành tựu khoa học công nghệ mới</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1 flex-shrink-0">
                    <CheckCircle size={16} />
                  </div>
                  <span>
                    Chuyển đổi cơ cấu kinh tế theo hướng hiện đại và hợp lý
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1 flex-shrink-0">
                    <CheckCircle size={16} />
                  </div>
                  <span>Thích ứng với cách mạng công nghiệp 4.0</span>
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <Factory className="text-white mb-4" size={64} />
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">Mục tiêu</div>
                  <div className="text-blue-100">Phát triển bền vững</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Hội nhập Kinh tế Quốc tế
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-2 rounded-lg">
                  <CheckCircle className="text-green-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Tác động Tích cực
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg flex-shrink-0">
                    ✓
                  </span>
                  <span>Mở rộng thị trường và tiếp thu khoa học công nghệ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg flex-shrink-0">
                    ✓
                  </span>
                  <span>Thu hút vốn đầu tư nước ngoài</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg flex-shrink-0">
                    ✓
                  </span>
                  <span>Thúc đẩy công nghiệp hóa và tăng tích lũy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg flex-shrink-0">
                    ✓
                  </span>
                  <span>Tạo nhiều cơ hội việc làm mới</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg flex-shrink-0">
                    ✓
                  </span>
                  <span>Nâng cao chất lượng nguồn nhân lực</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <AlertCircle className="text-orange-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Tác động Tiêu cực
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-lg flex-shrink-0">
                    !
                  </span>
                  <span>Gia tăng cạnh tranh gay gắt</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-lg flex-shrink-0">
                    !
                  </span>
                  <span>Phụ thuộc nền kinh tế vào thị trường bên ngoài</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-lg flex-shrink-0">
                    !
                  </span>
                  <span>Phân phối không công bằng lợi ích</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-lg flex-shrink-0">
                    !
                  </span>
                  <span>Nguy cơ chuyển dịch cơ cấu kinh tế tự nhiên</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-lg flex-shrink-0">
                    !
                  </span>
                  <span>Thách thức đối với chủ quyền quốc gia</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-10 border border-gray-100 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Phương hướng Nâng cao Hiệu quả Hội nhập
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Nhận thức sâu sắc về thời cơ và thách thức
                </h3>
                <p className="text-gray-600">
                  Hội nhập kinh tế là xu thế khách quan của thời đại, cần thấy
                  rõ cả mặt tích cực và tiêu cực
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Xây dựng chiến lược hội nhập phù hợp
                </h3>
                <p className="text-gray-600">
                  Lộ trình hội nhập phải được cân nhắc với trình độ phát triển
                  của đất nước
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Tham gia tích cực vào các liên kết kinh tế quốc tế
                </h3>
                <p className="text-gray-600">
                  Thực hiện đầy đủ các cam kết để nâng cao uy tín và vai trò của
                  Việt Nam
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Hoàn thiện thể chế kinh tế và pháp luật
                </h3>
                <p className="text-gray-600">
                  Rà soát và hoàn thiện hệ thống pháp luật liên quan đến hội
                  nhập kinh tế
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-lg">
                  5
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Nâng cao năng lực cạnh tranh quốc tế
                </h3>
                <p className="text-gray-600">
                  Tăng cường hỗ trợ doanh nghiệp để vượt qua thách thức thời kỳ
                  hội nhập
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-lg">
                  6
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Xây dựng nền kinh tế độc lập, tự chủ
                </h3>
                <p className="text-gray-600">
                  Không bị lệ thuộc vào nước khác, bảo vệ chủ quyền quốc gia và
                  lợi ích dân tộc
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-10 border border-blue-200 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Câu hỏi đặt ra
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Liệu Việt Nam có thể tận dụng tối đa những cơ hội từ hội nhập kinh
            tế quốc tế để thực hiện thành công công nghiệp hóa, hiện đại hóa,
            <span className="font-bold text-blue-600">
              {" "}
              vươn lên ngang tầm với các quốc gia phát triển
            </span>{" "}
            trong kỷ nguyên số?
          </p>
        </section>

        {/* Quiz Section */}
        <section id="takequiz">
          <TakeQuiz />
        </section>
      </main>
      <ChatBoxAI />
    </div>
  );
}
