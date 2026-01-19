import { useState } from "react";
import Header from "../components/Header";
import {
    PlayCircleIcon,
    DocumentTextIcon,
    TagIcon,
} from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";

// Dữ liệu video YouTube
const videos = [
    {
        id: "EfGROofBZ2E",
        title: "Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam",
        note: "Tổng quan vai trò, sứ mệnh lịch sử.",
        duration: "24:35",
        views: "1,254",
        date: "03/02/2023",
        description: "Video phân tích sâu sắc quan điểm của Chủ tịch Hồ Chí Minh về sự ra đời, vai trò và bản chất của Đảng Cộng sản Việt Nam. Nội dung tập trung vào các luận điểm: Đảng là nhân tố quyết định thắng lợi của cách mạng, Đảng phải gắn bó mật thiết với nhân dân, và Đảng phải thường xuyên tự chỉnh đốn.",
        tags: ["Tư tưởng Hồ Chí Minh", "Xây dựng Đảng", "Lịch sử"]
    },
    {
        id: "IIKAG2UBrPA",
        title: "Tư liệu quý: Hội nghị thành lập Đảng 1930",
        note: "Bối cảnh và diễn biến hội nghị hợp nhất.",
        duration: "18:10",
        views: "980",
        date: "19/05/2023",
        description: "Thước phim tư liệu tái hiện bối cảnh lịch sử dẫn đến Hội nghị hợp nhất các tổ chức cộng sản tại Hương Cảng (Trung Quốc) năm 1930 dưới sự chủ trì của lãnh tụ Nguyễn Ái Quốc. Video cung cấp các hình ảnh tư liệu gốc và phân tích từ các sử gia đầu ngành.",
        tags: ["Lịch sử Đảng", "1930", "Tư liệu gốc"]
    },
    {
        id: "6lL5TfVt80M",
        title: "Đạo đức cách mạng: Cần, Kiệm, Liêm, Chính",
        note: "Phân tích 4 phẩm chất cốt lõi của người cán bộ.",
        duration: "21:47",
        views: "1,502",
        date: "02/09/2023",
        description: "Bài giảng chuyên sâu về 4 phẩm chất đạo đức cách mạng: Cần, Kiệm, Liêm, Chính. Tại sao Bác Hồ lại coi đây là 'tứ đức' không thể thiếu của con người? Video liên hệ thực tiễn với việc tu dưỡng đạo đức của cán bộ, đảng viên hiện nay.",
        tags: ["Đạo đức", "Học tập Bác", "Rèn luyện"]
    },
    {
        id: "GtghaD3pwaw",
        title: "Kiên quyết chống 'giặc nội xâm' tham nhũng",
        note: "Tư tưởng Hồ Chí Minh về phòng chống tham ô.",
        duration: "19:02",
        views: "2,100",
        date: "20/11/2023",
        description: "Chủ tịch Hồ Chí Minh từng gọi tham ô, lãng phí, quan liêu là 'giặc nội xâm', thứ giặc nằm trong lòng, nguy hiểm hơn cả giặc ngoại xâm. Video tổng hợp các bài nói, bài viết của Người về công tác phòng chống tham nhũng, lãng phí.",
        tags: ["Chống tham nhũng", "Xây dựng Đảng", "Thời sự"]
    },
    {
        id: "aU-I1hKA4E4",
        title: "Chuyên đề: Xây dựng Đảng trong sạch, vững mạnh",
        note: "Liên hệ thực tiễn công cuộc chỉnh đốn Đảng.",
        duration: "27:15",
        views: "1,120",
        date: "03/02/2024",
        description: "Phân tích những vấn đề cấp bách trong công tác xây dựng, chỉnh đốn Đảng hiện nay dựa trên nền tảng tư tưởng Hồ Chí Minh. Các giải pháp để nâng cao năng lực lãnh đạo và sức chiến đấu của tổ chức Đảng.",
        tags: ["Chính trị", "Nghị quyết", "Xây dựng Đảng"],
    },
];

