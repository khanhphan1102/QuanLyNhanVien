

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