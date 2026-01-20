import { useMemo, useState } from "react";
import Header from "../components/Header";
import { XMarkIcon, SparklesIcon, ShieldCheckIcon, UsersIcon } from "@heroicons/react/24/solid";

const leaders = [
    {
        name: "Chủ tịch Hồ Chí Minh",
        role: "Người sáng lập Đảng và Nhà nước Việt Nam Dân chủ Cộng hòa",
        theme: "Đặt đạo đức cách mạng làm gốc, chống 'giặc nội xâm'",
        quote: "“Muốn hướng dẫn nhân dân, mình phải làm mực thước cho người ta bắt chước.”",
        contribution:
            "Khởi xướng chuẩn mực đạo đức cách mạng; chỉ rõ tham ô, lãng phí, quan liêu là 'giặc nội xâm', coi liêm chính là nền tảng xây dựng Đảng trong sạch, vững mạnh.",
        focus: "Nêu gương liêm chính",
        image: "/textures/nv1.jpg",
    },
    {
        name: "V.I. Lênin",
        role: "Lãnh tụ của giai cấp vô sản thế giới",
        theme: "Cảnh báo quan liêu hóa, yêu cầu chỉnh đốn và thanh lọc Đảng",
        quote: "“Không có kỷ luật nghiêm minh thì Đảng không thể giữ được vai trò lãnh đạo.”",
        contribution:
            "Phê phán quan liêu, cơ hội chủ nghĩa; nhấn mạnh kỷ luật đảng và việc thanh lọc những phần tử biến chất để giữ vững bản chất tiên phong của Đảng.",
        focus: "Chỉnh đốn kỷ luật",
        image: "/textures/nv2.jpg",
    },
    {
        name: "Tổng Bí thư Nguyễn Phú Trọng",
        role: "Lãnh đạo công cuộc phòng, chống tham nhũng và tiêu cực",
        theme: "“Nhốt quyền lực vào lồng cơ chế”, không có vùng cấm",
        quote: "“Quyền lực phải được kiểm soát bằng cơ chế, bằng pháp luật.”",
        contribution:
            "Dẫn dắt công cuộc phòng, chống tham nhũng với quyết tâm cao; xử lý nghiêm minh cả cán bộ cấp cao, qua đó củng cố niềm tin của nhân dân đối với Đảng và Nhà nước.",
        focus: "Kiểm soát quyền lực",
        image: "/textures/nv3.jpg",
    },
    {
        name: "Tổng Bí thư Nguyễn Văn Linh",
        role: "Tổng Bí thư thời kỳ Đổi Mới",
        theme: "“Những việc cần làm ngay” – công khai tiêu cực để dân giám sát",
        quote: "“Phải nhìn thẳng vào sự thật, nói rõ sự thật để dân tin và dân cứu.”",
        contribution:
            "Khởi xướng chuyên mục 'Những việc cần làm ngay' trên báo Nhân Dân; phát huy vai trò của báo chí và nhân dân trong đấu tranh chống tiêu cực, trì trệ.",
        focus: "Dân giám sát",
        image: "/textures/nv4.jpg",
    },
    {
        name: "Tổng Bí thư Trường Chinh",
        role: "Người khởi xướng tư duy Đổi Mới",
        theme: "Nhìn thẳng sự thật, tự soi tự sửa",
        quote: "“Đổi mới là yêu cầu bức thiết của cuộc sống, là vấn đề sống còn.”",
        contribution:
            "Dũng cảm thừa nhận những sai lầm trong chỉ đạo trước đây; đề xuất đổi mới tư duy lý luận tại Đại hội VI, đặt nền móng cho công cuộc Đổi Mới toàn diện.",
        focus: "Tự soi tự sửa",
        image: "/textures/nv5.jpg",
    },
    {
        name: "Cụ Huỳnh Thúc Kháng",
        role: "Quyền Chủ tịch nước (1946), Bộ trưởng Bộ Nội vụ",
        theme: "Liêm khiết, đại đoàn kết, đặt Tổ quốc lên trên hết",
        quote: "“Giàu sang không quyến rũ, nghèo khó không chuyển lay, uy vũ không khuất phục.”",
        contribution:
            "Nhân sĩ yêu nước được Chủ tịch Hồ Chí Minh tin cậy giao trọng trách; biểu tượng của khí tiết sĩ phu, sự liêm chính và tinh thần đại đoàn kết dân tộc.",
        focus: "Đại đoàn kết - liêm chính",
        image: "/textures/nv6.jpg",
    },
    {
        name: "Chu Văn An",
        role: "“Vạn thế sư biểu” – Người thầy của muôn đời",
        theme: "Thất trảm sớ, dám can gián và giữ khí tiết",
        quote: "“Đạo học suy thì đạo trị cũng suy.”",
        contribution:
            "Dâng 'Thất trảm sớ' xin trừng trị nịnh thần; từ quan để giữ trọn khí tiết, nêu gương cương trực, không khuất phục trước quyền uy.",
        focus: "Can gián thẳng thắn",
        image: "/textures/nv7.jpg",
    },
    {
        name: "Tô Hiến Thành",
        role: "Thái phó thời Lý",
        theme: "Chí công vô tư, đặt lợi ích quốc gia lên trên",
        quote: "“Nếu chọn người hầu hạ thì dùng Vũ Tán Đường, còn chọn người giúp nước thì dùng Trần Trung Tá.”",
        contribution:
            "Từ chối hối lộ, không vì tình riêng; kiên quyết tiến cử người hiền tài giúp nước, trở thành biểu tượng của chí công vô tư trong lịch sử.",
        focus: "Chí công vô tư",
        image: "/textures/nv8.jpg",
    },
];