// Dữ liệu video do nhóm tự tạo (mp4 trong public/audio)
const createdVideos = [
    {
        id: "tham-nhung-quyen-luc",
        src: "/audio/Tham_nhũng_và_Quyền_lực.mp4",
        title: "Tham nhũng & Quyền lực",
        note: "Video dự án: tái hiện bối cảnh xây dựng Đảng và kiểm soát quyền lực sau thống nhất.",
        duration: "10:21",
        description:
            "Tư liệu dựng bởi nhóm, kết hợp đồ họa và hình ảnh gốc, khắc họa tiến trình xây dựng Đảng trong sạch, vững mạnh và Nhà nước của dân, do dân, vì dân; đồng thời nhấn mạnh chỉnh đốn Đảng, kiểm soát quyền lực và huy động nhân dân giám sát để củng cố niềm tin.",
        tags: ["Video dự án", "Chống tham nhũng", "Kiểm soát quyền lực"],
    },

];

export default function Document() {
    // Tab đang chọn: youtube | created
    const [activeTab, setActiveTab] = useState("youtube");
    // Video YouTube đang phát
    const [activeVideo, setActiveVideo] = useState(videos[0]);
    // Video tự tạo đang phát
    const [activeCreated, setActiveCreated] = useState(createdVideos[0]);

    const current = activeTab === "youtube" ? activeVideo : activeCreated;
    const isYoutube = activeTab === "youtube";

    return (
        <div className="min-h-svh bg-[#f5efe2] text-gray-900 font-sans selection:bg-[#8B1E1E] selection:text-[#FCEEB5]">
            {/* Nhúng font chữ để đảm bảo giao diện đẹp nhất */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');
                .font-playfair { font-family: 'Playfair Display', serif; }
                .font-merriweather { font-family: 'Merriweather', serif; }
            `}</style>

            <Header />

            <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
                {/* Tiêu đề trang */}
                <div className="mb-6 border-b border-[#C5A065]/30 pb-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#8B1E1E] font-playfair flex items-center gap-3">
                        <PlayCircleIcon className="h-10 w-10 text-[#C5A065]" />
                        Thư Viện Video Tư Liệu
                    </h1>
                    <p className="mt-2 text-gray-600 font-merriweather italic text-sm md:text-base">
                        Nguồn tư liệu phục vụ nghiên cứu, học tập tư tưởng Hồ Chí Minh và công tác xây dựng Đảng.
                    </p>
                </div>

                {/* Tabs chọn nguồn video */}
                <div className="mb-6 flex gap-2 flex-wrap">
                    <button
                        onClick={() => setActiveTab("youtube")}
                        className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${isYoutube
                            ? "bg-[#8B1E1E] text-[#FCEEB5] border-[#8B1E1E] shadow-md"
                            : "bg-white text-[#8B1E1E] border-[#C5A065]/50 hover:bg-[#fdf5e6]"
                            }`}
                    >
                        Video YouTube tham khảo
                    </button>
                    <button
                        onClick={() => setActiveTab("created")}
                        className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${!isYoutube
                            ? "bg-[#8B1E1E] text-[#FCEEB5] border-[#8B1E1E] shadow-md"
                            : "bg-white text-[#8B1E1E] border-[#C5A065]/50 hover:bg-[#fdf5e6]"
                            }`}
                    >
                        Video do nhóm thực hiện (mp4)
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* CỘT TRÁI (2/3): Video Player & Thông tin chi tiết */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Video Player Container */}
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black ring-1 ring-[#C5A065]/30 group">
                            {isYoutube ? (
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                                    title={activeVideo.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            ) : (
                                <video
                                    className="w-full h-full"
                                    src={activeCreated.src}
                                    controls
                                    autoPlay
                                />
                            )}
                        </div>

                        {/* Video Title */}
                        <div className="space-y-3">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#2a0a0a] font-playfair leading-tight">
                                {current.title}
                            </h2>
                        </div>

                        {/* Ô MÔ TẢ CHI TIẾT */}
                        <div className="bg-[#F9F7F1] rounded-xl border border-[#C5A065]/30 p-6 md:p-8 shadow-sm relative overflow-hidden">
                            {/* Decorative background */}
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <DocumentTextIcon className="h-32 w-32 text-[#8B1E1E]" />
                            </div>

                            <h3 className="text-lg font-bold text-[#8B1E1E] uppercase tracking-wider mb-4 border-b border-[#C5A065]/20 pb-2 flex items-center gap-2 font-sans">
                                <DocumentTextIcon className="h-5 w-5" />
                                Thông tin tư liệu
                            </h3>

                            <div className="relative z-10">
                                <p className="text-gray-800 leading-relaxed font-merriweather text-justify">
                                    {current.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {current.tags &&
                                        current.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#8B1E1E]/5 text-[#8B1E1E] text-xs font-semibold hover:bg-[#8B1E1E]/10 transition-colors cursor-pointer border border-[#8B1E1E]/10"
                                            >
                                                <TagIcon className="h-3 w-3" />
                                                {tag}
                                            </span>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CỘT PHẢI (1/3): Playlist */}
                    <aside className="lg:col-span-1">
                        <div className="bg-white rounded-2xl border border-[#C5A065]/20 shadow-lg overflow-hidden sticky top-6">
                            <div className="bg-[#8B1E1E] p-4 text-white flex justify-between items-center">
                                <h3 className="font-bold font-playfair text-lg">
                                    {isYoutube ? "Danh sách phát YouTube" : "Danh sách video dự án"}
                                </h3>
                                <span className="text-xs bg-[#C5A065] text-[#8B1E1E] font-bold px-2 py-0.5 rounded">
                                    {isYoutube ? videos.length : createdVideos.length} Videos
                                </span>
                            </div>

                            <div className="max-h-[600px] overflow-y-auto p-2 space-y-2 bg-[#fdfbf7]">
                                {(isYoutube ? videos : createdVideos).map((video) => {
                                    const isActive = isYoutube
                                        ? video.id === activeVideo.id
                                        : video.id === activeCreated.id;
                                    return (
                                        <button
                                            key={video.id}
                                            onClick={() =>
                                                isYoutube ? setActiveVideo(video) : setActiveCreated(video)
                                            }
                                            className={`w-full flex gap-3 p-3 rounded-xl transition-all duration-300 text-left group ${isActive
                                                ? "bg-[#8B1E1E]/5 ring-1 ring-[#8B1E1E]/20 shadow-inner"
                                                : "hover:bg-gray-100"
                                                }`}
                                        >
                                            <div className="relative w-28 md:w-32 flex-shrink-0 aspect-video rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-black/5">
                                                {isYoutube ? (
                                                    <img
                                                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                                        alt={video.title}
                                                        className={`w-full h-full object-cover transition-transform duration-500 ${isActive ? "scale-110" : "group-hover:scale-105"
                                                            }`}
                                                    />
                                                ) : (
                                                    <video
                                                        src={video.src}
                                                        className="w-full h-full object-cover"
                                                        muted
                                                    />
                                                )}
                                                <span className="absolute bottom-1 right-1 rounded px-1.5 py-0.5 text-[10px] bg-black/70 text-white font-medium backdrop-blur-sm">
                                                    {video.duration}
                                                </span>
                                                {isActive && (
                                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                                        <div className="bg-white/90 rounded-full p-1 shadow-md">
                                                            <PlayIcon className="h-4 w-4 text-[#8B1E1E]" />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex-1 min-w-0 flex flex-col justify-center">
                                                <p
                                                    className={`text-[13px] font-bold leading-snug line-clamp-2 mb-1 ${isActive ? "text-[#8B1E1E]" : "text-gray-800"
                                                        }`}
                                                >
                                                    {video.title}
                                                </p>
                                                <p className="text-[11px] text-gray-500 line-clamp-2 font-medium">
                                                    {video.note}
                                                </p>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}