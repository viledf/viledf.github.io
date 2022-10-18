let thuongHieu1 = { maThuongHieu: 1, tenThuongHieu: "Apple", link: "https://www.apple.com/"};
let thuongHieu2 = { maThuongHieu: 2, tenThuongHieu: "Samsung", link: "https://www.samsung.com/vn/"};
let thuongHieu3 = { maThuongHieu: 3, tenThuongHieu: "Oppo", link: "https://www.oppo.com/vn/"};
let thuongHieu4 = { maThuongHieu: 4, tenThuongHieu: "Dell", link: "https://dellonline.vn/"};
let thuongHieu5 = { maThuongHieu: 5, tenThuongHieu: "Asus", link: "https://www.asus.com/vn/" };
let thuongHieu6 = { maThuongHieu: 6, tenThuongHieu: "Sony", link: "https://www.sony.com.vn/"};
let thuongHieu7 = { maThuongHieu: 7, tenThuongHieu: "Realme", link: "https://www.realme.com/vn/" };

let dsThuongHieu = [thuongHieu1, thuongHieu2, thuongHieu3, thuongHieu4, thuongHieu5, thuongHieu6, thuongHieu7];
localStorage.setItem("dsThuongHieu", JSON.stringify(dsThuongHieu));

let tintuc1 = { matt: 1, tieuDe: "iPhone 14 ra mắt: Giá không đổi, thêm bản Plus", noiDung: "iPhone 14 ra mắt: Giá không đổi, thêm bản Plus", ngaydang: "Thứ năm, 8/9/2022, 00:00 (GMT+7)", link: "https://vnexpress.net/apple-ra-mat-iphone-14-4508267.html", hinhAnh: "img/imgTinTuc/number1.jpg" };
let tintuc2 = { matt: 2, tieuDe: "Huawei MateBook E Go ra mắt: Laptop 2-trong-1, chip Snapdragon 8cx Gen 3, giá từ 14 triệu đồng", noiDung: "Huawei MateBook E Go ra mắt: Laptop 2-trong-1, chip Snapdragon 8cx Gen 3, giá từ 14 triệu đồng", ngaydang: "Thứ năm, 14/4/2022, 12:00 (GMT+7)", link: "https://genk.vn/huawei-matebook-e-go-ra-mat-laptop-2-trong-1-chip-snapdragon-8cx-gen-3-gia-tu-14-trieu-dong-20220907150340014.chn", hinhAnh: "img/imgTinTuc/Number2.webp" };
let tintuc3 = { matt: 3, tieuDe: "Xiaomi Book S ra mắt: Chip Snapdragon 8cx Gen 2, chạy Windows 11 ARM, giá 17 triệu đồng", noiDung: "Xiaomi Book S ra mắt: Chip Snapdragon 8cx Gen 2, chạy Windows 11 ARM, giá 17 triệu đồng", ngaydang: "Thứ hai, 16/5/2022, 12:00 (GMT+7)", link: "https://genk.vn/xiaomi-book-s-ra-mat-chip-snapdragon-8cx-gen-2-chay-windows-11-arm-gia-17-trieu-dong-20220622152247346.chn", hinhAnh: "img/imgTinTuc/Number3.webp" };
let tintuc4 = { matt: 4, tieuDe: "Apple sẽ biến iPad thành màn hình thông minh với đế sạc mới?", noiDung: "Apple sẽ biến iPad thành màn hình thông minh với đế sạc mới?", ngaydang: "Thứ sáu, 18/6/2022, 08:00 (GMT+7)", link: "Apple sẽ biến iPad thành màn hình thông minh với đế sạc mới_.html", hinhAnh: "img/imgTinTuc/Number4.jpeg" };
let tintuc5 = { matt: 5, tieuDe: "Google hoàn thiện công nghệ", noiDung: "Google hoàn thiện công nghệ", ngaydang: "Thứ sáu, 14/1/2022, 14:07 (GMT+7)", link: "https://ictnews.vietnamnet.vn/google-hoan-thien-cong-nghe-tro-chuyen-qua-video-the-he-moi-5003599.html", hinhAnh: "img/imgTinTuc/Number5.jpg" };
let tintuc6 = { matt: 6, tieuDe: "Loạt ứng dụng đắt giá của Apple", noiDung: "Loạt ứng dụng đắt giá của Apple", ngaydang: "Thứ sáu, 15/2/2022, 12:57 (GMT+7)", link: "https://soha.vn/loat-ung-dung-dat-gia-cua-apple-do-bo-len-windows-11-bao-gio-toi-luot-imessage-20221014141234261.htm", hinhAnh: "img/imgTinTuc/Number6.webp" };
let tintuc7 = { matt: 7, tieuDe: "Lỗi iOS 16", noiDung: "Lỗi iOS 16", ngaydang: "Thứ bảy, 20/12/2021, 13:00 (GMT+7)", link: "https://vnexpress.net/loi-ios-16-khien-mot-so-iphone-14-khong-nhan-sim-4524662.html", hinhAnh: "img/imgTinTuc/Number7.jpg" };
let tintuc8 = { matt: 8, tieuDe: "Apple Glass sử dụng công nghệ ", noiDung: "Apple Glass sử dụng công nghệ ", ngaydang: "Thứ hai, 1/12/2021, 22:57 (GMT+7)", link: "https://vnexpress.net/apple-glass-su-dung-cong-nghe-quet-mong-mat-4524179.html", hinhAnh: "img/imgTinTuc/Number8.png" };
let tintuc9 = { matt: 9, tieuDe: "Tham vọng của Oppo", noiDung: "Tham vọng của Oppo", ngaydang: "Thứ năm, 9/10/2020, 05:00 (GMT+7)", link: "https://vnexpress.net/tham-vong-cua-oppo-khi-hoan-thien-he-sinh-thai-di-dong-4517151.html", hinhAnh: "img/imgTinTuc/Number9.jpg" };
let tintuc10 = { matt: 10, tieuDe: "Loạt tai nghe Wireless", noiDung: "Loạt tai nghe Wireless", ngaydang: "Thứ sáu, 3/7/2021, 13:30 (GMT+7)", link: "https://vnexpress.net/loat-tai-nghe-true-wireless-noi-bat-2022-4524421.html", hinhAnh: "img/imgTinTuc/Number10.jpg" };
let tintuc11 = { matt: 11, tieuDe: "Galaxy S23 và Galaxy S23+ xịn sò hơn", noiDung: "Galaxy S23 và Galaxy S23+ sẽ xịn sò hơn", ngaydang: "Thứ sáu, 25/6/2021, 13:30 (GMT+7)", link: "https://www.24h.com.vn/thoi-trang-hi-tech/galaxy-s23-va-galaxy-s23-se-khoac-ao-moi-xin-so-hon-c407a1406104.html", hinhAnh: "img/imgTinTuc/Number11.png" };
let tintuc12 = { matt: 12, tieuDe: "Honor tung thêm điện thoại", noiDung: "Honor tung thêm điện thoại", ngaydang: "Thứ bảy, 13/3/2021, 09:00 (GMT+7)", link: "https://www.24h.com.vn/thoi-trang-hi-tech/honor-tung-them-dien-thoai-cau-hinh-khung-gia-re-c407a1405456.html", hinhAnh: "img/imgTinTuc/Number 12.jpg" };
let tintuc13 = { matt: 13, tieuDe: "Giải mã tổ hợp công nghệ", noiDung: "Giải mã tổ hợp công nghệ", ngaydang: "Thứ ba, 9/3/2021, 12:00 (GMT+7)", link: "Giải mã tổ hợp công nghệ", hinhAnh: "img/imgTinTuc/Number13.jpg" };
let tintuc14 = { matt: 14, tieuDe: "Dell giới thiệu Zero Trust", noiDung: "Dell giới thiệu Zero Trust", ngaydang: "Thứ tư, 4/11/2020, 15:14 (GMT+7)", link: "https://vfo.vn/r/dell-gioi-thieu-zero-trust-cac-giai-phap-an-ninh-mang-moi.146806/", hinhAnh: "img/imgTinTuc/Number14.jpg" };
let tintuc15 = { matt: 15, tieuDe: "Samsung ra mắt hai màn hình Micro LED", noiDung: "Samsung ra mắt hai màn hình Micro LED", ngaydang: "Thứ ba, 7/7/2020, 19:00 (GMT+7)", link: "Samsung ra mắt hai màn hình Micro LED", hinhAnh: "img/imgTinTuc/Number15.jpg" };

let dsTinTuc = [tintuc1, tintuc2, tintuc3, tintuc4, tintuc5, tintuc6, tintuc7, tintuc8, tintuc9, tintuc10, tintuc11, tintuc12, tintuc13, tintuc14, tintuc15];

localStorage.setItem("dsTinTuc", JSON.stringify(dsTinTuc));