function Flashcard({ leader, onSelect, accent }) {
    return (
        <button
            onClick={() => onSelect(leader)}
            // SỬA 1: Thêm 'h-full' và 'flex flex-col'
            className={`h-full flex flex-col group relative overflow-hidden rounded-xl border border-white/20 bg-gradient-to-br ${accent.from} ${accent.to} p-6 text-left shadow-lg shadow-red-900/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C5A065]`}
        >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay transition duration-500 group-hover:opacity-20" />

            {/* Header: Avatar + Tên */}
            <div className="flex items-start gap-5 relative z-10">
                <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-[#C5A065]/50 shadow-md flex-shrink-0 group-hover:scale-105 transition-transform duration-300 bg-[#8B1E1E]">
                    <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `<div class="h-full w-full flex items-center justify-center text-[#C5A065] text-2xl font-bold font-playfair">${leader.name.charAt(0)}</div>`;
                        }}
                    />
                </div>
                <div className="space-y-1 flex-1">
                    <div className="inline-block px-2 py-0.5 rounded bg-black/20 backdrop-blur-sm text-[10px] uppercase tracking-widest text-[#FCEEB5] font-bold mb-1 border border-white/10 font-sans">
                        {leader.focus}
                    </div>
                    <div className="text-xl font-bold text-white leading-tight font-playfair tracking-wide group-hover:text-[#FCEEB5] transition-colors">
                        {leader.name}
                    </div>
                    <p className="text-xs text-white/80 font-medium uppercase tracking-wider font-sans">{leader.role}</p>
                </div>
            </div>

            {/* SỬA 2: Thêm 'flex-1' để đẩy phần footer xuống đáy */}
            <div className="mt-5 relative z-10 flex-1">
                <p className="text-sm text-white/95 italic font-merriweather leading-relaxed opacity-90 border-l-2 border-[#C5A065]/50 pl-3">
                    "{leader.theme}"
                </p>
            </div>

            {/* Footer: Kỷ cương / Giám sát (Luôn nằm đáy) */}
            <div className="mt-5 pt-4 border-t border-white/10 flex gap-3 items-center relative z-10 font-sans w-full">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold text-white/90 ring-1 ring-inset ring-white/20">
                    <ShieldCheckIcon className="h-3.5 w-3.5 text-[#FCEEB5]" />
                    Kỷ cương
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold text-white/90 ring-1 ring-inset ring-white/20">
                    <UsersIcon className="h-3.5 w-3.5 text-[#FCEEB5]" />
                    Giám sát
                </span>
            </div>
        </button>
    );
}

