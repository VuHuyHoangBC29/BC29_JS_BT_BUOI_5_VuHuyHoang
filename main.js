/**Bài 1: Quản lý tuyển sinh
 * - Đầu vào:
 *      + Nhập điểm chuẩn.
 *      + Nhập điểm các môn 1, 2, 3.
 *      + Chọn khu vực và đối tượng.
 * 
 * - Xử lý:
 *      + 1 trong 3 môn = 0 => Rớt, không cần xét khu vực hoặc đối tượng.
 *      + Tổng điểm = Tổng điểm 3 môn + điểm khu vực + điểm đối tượng.
 *      + Nếu Tổng điểm >= Điểm chuẩn => Đậu.
 * 
 * - Đầu ra: show kết quả.
 */
function getEle(id) {
    return document.getElementById(id);
}

function kiemTra0(diem1, diem2, diem3) {
    var result;
    if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
        result = false;
    } else {
        result = true;
    }
    return result;
}

document.getElementById("btnDiem").onclick = function () {
    var diemChuan = getEle("diemChuan").value * 1;
    var diem1 = getEle("diem1").value * 1;
    var diem2 = getEle("diem2").value * 1;
    var diem3 = getEle("diem3").value * 1;
    var khuVuc = getEle("khuVuc").value * 1;
    var doiTuong = getEle("doiTuong").value * 1;
    var kiemTraDiem0 = kiemTra0(diem1, diem2, diem3);
    var tongDiem = diem1 + diem2 + diem3 + khuVuc + doiTuong;
    var dauRot = "";

    if (kiemTraDiem0 === false) {
        dauRot = "Bạn đã rớt do có 1 môn 0 điểm.";
    } else {
        if (tongDiem >= diemChuan) {
            dauRot = "Bạn đã đậu. Tổng điểm là " + tongDiem + " .";
        } else {
            dauRot = "Bạn đã rớt. Tổng điểm là " + tongDiem + " .";
        }
    }
    getEle("footerBai1").innerHTML = dauRot;
}

/**Bài 2: 
 * - Đầu vào: Nhập họ tên và số kw.
 * - Xử lý:
 *      + Từ 1kw -> 50kw: 500d/kw.
 *      + Từ 51kw -> 100kw: 650d/kw.
 *      + Từ 101kw -> 200kw: 850d/kw.
 *      + Từ 201kw -> 350kw: 1100d/kw.
 *      + Từ 351kw trở lên: 1300d/kw.
 * - Đầu ra: show kết quả tiền điện.
 */
const KW1 = 500;
const KW2 = 650;
const KW3 = 850;
const KW4 = 1100;
const KW5 = 1300;

var tienKW1 = 0;
var tienKW2 = 0;
var tienKW3 = 0;
var tienKW4 = 0;
var tienKW5 = 0;
var tongTien = 0;

function tinhTienDienChiTiet(soKW, KW1, KW2, KW3, KW4, KW5) {
    if (0 < soKW && soKW <= 50) {
        tienKW1 = soKW * KW1;
        tongTien = tienKW1
    } else if (soKW > 50 && soKW <= 100) {
        tienKW1 = 50 * KW1;
        tienKW2 = (soKW - 50) * KW2;
        tongTien = tienKW1 + tienKW2;
    } else if (soKW > 100 && soKW <= 200) {
        tienKW1 = 50 * KW1;
        tienKW2 = (100 - 50) * KW2;
        tienKW3 = (soKW - 100) * KW3;
        tongTien = tienKW1 + tienKW2 + tienKW3;
    } else if (soKW > 200 && soKW <= 350) {
        tienKW1 = 50 * KW1;
        tienKW2 = (100 - 50) * KW2;
        tienKW3 = (200 - 100) * KW3;
        tienKW4 = (soKW - 200) * KW4;
        tongTien = tienKW1 + tienKW2 + tienKW3 + tienKW4;
    } else if (soKW > 350) {
        tienKW1 = 50 * KW1;
        tienKW2 = (100 - 50) * KW2;
        tienKW3 = (200 - 100) * KW3;
        tienKW4 = (350 - 200) * KW4;
        tienKW5 = (soKW - 350) * KW5;
        tongTien = tienKW1 + tienKW2 + tienKW3 + tienKW4 + tienKW5;
    }
    return tongTien;
}

document.getElementById("btnTienDien").onclick = function () {
    var hoTen = getEle("hoTen").value;
    var soKW = getEle("soKW").value;
    var tongTienDien = 0;

    tongTienDien = tinhTienDienChiTiet(soKW, KW1, KW2, KW3, KW4, KW5);
    var currentFormat = new Intl.NumberFormat("vn-VN");
    tongTienDien = currentFormat.format(tongTienDien);
    getEle("footerBai2").innerHTML = "Họ tên: " + hoTen + "; Tiền điện: " + tongTienDien;
}