// Bài 1
/*
+ input:
- người dùng nhập vào lần lượt ngày,tháng năm
+ Các bước xử lý bài toán:
// Tính ngày tiếp theo
B1:Tạo biến ngày, tháng , năm, tg(Ngày trong tháng)
B2:tháng 2. Năm nhuần tg=28 + ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0);
B3: Nếu tháng đó là thàng 12 và ngày đó vào cuối tháng thì năm sẽ tăng lên 1 và ngày, tháng bắt đầu là 1
B4: Công thức tính ngay = (ngay % tg) + 1;
B5: Nếu ngày tính ra bằng 1 thì tháng đó sẽ tăng lên 1
// Tính ngày trước đó
B1:Tạo biến ngayprev,thangprev,namprev
B2: Nếu ngayrev bằng 1 thì các tháng sẽ giảm đi 1. Nếu ngayprev bằng 1 và thangprev bằng 1 thì năm sẽ giảm xuống 1 tháng sẽ là tháng 12 ngày là 31
B3: Còn lại các ngày khác các ngày sẽ giảm đi 1 và tháng giữ nguyên.
+ Kết quả mong muốn:
Ngày mặc đinh: 1/1/2022
Ngày tiếp theo: 2/1/2022
Ngày trước đó: 31/12/2021
 */
document.getElementById("kq1").onclick = function () {
  var ngay = document.getElementById("ngay").value * 1;
  var thang = document.getElementById("thang").value * 1;
  var nam = document.getElementById("nam").value * 1;
  var thongBao = document.getElementById("thongBao1");
  switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      var tg = 31;
      break;
    case 2: {
      var tg = 28 + ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0);
      break;
    }
    case 4:
    case 6:
    case 9:
    case 11: {
      var tg = 30;
    }
  }
  if (thang == 12 && ngay == tg) {
    nam = nam + 1;
    thang = thang % 12;
  }
  ngay = (ngay % tg) + 1;
  if (ngay == 1) {
    thang = (thang % 12) + 1;
  }
  var ngayprev = document.querySelector(".ngay").value * 1;
  var thangprev = document.querySelector(".thang").value * 1;
  var namprev = document.querySelector(".nam").value * 1;
  if (ngayprev == 1) {
    switch (thangprev - 1) {
      case 4:
      case 6:
      case 9:
      case 11:
        ngayprev = 30;
        break;
      case 2:
        ngayprev =
          28 + ((namprev % 4 == 0 && namprev % 100 != 0) || namprev % 400 == 0);
        break;
      default:
        ngayprev = 31;
    }
    if (thangprev == 1) {
      thangprev = 12;
      namprev--;
    } else {
      thangprev--;
    }
  } else {
    ngayprev--;
  }
  thongBao.innerHTML = `Ngày tiếp theo: ${ngay}/${thang}/${nam} <br/> Ngày trước đó: ${ngayprev}/${thangprev}/${namprev}`;
};
// Bài 2:
/**
 * +input
 * Nhập vào lần lượt tháng và năm
 * In ra tháng đó có bao nhiêu ngày
 * +Các bước xử lí bài toán
 * B1: Tạo biến thang,nam
 * B2: Nếu các tháng là 1,3,5,7,8,10,12 thì có 31 ngày. Các tháng 4,6,9,11 có 30 ngày
 * B3: Nếu là tháng 2 thì năm nhuần có 29 ngày. Không nhuần có 28 ngày
 * B4: Thông báo cho người dùng nhập lại nếu không nhập đúng số tháng
 * B5: Trả về kết quả tháng đó có bao nhiêu ngày
 * +Kết quả mong muốn
 * Tháng 2 năm nhuần(2020): Tháng 2 có 29 ngày
 */
document.getElementById("kq2").onclick = function () {
  var thang = document.getElementById("thang2").value * 1;
  var nam = document.getElementById("nam2").value * 1;
  var thongBao = document.getElementById("thongBao2");
  switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      thongBao.innerHTML = "Tháng " + thang + " có 31 ngày";
      break;
    case 2: {
      if (nam % 4 == 0) {
        thongBao.innerHTML = "Tháng " + thang + " có 29 ngày ";
      } else thongBao.innerHTML = "Tháng " + thang + " có 28 ngày ";
      break;
    }
    case 4:
    case 6:
    case 9:
    case 11: {
      thongBao.innerHTML = "Tháng " + thang + " có 30 ngày ";
    }
    default: {
      thongBao.innerHTML = "Nhập lại giùm nha!!!!!!!";
    }
  }
};
// Bài 3:
/**
 * +input
 * Người dùng nhập vào số có ba chữ số. In ra các đọc số đó
 * + Các bước xử lý
 * B1: Tạo biến so,tram,chuc,Dv,tentram,tenchuc,tenDv
 * B2: Đổi số ra hàng trăm=Math.floor((so / 100) % 10)
 * chục=Math.floor((so / 10) % 10)
 * Dvi=so%10
 * B3:Nếu so nhap vào <100 hoặc >999 thì trả về false
 * B4: Nếu nhập đúng thì số hàng trăm đọc là 'trăm'. hàng chục'mươi'.hàng đơn vị là'...'
 * B5: Nếu hàng chục là số 0 thì đọc là 'lẻ'
 * B6: Trả về cách đọc cho người dùng
 * +Kết quả mong muốn
 * 303: Ba trăm lẻ ba
 */
