
//Chọn Chức Vụ
function chonChucVu() {

    let chonChucVu = document.getElementById("chucvu").value;
    let chucVu = "";

    switch (chonChucVu) {
        case "0":
            chucVu = "Hãy chọn chức vụ"
            break;
        case "1":
            chucVu = "Giám Đốc"
            break;
        case "2":
            chucVu = "Trưởng Phòng"
            break;
        case "3":
            chucVu = "Nhân Viên"
            break;
    }
    return chucVu;
}

//Lấy Thông Tin Nhân Viên
function layThongTinTuForm() {

    let tkNv = document.querySelector("#tknv").value;
    let hoVaTenNv = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let matKhau = document.querySelector("#password").value;
    let luongCoBan = document.querySelector("#luongCB").value;
    let ngayLam = document.querySelector("#datepicker").value;
    let chucVu = chonChucVu();
    let gioLam = document.querySelector("#gioLam").value;

    let nv = new NhanVien(tkNv, hoVaTenNv, email, matKhau, luongCoBan, ngayLam, chucVu, gioLam);

    return nv;
}