$(document).ready(function () {
  var status = "add";
  var idEmployee = "";
  $(".m-loading").show();
  loadata();

  // nhấn nút thêm mới
  $("#btnAdd").click(function () {
    status = "add";
    // xóa dữ liệu trên các input để thêm mới
    $("#btnClose").text("Đóng");
    $("#txtId").val("");
    $("#txtName").val("");
    $("#txtDayOfBirth").val("");
    $("#txtEmail").val("");
    $("#txtPassPort").val("");
    $("#txtDate").val("");
    $("#txtIssued").val("");
    $("#txtPhone").val("");
    $("#txtSalary").val("");
    $("#txtCode").val("");
    $("#txtDayOfJoin").val("");
    $(".dialog-add").show();
    $("#txtId").focus();
  });

  // nhấn nút refesh
  $(".toolbar-icon-refesh").click(function () {
    $(".m-loading").show();
    loadata();
  });

  // đóng thêm mới
  $("#btn-Close-Add").click(function () {
    $(".dialog-add").hide();
  });

  // Xóa nhân viên
  $("#btnClose").click(function () {
    if (status == "update") {
      // call api xoa nhan vien
        $.ajax({
          type: "DELETE",
          url: `https://cukcuk.manhnv.net/api/v1/Employees/${idEmployee}`,
          success: function (response) {
            $(".m-loading").show();
            $(".dialog-add").hide();
            $(".m-toast-box.toast2").show();
            setTimeout(() => {
              $(".m-toast-box.toast2").hide();
            }, 2000);
            loadata();
          },
        });
    }
    $(".dialog-add").hide();
  });

  // đóng toast message
  $(".m-toast-item-close").click(function () {
    $(".m-toast-box").hide();
  });

  // nhấp đúp chuột vào 1 dòng hiện chi tiết nhân viên
  $(".m-table").on("dblclick", "tr", function () {
    status = "update";
    $("#btnClose").text("Xóa");
    let employee = $(this).data("entity");
    idEmployee = employee.EmployeeId;
    $("#txtId").val(employee.EmployeeCode);
    $("#txtName").val(employee.FullName);
    $("#txtDayOfBirth").val(parseDate(employee.DateOfBirth));
    $("#txtGender").val(employee.Gender);
    $("#txtEmail").val(employee.Email);
    $("#txtPassPort").val(employee.IdentityNumber);
    $("#txtDate").val(parseDate(employee.IdentityDate));
    $("#txtIssued").val(employee.IdentityPlace);
    $("#txtPhone").val(employee.PhoneNumber);
    $("#txtPosition").val(employee.PositionId);
    $("#txtDapartment").val(employee.DepartmentId);
    $("#txtSalary").val(employee.Salary);
    $("#txtCode").val(employee.PersonalTaxCode);
    $("#txtDayOfJoin").val(parseDate(employee.JoinDate));
    $("#txtJobStatus").val(employee.WorkStatus);
    $(".dialog-add").show();
  });

  //validate dữ liệu khi thêm mới
  $("#btnSave").click(function () {
    addEmployee(status,idEmployee);
  });

  // Hien thị trang thái lỗi khi không nhập vào các trường bắt buộc nhập
  $("#txtId").blur(function () {
    var me = this;
    validate(me);
  });
  $("#txtName").blur(function () {
    var me = this;
    validate(me);
  });
  $("#txtEmail").blur(function () {
    var me = this;
    validate(me);
  });
  $("#txtPhone").blur(function () {
    var me = this;
    validate(me);
  });
  $("#txtPassPort").blur(function () {
    var me = this;
    validate(me);
  });
});

// validate input
const validate = (input) => {
  let value = $(input).val();
  if (value === null || value === "") {
    $(input).addClass("m-input-error");
    console.log(1);
    $(input).attr("title", "Thông tin mã không được phép để trống !");
  } else {
    $(input).removeClass("m-input-error");
    $(input).removeAttr("title");
  }
};

