import { atom } from "jotai";

/**
 * Tạo danh sách trang cho 1 cuốn dạng notebook:
 * - Trang đầu: front = coverFront, back = ruledTexture
 * - N trang giữa: front = ruledTexture, back = ruledTexture
 * - Trang cuối: front = ruledTexture, back = coverBack
 */
export function buildNotebookPagesFlexible({
  images = [],
  coverFront,
  coverFrontBack, // ảnh cho mặt còn lại của bìa trước
  coverBack,
  coverBackFront, // ảnh cho mặt còn lại của bìa sau
  ruledTexture = "ruled-paper",
} = {}) {
  const imgAt = (i) => images[i] ?? (ruledTexture || "ruled-paper"); // Thêm fallback

  // Tạo các trang từ cặp ảnh liên tiếp
  const innerPages = [];
  for (let i = 0; i < images.length; i += 2) {
    innerPages.push({
      front: imgAt(i),
      back: imgAt(i + 1),
    });
  }

  const pages = [];

  // Trang bìa trước (nếu có): front = coverFront, back = coverFrontBack (nếu có), fallback ruledTexture
  if (coverFront) {
    pages.push({
      front: coverFront,
      back: coverFrontBack ?? ruledTexture,
    });
  }

  // Các trang bên trong
  pages.push(...innerPages);

  // Trang bìa sau (nếu có): front = coverBackFront (nếu có), fallback ruledTexture; back = coverBack
  if (coverBack) {
    pages.push({
      front: coverBackFront ?? ruledTexture,
      back: coverBack,
    });
  }

  return pages;
}

/**
 * Mỗi cuốn có câu chuyện riêng (story).
 * Có thể thay đổi title/paragraphs cho phù hợp nội dung thực tế.
 */
