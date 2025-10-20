import img1 from "../assets/cm1.jpg";
import img2 from "../assets/cm2.jpg";
import img3 from "../assets/cm3.jpg";
import img4 from "../assets/cm4.jpg";
import Header from "../components/Header";

const timelineData = [
  {
    id: 1,
    title: "Cách mạng công nghiệp lần thứ nhất",
    description:
      "Cách mạng công nghiệp lần thứ nhất khởi phát ở Anh, bắt đầu từ thế kỷ XVIII đến giữa thế kỷ XIX",
    image: img1,
  },
  {
    id: 2,
    title: "Cách mạng công nghiệp lần thứ hai",
    description:
      "Cách mạng công nghiệp lần hai diễn ra nửa cuối thể kỷ XIX đến đầu thế kỷ XX.",
    image: img2,
  },
  {
    id: 3,
    title: "Cách mạng công nghiệp lần thứ ba",
    description:
      "Cách mạng công nghiệp lần thứ ba bắt đầu từ khoảng những năm đầu thập niên 60 của thế kỷ XX đến cuối thể kỷ XX.",
    image: img3,
  },
  {
    id: 4,
    title: "Cách mạng công nghiệp lần thứ tư",
    description:
      'Được đề cập lần đầu tiên tại hội chợ triển lãm công nghệ Hannover (CHLB Đức) năm 2011 và được chính phủ Đức đưa vào "kế hoạch hành động chiến lược công nghệ cao" năm 2012.',
    image: img4,
  },
];

const TimelinePage = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
      <Header />

      <div className="relative py-24 px-8 max-w-6xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-400 transform -translate-x-1/2"></div>

        <div className="space-y-24">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={item.id}
                className="flex items-center justify-between relative"
              >
                <div
                  className={`w-5/12 ${
                    isLeft ? "" : "order-2"
                  } flex justify-center`}
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full max-w-md object-cover border border-gray-200"
                  />
                </div>

                <div
                  className={`w-5/12 ${
                    isLeft ? "order-2" : ""
                  } flex justify-center`}
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100 max-w-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-600 to-blue-700 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