// load lại dữ liệu
const loadata = () => {
  // xoa du lieu cu
  $(".m-table tbody").empty();

  // gọi api lấy dữ liệu
  $.ajax({
    type: "GET",
    url: "https://cukcuk.manhnv.net/api/v1/Employees",
    success: function (response) {
      response.forEach((employee) => {
        //lấy các thông tin cần thiết của đối tượng
        let maNhanVien = employee.EmployeeCode;
        let hoVaTen = employee.FullName;
        let gioiTinh = employee.GenderName;
        let ngaySinh = employee.DateOfBirth;
        let dienThoai = employee.PhoneNumber;
        let email = employee.Email;
        let chucVu = employee.PositionName;
        let phongBan = employee.DepartmentName;
        let mucLuongCoBan = employee.Salary;
        let tinhTrangCongViec = employee.WorkStatus;

        //định dạng dữ liệu ngày tháng
          if (ngaySinh) {
            ngaySinh = new Date(ngaySinh);
            //lấy ra ngày
            let date = ngaySinh.getDate();
            date = date < 10 ? `0${date}` : date;
            //lấy ra tháng
            let month = ngaySinh.getMonth() + 1;
            month = month < 10 ? `0${month}` : month;
            //lấy ra năm
            let year = ngaySinh.getFullYear();
            //lấy giá trị ngày-tháng-năm
            ngaySinh = `${date}/${month}/${year}`;
          } else ngaySinh = "__/__/____";
        if (mucLuongCoBan) {
          mucLuongCoBan = new Intl.NumberFormat("vn-VI", {
            style: "currency",
            currency: "VND",
          }).format(mucLuongCoBan);
        } else mucLuongCoBan = "";

        var el = $(`<tr>
        <td class="text-align-left" style="width: 71px">${maNhanVien}</td>
        <td class="text-align-left">${hoVaTen}</td>
        <td class="text-align-left">${gioiTinh}</td>
        <td class="text-align-center">${ngaySinh}</td>
        <td class="text-align-left">${dienThoai}</td>
        <td class="text-align-left">${email}</td>
        <td class="text-align-left">${chucVu}</td>
        <td class="text-align-left">${phongBan}</td>
        <td class="text-align-right">${mucLuongCoBan}</td>
        <td class="text-align-left">${tinhTrangCongViec}</td>
        </tr>`);
        el.data("entity", employee);
        $(".m-table tbody").append(el);
      });
      $(".m-loading").hide();
    },
  });
};

// chuyển sang ngày tháng năm để lưu vào input[date]
const parseDate = (date) => {
  const now = new Date(date);
  var day = ("0" + now.getDate()).slice(-2);
  var month = ("0" + (now.getMonth() + 1)).slice(-2);
  var today = now.getFullYear() + "-" + month + "-" + day;
  return today;
};

// hàm validate dữ liệu khi bấm button lưu + bấm button lưu
const addEmployee = (status,idEmployee) => {
  console.log(idEmployee)
  let id = $("#txtId").val();
  let name = $("#txtName").val();
  let dob = $("#txtDayOfBirth").val();
  let gender = $("#txtGender").val();
  let email = $("#txtEmail").val();
  let passPort = $("#txtPassPort").val();
  let date = $("#txtDate").val();
  let issued = $("#txtIssued").val();
  let phone = $("#txtPhone").val();
  let position = $("#txtPosition").val();
  let dapartment = $("#txtDapartment").val();
  let salary = $("#txtSalary").val();
  let code = $("#txtCode").val();
  let doj = $("#txtDayOfJoin").val();
  let job = $("#txtJobStatus").val();
  if (dob) {
    dob = new Date(dob);
  }
  if (date) {
    date = new Date(date);
  }
  if (doj) {
    doj = new Date(doj);
  }
  if (dob > new Date()) {
    $(".m-toast-box").show();
    setTimeout(() => {
      $(".m-toast-box").hide();
    }, 2000);
    return;
  }
  if (date > new Date()) {
    $(".m-toast-box").show();
    setTimeout(() => {
      $(".m-toast-box").hide();
    }, 2000);
    return;
  }
  if (doj > new Date()) {
    $(".m-toast-box").show();
    setTimeout(() => {
      $(".m-toast-box").hide();
    }, 2000);
    return;
  }
  if (salary) {
    salary = parseInt(salary);
  }
  const employee = {
    EmployeeCode: id,
    FullName: name,
    DateOfBirth: dob,
    Gender: gender,
    IdentityNumber: passPort,
    Email: email,
    IdentityDate: date,
    IdentityPlace: issued,
    PhoneNumber: phone,
    PositionId: position,
    DepartmentId: dapartment,
    PersonalTaxCode: code,
    Salary: salary,
    JoinDate: doj,
    WorkStatus: job,
  };

  // nếu gọi thêm nv
  if (status == "add") {
    $.ajax({
      type: "POST",
      url: "https://cukcuk.manhnv.net/api/v1/Employees",
      data: JSON.stringify(employee),
      dataType: "json",
      contentType: "application/json",
      success: function (response) {
        $(".m-loading").show();
        $(".dialog-add").hide();
        loadata();
      },
      error: function (e) {
       console.log(e);
      },
    });
  }

  // nếu gọi chỉnh sửa nv
  if (status == "update") {
    $.ajax({
      type: "PUT",
      url: `https://cukcuk.manhnv.net/api/v1/Employees/${idEmployee}`,
      data: JSON.stringify(employee),
      dataType: "json",
      contentType: "application/json",
      success: function (response) {
        $(".m-loading").show();
        $(".dialog-add").hide();
        loadata();
      },
    });
  }
};