function LeaderModal({ leader, onClose }) {
    if (!leader) return null;
    return (
        <div className="fixed inset-0 z-[1200] bg-[#2a0a0a]/90 backdrop-blur-md flex items-center justify-center px-4 py-8 animate-in fade-in duration-200">
            <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-[#F9F7F1] shadow-2xl border border-[#C5A065]/30 flex flex-col md:flex-row max-h-[90vh]">
                <button
                    className="absolute right-4 top-4 rounded-full bg-black/10 p-2 text-gray-800 hover:bg-[#8B1E1E] hover:text-white transition-colors focus:outline-none z-20"
                    onClick={onClose}
                    aria-label="Đóng"
                >
                    <XMarkIcon className="h-6 w-6" />
                </button>

                <div className="md:w-2/5 min-h-[300px] md:min-h-full relative bg-[#1a0505]">
                    <div
                        className="h-full w-full bg-cover bg-center absolute inset-0 grayscale-[20%] sepia-[10%] opacity-90"
                        style={{ backgroundImage: `url(${leader.image})` }}
                        aria-hidden
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a0a0a] via-transparent to-transparent md:bg-gradient-to-r" />
                    <div className="absolute bottom-6 left-6 text-white md:hidden z-10">
                        <h3 className="text-2xl font-bold font-playfair text-[#FCEEB5]">{leader.name}</h3>
                    </div>
                </div>

                <div className="md:w-3/5 p-8 md:p-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] overflow-y-auto">
                    <div className="space-y-6">
                        <div className="hidden md:block">
                            <div className="text-xs uppercase tracking-[0.25em] text-[#8B1E1E] font-bold mb-2 font-sans">Chân dung lịch sử</div>
                            <h3 className="text-4xl font-bold text-[#2a0a0a] font-playfair leading-tight">{leader.name}</h3>
                            <p className="text-sm text-gray-600 font-medium mt-1 font-sans">{leader.role}</p>
                        </div>

                        <div className="relative py-4">
                            <span className="absolute -top-4 -left-2 text-6xl text-[#C5A065]/20 font-playfair">“</span>
                            <p className="relative text-xl md:text-2xl text-[#8B1E1E] italic font-playfair leading-relaxed px-4">
                                {leader.quote}
                            </p>
                            <span className="absolute -bottom-8 right-0 text-6xl text-[#C5A065]/20 font-playfair rotate-180">“</span>
                        </div>

                        <div className="rounded-xl bg-white/60 border border-[#C5A065]/20 p-6 shadow-sm font-merriweather">
                            <p className="font-bold text-[#2a0a0a] mb-2 uppercase text-xs tracking-wider flex items-center gap-2 font-sans">
                                <SparklesIcon className="w-4 h-4 text-[#C5A065]" />
                                Đóng góp di sản
                            </p>
                            <p className="text-gray-800 leading-relaxed text-justify">
                                {leader.contribution}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 text-xs pt-2 font-sans">
                            {["Chống tham nhũng", "Xây dựng Đảng", "Vì nhân dân"].map((tag, i) => (
                                <span key={i} className="rounded px-3 py-1.5 bg-[#8B1E1E]/5 text-[#8B1E1E] font-semibold border border-[#8B1E1E]/10">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Exhibition() {
    const [selected, setSelected] = useState(null);

    const palettes = useMemo(
        () => [
            { from: "from-[#8B1E1E]", to: "to-[#A03636]" },
            { from: "from-[#701a1a]", to: "to-[#963e3e]" },
            { from: "from-[#9c2b2b]", to: "to-[#b85c38]" },
            { from: "from-[#852525]", to: "to-[#a84444]" },
            { from: "from-[#800000]", to: "to-[#A52A2A]" },
            { from: "from-[#902e2e]", to: "to-[#b05d5d]" },
        ],
        []
    );

    return (
        <div className="min-h-svh bg-[#f5f2e9] text-gray-900 font-sans selection:bg-[#8B1E1E] selection:text-[#FCEEB5]">
            {/* NHÚNG FONT TRỰC TIẾP TẠI ĐÂY */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');
                
                .font-playfair { font-family: 'Playfair Display', serif; }
                .font-merriweather { font-family: 'Merriweather', serif; }
            `}</style>

            <Header />
            <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-16 space-y-12">

                {/* Hero Section */}
                <section className="rounded-[2rem] border border-[#C5A065]/30 bg-[#8B1E1E] p-8 md:p-12 shadow-2xl relative overflow-hidden text-center md:text-left">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-multiply" aria-hidden />
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#C5A065] blur-[100px] opacity-20 rounded-full"></div>

                    <div className="flex flex-col gap-6 relative z-10 items-center md:items-start">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#FCEEB5]/30 bg-black/20 backdrop-blur px-4 py-1.5 text-xs font-bold text-[#FCEEB5] uppercase tracking-wider shadow-sm">
                            <SparklesIcon className="h-4 w-4 text-[#FCEEB5]" />
                            Triển lãm chuyên đề 2024
                        </div>

                        {/* Đã sửa font ở đây */}
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white font-playfair tracking-tight">
                            Kiểm Soát Quyền Lực <br />
                            <span className="text-[#FCEEB5]">Kiến Tạo Liêm Chính</span>
                        </h1>

                        <div className="w-20 h-1 bg-[#FCEEB5] rounded-full my-1"></div>

                        <p className="text-lg text-white/90 max-w-2xl font-medium leading-relaxed font-merriweather">
                            Hành trình tư tưởng từ Chủ tịch Hồ Chí Minh đến các danh sĩ lịch sử: Khẳng định ý chí chống tham nhũng, chỉnh đốn Đảng và vai trò giám sát tối thượng của Nhân dân.
                        </p>
                    </div>
                </section>

                <section className="space-y-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#C5A065]/30 pb-4">
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-[#8B1E1E] font-bold mb-1 font-sans">Di sản tư tưởng</p>
                            <h2 className="text-3xl font-bold text-[#2a0a0a] font-playfair">Gương Sáng Soi Chung</h2>
                        </div>
                        <p className="text-sm text-gray-600 italic max-w-md text-right md:text-right font-merriweather">
                            *Chạm vào thẻ để xem chi tiết câu nói và đóng góp
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {leaders.map((leader, idx) => (
                            <Flashcard
                                key={leader.name}
                                leader={leader}
                                accent={palettes[idx % palettes.length]}
                                onSelect={setSelected}
                            />
                        ))}
                    </div>
                </section>

                <section className="rounded-xl border-l-4 border-[#8B1E1E] bg-white p-6 md:p-8 text-gray-800 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 p-3 bg-[#8B1E1E]/5 rounded-full">
                        <ShieldCheckIcon className="h-8 w-8 text-[#8B1E1E]" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#2a0a0a] font-playfair mb-2">Thông điệp chủ đạo</h3>
                        <p className="text-base leading-relaxed text-gray-700 font-merriweather">
                            Xây dựng Đảng trong sạch, vững mạnh và Nhà nước của dân, do dân, vì dân là hành trình liên tục kiểm soát quyền lực,
                            chống tham nhũng và đặt nhân dân vào vị trí giám sát tối cao. Những tấm gương này nhắc chúng ta về kỷ luật, minh
                            bạch, dũng khí tự soi tự sửa.
                        </p>
                    </div>
                </section>
            </main>

            <LeaderModal leader={selected} onClose={() => setSelected(null)} />
        </div>
    );
}