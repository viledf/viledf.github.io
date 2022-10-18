let loai1 = { maLoai: 1, tenLoai: "Điện thoại" }
let loai2 = { maLoai: 2, tenLoai: "Đồng hồ" }
let loai3 = { maLoai: 3, tenLoai: "Laptop" }
let loai4 = { maLoai: 4, tenLoai: "Âm thanh" }

let dsLoaiSP = [loai1, loai2, loai3, loai4]
localStorage.setItem("dsLoaiSP", JSON.stringify(dsLoaiSP));


let sp1 = { masp: 1, tensp: "Samsung Galaxy S22 Ultra", maLoai: 1, hinhanh: "img/Glaxy S22 Ultra.jpg", soluong: 10, dongia: 19999000 }
let sp2 = { masp: 2, tensp: "Iphone 13 Pro max", maLoai: 1, hinhanh: "img/Iphone 13 pro max.jpg", soluong: 15, dongia: 27490000 }
let sp3 = { masp: 3, tensp: "Iphone 14 Pro max", maLoai: 1, hinhanh: "img/Iphone 14 pro max.jpg", soluong: 20, dongia: 37340000 }
let sp4 = { masp: 4, tensp: "Iphone 14", maLoai: 1, hinhanh: "img/Iphone 14.jpg", soluong: 30, dongia: 24990000 }
let sp5 = { masp: 5, tensp: "OPPO Reno8 series", maLoai: 1, hinhanh: "img/OPPO Reno8 series.jpg", soluong: 25, dongia: 18900000}
let sp6 = { masp: 6, tensp: "Realme 9 series", maLoai: 1, hinhanh: "img/Realme 9 series.jpg", soluong: 80, dongia: 10000000 }
let sp7 = { masp: 7, tensp: "Samsung Galaxy Z Fold 4 256GB", maLoai: 1, hinhanh: "img/Samasung Glaxy Z Fold 4 256GB.jpg", soluong: 12, dongia: 44790000 }
let sp8 = { masp: 8, tensp: "Samsung Galaxy Z Flip 4 5G 128GB", maLoai: 1, hinhanh: "img/Samsung Glaxy Z Flip 4 5G 128GB.jpg", soluong: 53, dongia: 24890000 }
let sp9 = { masp: 9, tensp: "Vivo Y15 series", maLoai: 1, hinhanh: "img/Vivo Y15 series.jpg", soluong: 23, dongia: 7900000}
let sp10 ={ masp: 10, tensp: "Iphone 8 Plus", maLoai: 1, hinhanh: "img/iphone8plus.jpg", soluong: 6, dongia: 6900000 }
let sp11 = { masp: 11, tensp: "Iphone XS max", maLoai: 1, hinhanh: "img/iphonexsmax.jpg", soluong: 6, dongia: 15000000 }
let sp12 = { masp: 12, tensp: "Iphone 12 pro max", maLoai: 1, hinhanh: "img/iphone12promax.jpeg", soluong: 2, dongia: 19990000 }

let sp13 = { masp: 13, tensp: "Apple Watch S7", maLoai: 2, hinhanh: "img/Apple Watch S7.jpg", soluong: 1, dongia: 7890000 }
let sp14 = { masp: 14, tensp: "Apple Watch S8 45mm", maLoai: 2, hinhanh: "img/Apple Watch S8 45mm.jpg", soluong: 2, dongia: 22989000 }
let sp15 = { masp: 15, tensp: "Apple Watch Series 5 44mm", maLoai: 2, hinhanh: "img/Apple Watch Series 5 44mm.jpg", soluong: 5, dongia: 4590000 }
let sp16 = { masp: 16, tensp: "Oppo Band", maLoai: 2, hinhanh: "img/Oppo Band.jpg", soluong: 7, dongia: 790000 }
let sp17 = { masp: 17, tensp: "Oppo Watch Free 46mm", maLoai: 2, hinhanh: "img/Oppo Watch Frê 46mm.jpg", soluong: 100, dongia: 990000 }
let sp18 = { masp: 18, tensp: "Realme Watch 2 Pro 42mm", maLoai: 2, hinhanh: "img/Realme Watch 2 Pro 42mm.jpg", soluong: 3, dongia: 1990000 }
let sp19 = { masp: 19, tensp: "Samsung Glaxy Watch5 Pro 45mm", maLoai: 2, hinhanh: "img/Samsung Glaxy Watch5 Pro 45mm.jpg", soluong: 4, dongia: 11900000 }
let sp20 = { masp: 20, tensp: "Samsung Glaxy Watch Active 2 44mm", maLoai: 2, hinhanh: "img/Samsung Glaxy Watch Active 2 44mm.jpg", soluong: 10, dongia: 3490000 }

