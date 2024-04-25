

let dsnv = [];

//Render dsnv lên table
var dataJson = localStorage.getItem("DSNV");
if (dataJson !== null) {

    dataRaw = JSON.parse(dataJson);
    for (let i = 0; i < dataRaw.length; i++) {

        let data = dataRaw[i];
        let nv = new NhanVien(data.tkNv, data.hoVaTenNv, data.email, data.matKhau, data.luongCoBan, data.ngayLam, data.chucVu, data.gioLam);
        dsnv.push(nv);
    }
    renderDsnv();
}

// Thêm Nhân Viên
function themNv() {

    let nv = layThongTinTuForm();
    dsnv.unshift(nv);

    //JSON
    var dataJson = JSON.stringify(dsnv);
    localStorage.setItem("DSNV", dataJson)

    renderDsnv();
}

//Render Danh Sách Nhân Viên
function renderDsnv() {

    let contentHTML = "";

    for (let i = 0; i < dsnv.length; i++) {

        let stringsNhanVien = `<tr>
                                   <td>${dsnv[i].tkNv}</td>
                                   <td>${dsnv[i].hoVaTenNv}</td>
                                   <td>${dsnv[i].email}</td>
                                   <td>${dsnv[i].ngayLam}</td>
                                   <td>${dsnv[i].chucVu}</td>
                                   <td>${dsnv[i].tinhTongLuong()}</td>
                                   <td>${dsnv[i].xepLoai()}</td>
                               </tr>`
        contentHTML += stringsNhanVien;
    }
    document.querySelector("#tableDanhSach").innerHTML = contentHTML;
}