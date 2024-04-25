

let dsnv = [];


dataJson = localStorage.getItem("DSNV");
if (dataJson !== null) {
    dsnv = JSON.parse(dataJson);
    renderDsnv();
}


function themNv() {

    let tkNv = document.querySelector("#tknv").value;
    let hoVaTenNv = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let matKhau = document.querySelector("#password").value;
    let luongCoBan = document.querySelector("#luongCB").value;
    let ngayLam = document.querySelector("#datepicker").value;
    let chucVu = chonChucVu();
    let gioLam = document.querySelector("#gioLam").value;

    let nv = new  NhanVien(tkNv,hoVaTenNv,email,matKhau,luongCoBan,ngayLam,chucVu,gioLam);

    // let tongLuong = document.querySelector("#txtDiemLy").value;
    // let xepLoai = document.querySelector("#txtDiemHoa").value;

    dsnv.unshift(nhanVien);

    //JSON
    dataJson = JSON.stringify(dsnv);
    localStorage.setItem("DSNV", dataJson)

    renderDsnv();
}

function renderDsnv() {

    let contentHTML = "";

    for (let i = 0; i < dsnv.length; i++) {

        let stringsNhanVien = `<tr>
                                   <td>${dsnv[i].tkNv}</td>
                                   <td>${dsnv[i].hoVaTenNv}</td>
                                   <td>${dsnv[i].email}</td>
                                   <td>${dsnv[i].ngayLam}</td>
                                   <td>${dsnv[i].chucVu}</td>
                                   <td></td>
                                   <td>Xếp Loại</td>
                               </tr>`
        contentHTML += stringsNhanVien;
    }
    document.querySelector("#tableDanhSach").innerHTML = contentHTML;
}