let sp21 = { masp: 21, tensp: "Dell Gaming Alienware M15 R6 i7", maLoai: 3, hinhanh: "img/Dell Gaming Alienware M15 R6 i7.jpg", soluong: 10, dongia: 24490000 }
let sp22 = { masp: 22, tensp: "Dell Inspiron 14 5415 R7.jpg", maLoai: 3, hinhanh: "img/Dell Inspiron 14 5415 R7.jpg", soluong: 15, dongia: 24890000 }
let sp23 = { masp: 23, tensp: "Dell Inspiron 15 5515 R7", maLoai: 3, hinhanh: "img/Dell Inspiron 15 5515 R7.jpg", soluong: 50, dongia: 11990000 }
let sp24 = { masp: 24, tensp: "Dell Vostro 5620 i5", maLoai: 3, hinhanh: "img/Dell Vostro 5620 i5.jpg", soluong: 50, dongia: 24990000 }
let sp25 = { masp: 25, tensp: "HP 15s Fq2662tu i3", maLoai: 3, hinhanh: "img/HP 15s Fq2662tu i3.jpg", soluong: 50, dongia: 34500000 }
let sp26 = { masp: 26, tensp: "Intel Nuc M15 i7", maLoai: 3, hinhanh: "img/Intel Nuc M15 i7.jpg", soluong: 70, dongia: 27370000 }
let sp27 = { masp: 27, tensp: "Macbook Air M2 2022 16GB", maLoai: 3, hinhanh: "img/Macbook Air M2 2022 16GB.jpg", soluong: 70, dongia: 55000000 }
let sp28 = { masp: 28, tensp: "Macbook Pro 13 inch M2 2022", maLoai: 3, hinhanh: "img/Macbook Pro 13 inch M2 2022.jpg", soluong: 30, dongia: 106000000 }
let sp29 = { masp: 29, tensp: "Macbook Pro 16 M1 max.jpg", maLoai: 3, hinhanh: "img/Macbook Pro 16 M1 max.jpg", soluong: 30, dongia: 78990000 }
let sp30 = { masp: 30, tensp: "Macbook Pro 2020 M1.jpg", maLoai: 3, hinhanh: "img/Macbook Pro 2020 M1.jpg", soluong: 30, dongia: 40990000 }

let sp31=  {masp:31, tensp:"Beats Studio3 Wireless", maLoai:4 ,hinhanh:"img/Beats Studio3 Wireless.jpg" ,soluong:10, dongia:5990000}
let sp32=  {masp:32, tensp:"Bluetooth Apple AirPods", maLoai:4 ,hinhanh:"img/Bluetooth Apple AirPods.jpg" ,soluong:14, dongia:6990000}
let sp33=  {masp:33, tensp:"Bluetooth Sony WH-XB910N Đen", maLoai:4 ,hinhanh:"img/Bluetooth Sony WH-XB910N Đen.jpg" ,soluong:20, dongia:4590000}
let sp34=  {masp:34, tensp:"Corsair HS50 PRO Stereo Carbon", maLoai:4 ,hinhanh:"img/Corsair HS50 PRO Stereo Carbon.jpg" ,soluong:40, dongia:1190000}
let sp35=  {masp:35, tensp:"Devialet Phantom", maLoai:4 ,hinhanh:"img/DEVIALET PHANTOM.jpg" ,soluong:32, dongia:69990000}
let sp36=  {masp:36, tensp:"Samsung Galaxy Buds", maLoai:4 ,hinhanh:"img/Samsung Galaxy Buds.webp" ,soluong:11, dongia:4990000}
let sp37=  {masp:37, tensp:"Tai nghe Sony Wh-1000XM5", maLoai:4 ,hinhanh:"img/TAI NGHE SONY WH-1000XM5.webp" ,soluong:25, dongia:8490000}
let sp38=  {masp:38, tensp:"Marshall 1962 Bluesbreaker", maLoai:4 ,hinhanh:"img/Marshall 1962 Bluesbreaker.jpg" ,soluong:34, dongia:51480000}
let sp39=  {masp:39, tensp:"Marshall Acton 2", maLoai:4 ,hinhanh:"img/Marshall Acton 2.jfif" ,soluong:16, dongia:6490000}
let sp40=  {masp:40, tensp:"B&O Beoplay Portal", maLoai:4 ,hinhanh:"img/B&O Beoplay Portal.jpg" ,soluong:37, dongia:14490000}

let dssp = [sp1, sp2, sp3, sp4, sp5, sp6, sp7, sp8, sp9, sp10, 
            sp11, sp12, sp13, sp14, sp15, sp16, sp17, sp18, sp19, sp20, 
            sp21, sp22, sp23, sp24, sp25, sp26, sp27, sp28, sp29, sp30,
            sp31, sp32, sp33, sp34, sp35, sp36, sp37, sp38, sp39, sp40]

localStorage.setItem("dssp", JSON.stringify(dssp));