export const BOOK_LIBRARY = [
  {
    title: "Notebook linh hoạt",
    pages: buildNotebookPagesFlexible({
      coverFront: "page-01-front",
      coverFrontBack: "page-1", // mặt sau của bìa trước
      coverBackFront: "page-01-back", // mặt trước của bìa sau
      coverBack: "page-01-back",
      ruledTexture: "ruled-paper",
      images: [
        "page-2",
        "page-3",
        "page-4",
        "page-5",
        "page-6",
        "page-7",
        "page-8",
        "page-9",
        "page-10",
        "page-11",
        "page-12",
        "page-13",
        "page-14",
        "page-15",
        "page-16",
      ],
    }),
    bookmark: { front: "bookmark-1-front", back: "bookmark-1-back" },
    story: {
      title: "Hành Trình Giành Lại Độc Lập và Khẳng Định Giá Trị Tự Do",
      paragraphs: [
        "Hai bìa sách cùng khắc họa hành trình đấu tranh của dân tộc Việt Nam từ những ngày đầu vận động cách mạng đến khi giành được độc lập và xây dựng một kỷ nguyên tự do mới; bìa trước mô tả các mốc lịch sử dẫn đến Cách mạng Tháng Tám và ngày độc lập, trong khi bìa sau khẳng định ý nghĩa thiêng liêng của tự do – độc lập và trách nhiệm của các thế hệ tiếp bước bảo vệ thành quả ấy.",
      ],
    },
  },
  // {
  //   id: "book-02",
  //   title: "Notebook 02",
  //   pages: buildNotebookPages({
  //     coverFront: "thien-page-3",
  //     coverBack: "thien-page-4",
  //     innerRuledCount: 10,
  //     ruledTexture: "ruled-paper",
  //   }),
  //   bookmark: { front: "thien-bookmark-3", back: "thien-bookmark-4" },
  //   story: {
  //     title: "GROWING",
  //     paragraphs: [
  //       "Bức ảnh GROWING là một minh họa kỹ thuật số lạc quan, thể hiện quá trình tăng trưởng tài chính và sự nghiệp.",
  //       "Ý tưởng: Minh họa hành trình thành công, nơi một doanh nhân (người đàn ông mặc vest) đang bước lên các nấc thang lợi nhuận (các cột biểu đồ), tượng trưng cho sự tiến bộ và việc đầu tư sinh lời (các cây tiền và đồng xu vàng).",
  //       "Nhận xét: Bức ảnh có tính động lực cao, sử dụng màu sắc tươi sáng và biểu tượng rõ ràng (mũi tên lên, tiền xu) để truyền tải thông điệp về chuyên nghiệp, phát triển không ngừng và đạt được mục tiêu tài chính.",
  //     ],
  //   },
  // },
  // {
  //   id: "book-03",
  //   title: "Notebook 03",
  //  pages: buildNotebookPages({
  //     coverFront: "khang-page-1",
  //     coverBack: "khang-page-2",
  //     innerRuledCount: 10,
  //     ruledTexture: "ruled-paper",
  //   }),
  //   bookmark: { front: "khang-bookmark-1", back: "khang-bookmark-1" },
  //   story: {
  //     title: "Sản xuất của nhà tư bản",
  //     paragraphs: [
  //       "Đây là hình ảnh liên quan tới một quá trình sản xuất của nhà tư bản. ",
  //       "Theo lý luận của C. Mác về giá trị thặng dư, về nguồn gốc của giá trị thặng dư thì trong quá trình sản xuất tư bản được chia làm 2 thành phần:",
  //       '-Phần màu xanh là những hình ảnh của máy móc(bánh răng), công xưởng, nhà máy đại diện cho "tư bản bất biến".',
  //       '-Phần màu cam là những hình ảnh về con người, công nhân, kỹ sư đại diện cho "tư bản khả biến" nơi sinh ra giá trị thặng dư thông qua việc nhà tư bản mua sức lao động của con người để tạo ra giá trị mới.',
  //       "Cả 2 phần được ghép gắn liền nhau thể hiện nối liên kết không thể tách rời của 2 thành phần này trong quá trình sản xuất cũng như đem lại giá trị thăng dư cho nhà tư bản.",
  //     ],
  //   },
  // },
  // {
  //   id: "book-04",
  //   title: "Notebook 04",
  //   pages: buildNotebookPages({
  //     coverFront: "khang-page-3",
  //     coverBack: "khang-page-4",
  //     innerRuledCount: 10,
  //     ruledTexture: "ruled-paper",
  //   }),
  //   bookmark: { front: "khang-bookmark-2", back: "khang-bookmark-2" },
  //   story: {
  //     title: "Bức tranh mô tả một dây chuyền sản xuất",
  //     paragraphs: [
  //       "-Bên dưới, là hàng loạt công nhân cần mẫn làm việc ở chế độ lặp đi lặp lại, máy móc biến thao tác của họ thành sản phẩm trên băng chuyền, rồi sản phẩm ấy được chuyển hóa thành tiền và theo thời gian tích lũy giá trị mới từ sản phẩm mà người lao động tạo ra chất thành những cọc tiền cao ở dây chuyền bên cạnh. ",
  //       "-Trên cao, người đại diện cho nhà tư bản đứng nhìn và bỏ tiền đầu tư rồi thu gom lại nhiều đồng tiền hơn — biểu tượng cho việc chiếm đoạt giá trị thặng dư. ",
  //       "Hình tượng này minh họa trực quan luận điểm của Mác: tư bản khả biến lao động sống (con người) tạo ra giá trị mới, trong khi tư bản bất biến (máy móc, nguyên liệu) chỉ chuyển giá trị có sẵn; phần giá trị dư ra (giá trị thặng dư) bị chủ sở hữu tư bản chiếm đoạt và tích luỹ. Hình ảnh cũng là việc ám chỉ cách nhà tư bản dùng tiền để sinh ra nhiều tiền hơn",
  //     ],
  //   },
  // },
  // {
  //   id: "book-05",
  //   title: "Notebook 05",
  //   pages: buildNotebookPages({
  //     coverFront: "phu-page-1",
  //     coverBack: "phu-page-2",
  //     innerRuledCount: 10,
  //     ruledTexture: "ruled-paper",
  //   }),
  //   bookmark: { front: "phu-bookmark-1", back: "phu-bookmark-2" },
  //   story: {
  //     title: "Chu trình sản xuất và giá trị thặng dư",
  //     paragraphs: [
  //       "Bức minh họa này thể hiện chu trình sản xuất và giá trị thặng dư trong chủ nghĩa tư bản qua hình tượng bánh răng và công nhân.",
  //       "Ở trung tâm là khối năng lượng tượng trưng cho giá trị lao động, được tạo ra và truyền đi qua các tầng sản xuất.",
  //       "Công nhân ở phía dưới tượng trưng cho quá trình lao động vật chất trực tiếp, còn công nhân phía trên thể hiện lao động công nghiệp – điều khiển máy móc.",
  //       "Dòng tiền và nhà máy ở phần trên cùng biểu trưng cho tư bản và tái đầu tư, nơi giá trị thặng dư được thu lại và quay vòng.",
  //       "Toàn bộ gợi lên ý niệm rằng lao động – sản xuất – giá trị – tư bản liên tục vận động, tái sinh trong guồng quay công nghiệp không ngừng nghỉ.",
  //     ],
  //   },
  // },
  // {
  //   id: "book-06",
  //   title: "Notebook 06",
  //   pages: buildNotebookPages({
  //     coverFront: "phu-page-3",
  //     coverBack: "phu-page-4",
  //     innerRuledCount: 10,
  //     ruledTexture: "ruled-paper",
  //   }),
  //   bookmark: { front: "phu-bookmark-3", back: "phu-bookmark-4" },
  //   story: {
  //     title: "Tuyệt Đối Lợi Nhuận",
  //     paragraphs: [
  //       '"Tuyệt Đối Lợi Nhuận” thể hiện sự châm biếm về bản chất bóc lột trong xã hội tư bản. ',
  //       "Hình ảnh ông chủ béo ngồi trên ghế tượng trưng cho giai cấp tư sản, kẻ hưởng thụ thành quả lao động.",
  //       "Bên dưới là người công nhân gầy gò, đổ mồ hôi, biểu trưng cho giai cấp vô sản bị áp bức. ",
  //       'Cụm chữ “Tuyệt Đối Lợi Nhuận” nhấn mạnh mục tiêu lợi ích được đặt trên con người.',
  //       "Tông màu bức gợi cảm giác ngột ngạt, áp lực. Hình ảnh khơi gợi suy ngẫm về giá trị lao động và sự bất công trong phân phối lợi nhuận.",
  //     ],
  //   },
  // },
  // {
  //   id: "book-07",
  //   title: "Notebook 07",
  //   pages: buildNotebookPages({
  //     coverFront: "long-page-1",
  //     coverBack: "long-page-2",
  //     innerRuledCount: 10,
  //     ruledTexture: "ruled-paper",
  //   }),
  //   bookmark: { front: "long-bookmark-1", back: "long-bookmark-1" },
  //   story: {
  //     title: "Money & Chains",
  //     paragraphs: [
  //       "Ý tưởng: Tập trung khắc họa sự đối lập rõ rệt giữa giới Tư bản và giới Lao động. Mặt trước là hình ảnh ông chủ béo tốt, ăn mặc sang trọng, biểu tượng cho quyền lực và của cải; mặt sau là những công nhân đổ mồ hôi trong nhà máy tối tăm – nền tảng thật sự của xã hội công nghiệp.",
  //       "Nhận xét: Bố cục hai mặt mang ý nghĩa đối nghịch mạnh mẽ: sự xa hoa bên trên được xây bằng mồ hôi và sức lực bên dưới. Hình ảnh phản ánh trung thực mối quan hệ bất công trong thời kỳ công nghiệp hóa, rất thích hợp cho notebook chuyên về lịch sử, kinh tế chính trị hoặc xã hội học.",
  //     ],
  //   },
  // },
  // {
  //   id: "book-08",
  //   title: "Notebook 08",
  //   pages: buildNotebookPages({
  //     coverFront: "long-page-3",
  //     coverBack: "long-page-4",
  //     innerRuledCount: 10,
  //     ruledTexture: "ruled-paper",
  //   }),
  //   bookmark: { front: "long-bookmark-2", back: "long-bookmark-2" },
  //   story: {
  //     title: "Deformed by Industry",
  //     paragraphs: [
  //       "Ý tưởng: Biếm họa hóa sự tha hóa của con người trong thời đại công nghiệp – khi lao động không còn giải phóng mà trở thành xiềng xích bóp méo nhân tính.",
  //       "Nhận xét: Phong cách châm biếm cổ điển gợi cảm giác vừa hài hước vừa u ám, khiến notebook trở thành công cụ kích thích tư duy về bản chất của lao động và thân phận con người trong guồng máy kinh tế.",
  //     ],
  //   },
  // },
  // {
  //   id: "book-09",
  //   title: "Notebook 09",
  //   pages: buildNotebookPages({
  //     coverFront: "huy-page-1",
  //     coverBack: "huy-page-2",
  //     innerRuledCount: 10,
  //     ruledTexture: "ruled-paper",
  //   }),
  //   bookmark: { front: "huy-bookmark-1", back: "huy-bookmark-1" },
  //   story: {
  //     title: "Dưới Bóng Gót Lãnh Đạo",
  //     paragraphs: [
  //       "Ẩn dụ trực diện về việc giá trị do lao động tạo ra bị nén lại ở dưới, trong khi quyền lực và hưởng thụ tập trung ở trên.",
  //       "Ý tưởng: Đặt ở trang mở đầu sổ tay kinh tế–chính trị hoặc làm nhãn kẹp trang kèm câu gợi nhớ “Ai nâng, ai đứng?” để mỗi lần mở sổ đều được nhắc về cơ chế tạo–chiếm giá trị thặng dư và động lực tìm phương án phân phối công bằng hơn.",
  //       "Nhận xét: Phông xanh lạnh đối lập với khối đen của chiếc giày khiến cảm giác áp lực tăng cao, còn hình dáng nhỏ bé của những người đội giày nhấn mạnh tương quan quyền lực. Vali và cà vạt cho thấy họ là những người làm công tri thức nhưng vẫn thành “vật chống đỡ” của hệ thống.",
  //     ],
  //   },
  // },
  // {
  //   id: "book-10",
  //   title: "Notebook 10",
  //   pages: buildNotebookPages({
  //     coverFront: "huy-page-4",
  //     coverBack: "huy-page-3",
  //     innerRuledCount: 10,
  //     ruledTexture: "ruled-paper",
  //   }),
  //   bookmark: { front: "huy-bookmark-3", back: "huy-bookmark-4" },
  //   story: {
  //     title: "Ai Tạo – Ai Hưởng?",
  //     paragraphs: [
  //       "Một nhân vật phì nộn, ngậm xì gà, khoác ruy-băng đỏ đứng dạng tay đè lên những thân người gầy guộc – hình ảnh cô đọng sự bất bình đẳng và hành vi chiếm đoạt phần giá trị lao động của kẻ khác.",
  //       "Ý tưởng: Đưa vào sổ tay như một “tấm nhắc”: mở ra là thấy cấu trúc bóc lột – câu hỏi bật lên: “Ai tạo ra? Ai hưởng?” khơi gợi suy nghĩ về phân phối công bằng.",
  //       "Nhận xét: Sự phóng đại tỉ lệ cơ thể làm nổi bật lòng tham và quyền lực phình to từ nền lao động bị ép; động tác dẫm lên thân người tạo biểu tượng trực diện của lệ thuộc cưỡng ép; nét vẽ châm biếm sắc gọn khiến người xem vừa bật cười chua chát vừa suy ngẫm về cơ chế tạo ra giá trị thặng dư.",
  //     ],
  //   },
  // },
];

// Atom: chỉ số cuốn hiện tại (đồng bộ Book và Bookmark)
export const currentBookAtom = atom(0);

// Atom: trang trong cuốn hiện tại (Book flip)
export const bookPageAtom = atom(0);

// Selector tiện dụng
export const currentBookSelector = atom(
  (get) => BOOK_LIBRARY[get(currentBookAtom)]
);
export const currentPagesSelector = atom(
  (get) => get(currentBookSelector).pages
);
export const currentBookmarkSelector = atom(
  (get) => get(currentBookSelector).bookmark
);
