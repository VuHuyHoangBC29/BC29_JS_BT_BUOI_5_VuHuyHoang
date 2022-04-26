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
 * 
 */