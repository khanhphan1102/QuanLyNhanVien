

function NhanVien(tkNv, hoVaTenNv, email, matKhau, luongCoBan, ngayLam, chucVu, gioLam) {

    this.tkNv = tkNv;
    this.hoVaTenNv = hoVaTenNv;
    this.email = email;
    this.matKhau = matKhau;
    this.luongCoBan = luongCoBan;
    this.ngayLam = ngayLam;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    
    //Tính Tổng Lương
    this.tinhTongLuong = function () {

        if (this.chucVu == "Nhân Viên") {
            return this.luongCoBan * 1;
        } if (this.chucVu == "Trưởng Phòng") {
            return this.luongCoBan * 2;
        } if (this.chucVu == "Giám Đốc") {
            return this.luongCoBan * 3;
        }
    }
    //Xếp Loại
    this.xepLoai = function () {

        if (this.gioLam >= 192) {
            return `<p style="color: orange;">Xuất Sắc</p>`;
        } if (this.gioLam >= 176) {
            return `<p style="color: red;">Giỏi</p>`;
        } if (this.gioLam >= 160) {
            return `<p style="color: blue;">Khá</p>`;
        } if (this.gioLam < 160) {
            return `<p style="color: yellow;">Trung Bình</p>`;
        }
    }
}