svar dssp = JSON.parse(localStorage.getItem("dssp"));
var dsGioHang = JSON.parse(localStorage.getItem("dsmasp"));
function napGioHang() {
    dsGioHang.forEach(spGioHang => {
        dssp.forEach(sp => {
            if (spGioHang.masp == sp.masp) {
                let thanhTien = Number(sp.dongia) * Number(spGioHang.soLuong);;
                let row = "<tr class='bang' >"
                    + "<td>"
                    + " <input type='checkbox' class='chonSP' name='chonSP' value='" + spGioHang.masp + "'>"
                    + " </td>"
                    + "        <td>"
                    + "   <div class='image'><a href='BH_ChiTiet.html' onclick='setMaSP(" + spGioHang.masp + ")'> <img alt='img'"
                    + "    src='" + sp.hinhanh + "'></a></div>"
                    + "    </td>"
                    + "    <td>"
                    + "      <div class='tenSP'>"
                    + "       <h4><a href='BH_ChiTiet.html' onclick='setMaSP(" + spGioHang.masp + ")'>" + sp.tensp + "</a></h4>"
                    + "    </div>"
                    + "       <div class='price'><span>" + dinhDangTienVN(sp.dongia) + " VNĐ" + "</span></div>"
                    + "       </td>"
                    + "   <td class='product-quantity'>"
                    + "        <div class='form-group-soLuong'>"
                    + "        <input class='form-control' type='number' "
                    + "          min='0' max ='" + sp.soluong + "'value='" + spGioHang.soLuong + "' name='soLuongSP' >"
                    + "      </div>"
                    + "          </td>"
                    + "           <td class='price'  name='giaSP'>" + dinhDangTienVN(sp.dongia) + "</td>"
                    + "            <td class='delete' onclick='xoaSP(" + spGioHang.masp + ")'><a title='Delete' >"
                    + "                    <a href='#' class='btn btn-info '>"
                    + "                       <i class='fa-solid fa-trash-can'></i></span> Xóa"
                    + "                  </a>"
                    + "                </a>"
                    + "             </td>"
                    + "  <td id='thanhTienSP' name='thanhTienSP'>" + dinhDangTienVN(thanhTien) + "</td>"
                    + " </tr > "
                $("#tblGioHang").append(row);
            }
        })
    });
}
function setMaSP(maSP) {
    localStorage.setItem("masp", maSP);
}
function xoaSP(maSP) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
        dsGioHang.forEach(sp => {
            if (sp.masp == maSP) {
                dsGioHang.splice(dsGioHang.indexOf(sp), 1);
            }
        })
        localStorage.setItem("dsmasp", JSON.stringify(dsGioHang));
        window.location.reload();
    }
}
window.onload = function () {
    napGioHang();
        let kiemTraDN = JSON.parse(localStorage.getItem("flag"));
        if (kiemTraDN) {
            document.querySelector("#khongDN").style.display = "none";
            document.querySelector("#sauDN").style.display = "block";
        }
        $("#dangxuat").click(function(){
            document.querySelector("#khongDN").style.display = "block";
            document.querySelector("#sauDN").style.display = "none";
            localStorage.setItem("flag",false)
        })
}
function chonAll() {
    var chonSP = document.getElementsByName('chonSP');
    if (document.getElementById("chonAll").checked == true) {
        for (var i = 0; i < chonSP.length; i++) {
            chonSP[i].checked = true;
        }
    }
    else {
        for (var i = 0; i < chonSP.length; i++) {
            chonSP[i].checked = false;
        }
    }
}
window.onclick = function () {
    var kiemTra = 0;
    var tongTien = 0;
    var chonSP = document.getElementsByName('chonSP');
    let soLuong = chonSP.length;
    var soLuongSP = document.getElementsByName('soLuongSP')
    var giaSP = document.getElementsByName('giaSP')
    var thanhTien = document.getElementsByName('thanhTienSP')
    for (var i = 0; i < soLuong; i++) {
        let thanhTienSP = soLuongSP[i].value * giaSP[i].innerText.replace(/[^0-9]/g, '');
        thanhTien[i].innerHTML = dinhDangTienVN(Number(thanhTienSP))
        if (chonSP[i].checked == true) {
            kiemTra++;
            tongTien = Number(thanhTien[i].innerHTML.replace(/[^0-9]/g, '')) + tongTien;
        }
    }
    if (kiemTra != soLuong) {
        document.getElementById("chonAll").checked = false;
    }
    if (kiemTra == soLuong) {
        document.getElementById("chonAll").checked = true;
    }
    let tien = dinhDangTienVN(tongTien);
    document.getElementById('tongTienSP').innerHTML = tien
    let phiBaoHiem = Number(tongTien) * 0.01;
    document.getElementById('phiBaoHiem').innerHTML = dinhDangTienVN(phiBaoHiem)
    let tongThanhTien = (tongTien + phiBaoHiem);
    tongThanhTien = tongThanhTien * (100 - Number(document.getElementById('txtGiamGia').value.replace(/[^0-9]/g, ''))) / 100;
    document.getElementById('tongThanhTien').innerHTML = dinhDangTienVN(tongThanhTien) + '&#8363;';
}
document.getElementById('btnGiamGia').onclick = function () {
    let giamGia = Number(document.getElementById("txtGiamGia").value);
    if (!(/^[0-9]*$/).test(giamGia)) {
        alert("Vui lòng nhập số");
        return;
    }
    if (giamGia == "") {
        alert("Bạn đã chưa nhập mã");
        return;
    }
    if (!(giamGia > 100 || giamGia < 0)) {
        document.getElementById('giamGiaGH').innerHTML = giamGia + "%";
        return true;
    }
    else {
        document.getElementById('giamGiaGH').innerHTML = "0%";
        alert("Bạn đã nhập sai giảm giá");
        return false;
    }
}
document.getElementById('btnThanhToan').onclick = function () {
    if (dsGioHang.length == 0) {
        alert("Giỏ hàng trống");
        return false;
    }
    var chonSP = document.getElementsByName('chonSP');
    var kiemTra = 0;
    for (var i = 0; i < chonSP.length; i++) {
        if (chonSP[i].checked == true) {
            kiemTra++;
        }
    }
    if (kiemTra == 0) {
        alert("Vui lòng chọn sản phẩm");
        return false;
    }
    let dataThanhToan = JSON.parse(localStorage.getItem("dataThanhToan"));
    if (dataThanhToan == null) {
        dataThanhToan = [];
    }
    let tongTienSP = document.getElementById('tongTienSP').innerHTML.replace(/[^0-9]/g, '');
    let phiBaoHiem = document.getElementById('phiBaoHiem').innerHTML.replace(/[^0-9]/g, '');
    let tongThanhTien = document.getElementById('tongThanhTien').innerHTML.replace(/[^0-9]/g, '');
    let giamGia = document.getElementById('giamGiaGH').innerHTML.replace(/[^0-9]/g, '');
    let ngayLap = (new Date().toLocaleDateString())
    var soLuongSP = document.getElementsByName('soLuongSP')
    var chonSP = document.getElementsByName('chonSP');
    var dsMua = [];
    for (var i = 0; i < chonSP.length; i++) {
        if (chonSP[i].checked == true) {
            let temp = { masp: chonSP[i].value, soluong: soLuongSP[i].value }
            dsMua.push(temp);
        }
    }
    dataThanhToan = {
        "maSP": dsMua,
        "tongTienSP": tongTienSP,
        "phiBaoHiem": phiBaoHiem,
        "giamGia": giamGia,
        "ngayLap": ngayLap,
        "tongThanhTien": tongThanhTien
    }
    localStorage.setItem("dataThanhToan", JSON.stringify(dataThanhToan));
    var dsMua = JSON.parse(localStorage.getItem("dsmasp"));
    var chonSP = document.getElementsByName('chonSP');
    dsMua.forEach(sp => {
        for (var i = 0; i < chonSP.length; i++) {
            if (chonSP[i].checked == true) {
                kiemTra++;
            }
        }
        sp.soLuong = 0;
    })
    return true;
}
function dinhDangTienVN(n) {
    return "" + n.toFixed(0).replace(/./g, function (c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    });
}
const header = document.querySelector("header")
window.addEventListener("scroll", function () {
    x = window.pageYOffset
    if (x > 0) {
        header.classList.add("sticky")
    }
    else {
        header.classList.remove("sticky")
    }
})