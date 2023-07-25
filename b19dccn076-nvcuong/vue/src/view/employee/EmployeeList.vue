<template lang="">
  <div class="page-content">
    <div class="page-header">
      <div class="page-header-title">Danh sách nhân viên</div>
      <button
        id="btnAdd"
        class="m-btn m-btn-icon m-btn-icon-add"
        @click="btnAddOnClick"
      >
        Thêm mới nhân viên
      </button>
    </div>
    <div class="page-toolbar">
      <div class="toolbar-left">
        <input
          id=""
          class="m-input m-input-icon-left m-input-icon-left-search"
          placeholder="Tìm kiếm theo Mã, tên hoặc số điện thoại"
          style="width: 40%"
        />
        <select name="" id="">
          <option value="" class="option">Tất cả phòng ban</option>
          <option value="" class="option">Phòng đào tạo</option>
          <option value="" class="option">Phòng kĩ thuật</option>
        </select>
        <select name="" id="">
          <option value="" class="option">Tất cả vị trí</option>
          <option value="" class="option">Giám đốc</option>
          <option value="" class="option">Nhân viên</option>
        </select>
      </div>
      <div class="toolbar-right toolbar-icon-refesh" @click="loadData"></div>
    </div>
    <div class="page-grid" style="position: relative">
      <div class="test">
        <table class="m-table">
          <thead>
            <tr>
              <th class="text-align-left">Mã nhân viên</th>
              <th class="text-align-left">Họ và tên</th>
              <th class="text-align-left">Giới tính</th>
              <th class="text-align-center">Ngày sinh</th>
              <th class="text-align-center">Điện thoại</th>
              <th class="text-align-left">Email</th>
              <th class="text-align-left">Chức vụ</th>
              <th class="text-align-left">Phòng ban</th>
              <th class="text-align-right">Mức lương cơ bản</th>
              <th class="text-align-left">Tình trạng công việc</th>
            </tr>
          </thead>
          <tbody id="employee">
            <tr
              v-for="employee in employees"
              :key="employee.EmployeeId"
              @dblclick="onDblClick(employee)"
            >
              <td class="text-align-left" style="width: 71px">
                {{ employee.EmployeeCode }}
              </td>
              <td class="text-align-left">{{ employee.FullName }}</td>
              <td class="text-align-left">{{ employee.GenderName }}</td>
              <td class="text-align-center">
                {{ validateDate(employee.DateOfBirth) }}
              </td>
              <td class="text-align-left">{{ employee.PhoneNumber }}</td>
              <td class="text-align-left">{{ employee.Email }}</td>
              <td class="text-align-left">{{ employee.PositionName }}</td>
              <td class="text-align-left">{{ employee.DepartmentName }}</td>
              <td class="text-align-right">{{ formatSalary(employee.Salary) }}</td>
              <td class="text-align-left">
                {{ employee.WorkStatus }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="m-paging">
        <div class="m-paging-left">Hiển thị 01-100/200 nhân viên</div>
        <div class="m-paging-center">
          <button class="m-btn-first m-btn-paging">
            <img src="../../assets/icon/btn-firstpage.svg" alt="" />
          </button>
          <button class="m-btn-prev m-btn-paging">
            <img src="../../assets/icon/btn-prev-page.svg" alt="" />
          </button>
          <div class="m-page-number-group">
            <button class="m-page-number active">1</button>
            <button class="m-page-number">2</button>
            <button class="m-page-number">3</button>
            <button class="m-page-number">4</button>
          </div>
          <button class="m-btn-next m-btn-paging">
            <img src="../../assets/icon/btn-next-page.svg" alt="" />
          </button>
          <button class="m-btn-last m-btn-paging">
            <img src="../../assets/icon/btn-lastpage.svg" alt="" />
          </button>
        </div>
        <div class="m-paging-right">
          <select name="" id="">
            <option value="10">10 nhân viên/trang</option>
            <option value="20">20 nhân viên/trang</option>
            <option value="50">50 nhân viên/trang</option>
          </select>
        </div>
      </div>
    </div>
    <EmployeeDetail
      :isShow="isShowDialog"
      @showDialog="showDetailDialog"
      :employeeSelected="employeeSelected"
      :employeeSelectedId="employeeSelectedId"
      :status="status"
      @reload="loadData"
      @setShowToast="setShowToast"
      @setToastError="setToastError"
      @setToastSuccess="setToastSuccess"
      @setToastMessage="setToastMessage"
    />
    <div class="m-loading" v-bind:class="{ isShowLoading: isShowLoading }">
      <div class="lds-hourglass"></div>
    </div>
    <div class="m-toast-box" v-bind:class="{ isShowToast: isShowToast}">
      <div class="m-toast-item" v-bind:class="{ toastSuccess: toastSuccess, toastError: toastError }">
        <div class="m-toast-item-icon">
          <i class="fas fa-exclamation-circle"></i>
        </div>
        <div class="m-toast-item-message">{{toastMessage}}</div>
        <div class="m-toast-item-close"><i class="fas fa-times"></i></div>
      </div>
    </div>
    <div class="m-dialog">
      <div class="m-dialog-content">
        <div class="m-dialog-icon-close">
          <i class="fas fa-times fw-200"></i>
        </div>
        <div class="m-dialog-header">Xóa thông tin nhân viên</div>
        <div class="m-dialog-body">
          <div class="m-dialog-body-icon">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
          <div class="m-dialog-body-message">
            Bạn có chắc muốn xóa
            <span style="font-weight: 600" id="deleteEmployee"
              >"Thông tin của nhân viên này"</span
            >
            hay không?
          </div>
        </div>
        <div class="m-dialog-footer">
          <div class="m-dialog-footer-left">Xóa</div>
          <div class="m-dialog-footer-right">Đóng</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import EmployeeDetail from "./EmployeeDetail.vue";
export default {
  name: "EmployeeList",
  components: {
    EmployeeDetail,
  },

  // giai đoạn 1: setup

  setup() {},

  // giai đoạn 2:
  created() {
    //gọi api lấy dữ liệu
    const me = this;
    axios
      .get("https://cukcuk.manhnv.net/api/v1/Employees")
      .then(function (res) {
        me.employees = res.data;
      })
      .catch(function (e) {
        console.log(e)
      });
  },

  methods: {
    /**
     * bắt sự kiện double click vào một hàng
     * @param {Object} employee - đối tượng json employee
     * Author: NVC(20/07/2023)
     */
    onDblClick(employee) {
      this.employeeSelected = employee;
      this.employeeSelectedId = employee.EmployeeId;
      this.showDetailDialog(true);
      this.status = 1;
    },
    /**
     * chuẩn hóa dữ liệu ngày để hiển thị ra from
     * @param {Date} dob 
     * Author: NVC(20/07/2023)
     */
    validateDate(dob) {
      try {
        if (dob) {
          dob = new Date(dob);
          //lấy ra ngày
          let date = dob.getDate();
          date = date < 10 ? `0${date}` : date;
          //lấy ra tháng
          let month = dob.getMonth() + 1;
          month = month < 10 ? `0${month}` : month;
          //lấy ra năm
          let year = dob.getFullYear();
          //lấy giá trị ngày-tháng-năm
          dob = `${date}/${month}/${year}`;
        } else dob = "__/__/____";
        return dob;
      } catch (e) {
        console.log(e);
      }
    },
    /**
     * bắt sự kiện click vào button thêm mới nhân viên
     * @param {Number} status - 0 là thêm mới, 1 là xem chi tiết nhân viên
     * Author: NVC(20/07/2023)
     */
    btnAddOnClick() {
      this.employeeSelected = {};
      this.status = 0;
      this.showDetailDialog(true);
    },

    /**
     * bắt sự kiện hiển thị ra from chi tiết nhân viên
     * @param {Boolean} isShowDialog - true là hiện, false là ẩn
     * Author: NVC(20/07/2023)
     */
    showDetailDialog(isShow) {
      this.isShowDialog = isShow;
    },

    /**
     * bắt sự kiện hiển thị ra loading
     * @param {Boolean} isShowLoading - true là hiện, false là ẩn
     * Author: NVC(20/07/2023)
     */
    showLoading(isShowLoad) {
      this.isShowLoading = isShowLoad;
    },

    /**
     * bắt sự kiện hiển thị ra lấy dữ liệu tất cả nhân viên
     * @param {Object} employees - danh sách nhân viên
     * Author: NVC(20/07/2023)
     */
    loadData() {
      const me = this;
      me.showLoading(true);
      axios
        .get("https://cukcuk.manhnv.net/api/v1/Employees")
        .then(function (res) {
          console.log(res);
          me.employees = res.data;
            me.showLoading(false);

        })
        .catch(function () {});
    },

    /**
     * chuẩn hóa dữ liệu lương để hiển thị ra
     * @param {String} Salary - chuẩn hóa ra dạng xxx.xxx.xxx đ
     * Author: NVC(20/07/2023)
     */
    formatSalary(Salary){
        return new Intl.NumberFormat("vn-VI", {
            style: "currency",
            currency: "VND",
          }).format(Salary);
    },

    /**
     * bắt sự kiện hiển thị ra toast message
     * @param {Boolean} isShowToast - true là hiện, false là ẩn
     * Author: NVC(20/07/2023)
     */
    setShowToast(isShow){
        this.isShowToast = isShow;
    },

    /**
     * bắt sự kiện hiển thị ra toast message success
     * @param {Boolean} toastSuccess - true là hiện, false là ẩn
     * Author: NVC(20/07/2023)
     */
    setToastSuccess(isShow){
        this.toastSuccess = isShow;
    },

    /**
     * bắt sự kiện hiển thị ra toast message error
     * @param {Boolean} toastError - true là hiện, false là ẩn
     * Author: NVC(20/07/2023)
     */
    setToastError(isShow){
        this.toastError = isShow;
    },

      /**
     * bắt sự kiện cập nhật message của toast 
     * @param {String} toastMessage - Toast 
     * Author: NVC(20/07/2023)
     */
    setToastMessage(message){
        this.toastMessage = message;
    }
  },
  data() {
    return {
      isShowLoading: false,
      employees: null,
      isShowDialog: false,
      employeeSelected: {},
      employeeSelectedId: null,
      status: 0,
      isShowToast: false,
      toastMessage: "",
      toastSuccess: false,
      toastError: false,
    };
  },
};
</script>