document.getElementById("kq3").onclick = function () {
  var so = document.getElementById("so").value * 1;
  var thongBao = document.getElementById("thongBao3");
  var tram = Math.floor((so / 100) % 10);
  var chuc = Math.floor((so / 10) % 10);
  var Dv = so % 10;
  var tentram = "";
  var tenchuc = "";
  var tenDv = "";
  if (so < 100 || so > 999) {
    thongBao.innerHTML = "Nhập lại số có 3 chữ số";
  } else {
    switch (tram) {
      case 1: {
        tentram = "Một trăm ";
        break;
      }
      case 2: {
        tentram = "Hai trăm ";
        break;
      }
      case 3: {
        tentram = "Ba trăm ";
        break;
      }
      case 4: {
        tentram = "Bốn trăm ";
        break;
      }
      case 5: {
        tentram = "Năm trăm ";
        break;
      }
      case 6: {
        tentram = "Sáu trăm ";
        break;
      }
      case 7: {
        tentram = "Bảy trăm ";
        break;
      }
      case 8: {
        tentram = "Tám trăm ";
        break;
      }
      case 9: {
        tentram = "Chín trăm ";
        break;
      }
    }
    if (chuc % 10 == 0 && Dv != 0) {
      tenchuc = "lẻ ";
    }
    switch (chuc) {
      case 1:
        tenchuc = "mười ";
        break;
      case 2:
        tenchuc = "hai mươi ";
        break;
      case 3:
        tenchuc = "ba mươi ";
        break;
      case 4:
        tenchuc = "bốn mươi ";
        break;
      case 5:
        tenchuc = "năm mươi ";
        break;
      case 6:
        tenchuc = "sáu mươi ";
        break;
      case 7:
        tenchuc = "bảy mươi ";
        break;
      case 8:
        tenchuc = "tám mươi ";
        break;
      case 9:
        tenchuc = "chín mươi ";
        break;
    }
    switch (Dv) {
      case 1:
        tenDv = "mốt   ";
        break;
      case 2:
        tenDv = "hai ";
        break;
      case 3:
        tenDv = "ba ";
        break;
      case 4:
        tenDv = "bốn ";
        break;
      case 5:
        tenDv = "lăm ";
        break;
      case 6:
        tenDv = "sáu ";
        break;
      case 7:
        tenDv = "bảy ";
        break;
      case 8:
        tenDv = "tám ";
        break;
      case 9:
        tenDv = "chín ";
        break;
    }
    thongBao.innerHTML = tentram + tenchuc + tenDv;
  }
};
// bài 4
/**
 * +input
 * Cho người dùng nhập tên và tọa độ của sinh viên. Nhập tọa độ trường học
 * In ra tên sinh viên xa trường nhất
 * + Các bước xử lí
 * B1: Tạo biến sv,toa độ của từng sinh viên(x,y),tọa độ của trường học(x2,y2)
 * B2: Công thức tính khoảng cách: math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1))
 * B3: Vd nếu khoảng cách sinh viên 1>kc sv2 và lớn hơn khoảng cách sinh viên 3. Thì sv 1 xa trường nhất/
 * B4: in ra tên sinh viên xa trường nhất
 * + Kết quả mong muốn:
 * Sinh viên xa trường nhất: A
 */
document.getElementById("kq4").onclick = function () {
  var tenSv1 = document.getElementById("tenSv1").value;
  var toaDo1x1 = document.getElementById("toaDo1x1").value * 1;
  var toaDo1y1 = document.getElementById("toaDo1y1").value * 1;
  var tenSv2 = document.getElementById("tenSv2").value;
  var toaDo2x1 = document.getElementById("toaDo2x1").value * 1;
  var toaDo2y1 = document.getElementById("toaDo2y1").value * 1;
  var tenSv3 = document.getElementById("tenSv3").value;
  var toaDo3x1 = document.getElementById("toaDo3x1").value * 1;
  var toaDo3y1 = document.getElementById("toaDo3y1").value * 1;
  var toaDoChungx2 = document.getElementById("toaDoChungx2").value * 1;
  var toaDoChungy2 = document.getElementById("toaDoChungy2").value * 1;
  var thongBao = document.getElementById("thongBao4");
  var KcDenTruong1 = Math.sqrt(
    (toaDoChungx2 - toaDo1x1) * (toaDoChungx2 - toaDo1x1) +
      (toaDoChungy2 - toaDo1y1) * (toaDoChungy2 - toaDo1y1)
  );
  var KcDenTruong2 = Math.sqrt(
    (toaDoChungx2 - toaDo2x1) * (toaDoChungx2 - toaDo2x1) +
      (toaDoChungy2 - toaDo2y1) * (toaDoChungy2 - toaDo2y1)
  );
  var KcDenTruong3 = Math.sqrt(
    (toaDoChungx2 - toaDo3x1) * (toaDoChungx2 - toaDo3x1) +
      (toaDoChungy2 - toaDo3y1) * (toaDoChungy2 - toaDo3y1)
  );
  if (KcDenTruong1 > KcDenTruong3 && KcDenTruong1 > KcDenTruong3) {
    thongBao.innerHTML = "Tên sinh viên xa trường nhất: " + tenSv1;
  } else if (KcDenTruong2 > KcDenTruong1 && KcDenTruong2 > KcDenTruong3) {
    thongBao.innerHTML = "Tên sinh viên xa trường nhất: " + tenSv2;
  } else if (KcDenTruong3 > KcDenTruong1 && KcDenTruong3 > KcDenTruong2) {
    thongBao.innerHTML = "Tên sinh viên xa trường nhất: " + tenSv3;
  }
};
