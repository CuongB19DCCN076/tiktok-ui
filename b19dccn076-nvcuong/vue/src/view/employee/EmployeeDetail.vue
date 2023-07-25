<template lang="">
  <div class="dialog-add" v-bind:class="{ isShowDialog: isShow }">
    <div class="dialog-add-content">
      <div
        class="dialog-add-close m-dialog-icon-close"
        id="btn-Close-Add"
        @click="btnCloseEmployee"
      >
        <i class="fas fa-times fw-200"></i>
      </div>
      <div class="dialog-add-header" style="text-transform: uppercase">
        Thông tin nhân viên
      </div>
      <div class="dialog-add-main">
        <div class="add-content-left">
          <div class="add-content-left-image"></div>
          <div class="add-content-left-title">
            Vui lòng chọn ảnh có định dạng <br />.jpg, .jpeg, .png, .gif
          </div>
        </div>
        <div class="add-content-right">
          <div
            class="add-content-right-title"
            style="width: 100%; text-transform: uppercase"
          >
            A. Thông tin chung
          </div>
          <div style="width: 100%">
            <div
              style="
                width: 100px;
                height: 6px;
                margin: 2px 0px;
                background-color: rgb(16, 176, 101);
              "
            ></div>
          </div>
          <div class="add-content-item">
            <div class="item-title">
              Mã nhân viên(<span style="color: red">*</span>)
            </div>
            <input
              v-model="employee.EmployeeCode"
              id="txtId"
              ref="txtId"
              class="m-input m-input-icon-right"
              placeholder="Nhập mã nhân viên"
              @blur="validateInput"
              @click="deleteValidate"
            />
          </div>

          <div class="add-content-item">
            <div class="item-title">
              Họ và tên(<span style="color: red">*</span>)
            </div>
            <input
              v-model="employee.FullName"
              id="txtName"
              ref="txtName"
              class="m-input m-input-icon-right"
              placeholder="Nhập họ và tên"
              @blur="validateInput"
              @click="deleteValidate"
            />
          </div>
          <div class="add-content-item">
            <div class="item-title">Ngày sinh</div>
            <input
              v-model="employee.DateOfBirth"
              id="txtDayOfBirth"
              ref="txtDayOfBirth"
              class="m-input m-input-icon-right"
              placeholder="Nhập ngày sinh"
              type="date"
            />
          </div>
          <div class="add-content-item">
            <div class="item-title">Giới tính</div>
            <select
              name=""
              id="txtGender"
              class="m-input"
              v-model="employee.Gender"
            >
              <option value="0">Nam</option>
              <option value="1">Nữ</option>
            </select>
          </div>
          <div class="add-content-item">
            <div class="item-title">
              Số CMTND/Căn cước(<span style="color: red">*</span>)
            </div>
            <input
              v-model="employee.IdentityNumber"
              id="txtPassPort"
              ref="txtPassPort"
              class="m-input m-input-icon-right"
              placeholder="Nhập số cccd/cmnd"
              @blur="validateInput"
              @click="deleteValidate"
            />
          </div>
          <div class="add-content-item">
            <div class="item-title">Ngày cấp</div>
            <input
              v-model="employee.IdentityDate"
              id="txtDate"
              ref="txtDate"
              class="m-input m-input-icon-right"
              placeholder="Nhập ngày cấp"
              type="date"
            />
          </div>
          <div class="add-content-item">
            <div class="item-title">Nơi cấp</div>
            <input
              v-model="employee.IdentityPlace"
              id="txtIssued"
              class="m-input m-input-icon-right"
              placeholder="Nhập nơi cấp"
            />
          </div>
          <div class="add-content-item"></div>
          <div class="add-content-item">
            <div class="item-title">
              Email (<span style="color: red">*</span>)
            </div>
            <input
              v-model="employee.Email"
              id="txtEmail"
              ref="txtEmail"
              class="m-input m-input-icon-right"
              placeholder="Nhập email"
              @blur="validateInput"
              @click="deleteValidate"
            />
          </div>
          <div class="add-content-item">
            <div class="item-title">
              Số điện thoại(<span style="color: red">*</span>)
            </div>
            <input
              v-model="employee.PhoneNumber"
              id="txtPhone"
              ref="txtPhone"
              class="m-input m-input-icon-right"
              placeholder="Nhập sdt"
              @blur="validateInput"
              @click="deleteValidate"
            />
          </div>
          <div
            class="add-content-right-title"
            style="width: 100%; text-transform: uppercase"
          >
            B. Thông tin công việc
          </div>
          <div style="width: 100%">
            <div
              style="
                width: 100px;
                height: 6px;
                margin: 2px 0px;
                background-color: rgb(16, 176, 101);
              "
            ></div>
          </div>
          <div class="add-content-item">
            <div class="item-title">Vị trí</div>
            <select
              name=""
              id="txtPosition"
              class="m-input"
              v-model="employee.PositionId"
            >
              <option value="30d41e52-5e66-72bc-6c1c-b47866e0b131">
                Trưởng phòng
              </option>
              <option value="548dce5f-5f29-4617-725d-e2ec561b0f41">
                Quản trị hệ thống
              </option>
              <option value="589edf01-198a-4ff5-958e-fb52fd75a1d4">
                Nhân viên
              </option>
              <option value="5bd71cda-209f-2ade-54d1-35c781481818">
                Trưởng nhóm
              </option>
              <option value="68daa090-552d-1bc6-e8e4-8adc5263917a">
                Giám đốc
              </option>
            </select>
          </div>
          <div class="add-content-item">
            <div class="item-title">Phòng ban</div>
            <select
              name=""
              id="txtDapartment"
              class="m-input"
              v-model="employee.DepartmentId"
            >
              <option value="78aafe4a-67a7-2076-3bf3-eb0223d0a4f7">
                Phòng Nhân Sự
              </option>
              <option value="3f8e6896-4c7d-15f5-a018-75d8bd200d7c">
                Phòng Công Nghệ Thông Tin
              </option>
              <option value="45ac3d26-18f2-18a9-3031-644313fbb055">
                Phòng Hành Chính
              </option>
              <option value="7c4f14d8-66fb-14ae-198f-6354f958f4c0">
                Phòng Kế Toán
              </option>
            </select>
          </div>
          <div class="add-content-item">
            <div class="item-title">Mã số thuế cá nhân</div>
            <input
              v-model="employee.PersonalTaxCode"
              id="txtCode"
              class="m-input m-input-icon-right"
              placeholder="Nhập mã số thuế cá nhân"
            />
          </div>

          <div class="add-content-item">
            <div class="item-title">Mức lương cơ bản</div>
            <input
              v-model="employee.Salary"
              id="txtSalary"
              class="m-input m-input-icon-right"
              placeholder="Nhập mức lương cơ bản"
              @input="inputSalaryFormat"
            />
          </div>
          <div class="add-content-item">
            <div class="item-title">Ngày gia nhập công ty</div>
            <input
              v-model="employee.JoinDate"
              id="txtDayOfJoin"
              ref="txtDayOfJoin"
              class="m-input m-input-icon-right"
              placeholder="Nhập ngày gia nhập"
              type="date"
            />
          </div>
          <div class="add-content-item">
            <div class="item-title">Tình trạng công việc</div>
            <select
              name=""
              id="txtJobStatus"
              class="m-input"
              v-model="employee.WorkStatus"
            >
              <option value="1">Đang làm việc</option>
              <option value="0">Tạm nghỉ</option>
            </select>
          </div>
        </div>
      </div>
      <div class="m-dialog-footer">
        <div
          class="m-dialog-footer-left"
          id="btnClose"
          @click="btnOnClickDelete"
        >
          {{ messageClose }}
        </div>
        <div
          class="m-dialog-footer-right m-btn m-btn-icon m-btn-icon-add"
          id="btnSave"
          @click="btnOnClick"
        >
          Lưu
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: [
    "isShow",
    "showDialog",
    "employeeSelected",
    "employeeSelectedId",
    "status",
    "reload",
    "setShowToast",
    "setToastSuccess",
    "setToastError",
    "setToastMessage",
  ],
  watch: {
    /**
     * lấy dữ liệu mới nhất của nhân viên được chọn
     * Author: NVC(20/07/2023)
     */
    employeeSelectedId: function (value) {
      const me = this;
      if (value) {
        // Thực hiện lấy dữ liệu từ API
        axios
          .get(`https://cukcuk.manhnv.net/api/v1/Employees/${value}`)
          .then(function (res) {
            switch (res.status) {
              case 200:
                me.employee = res.data;
                break;
              case 201:
                break;
              default:
                break;
            }
          })
          .catch(function (res) {
            console.log(res.status);
          });
      } else {
        this.getNewEmployeeCode();
      }
    },
    /**
     * set employee
     * Author: NVC(20/07/2023)
     */
    employeeSelected: function (value) {
      this.employee = value;
    },

    /**
     * thay đổi trạng thai và text của button Xóa()
     * @param {Number} status - 0 là đóng, 1 là xóa
     * Author: NVC(20/07/2023)
     */
    status: function (value) {
      const me = this;
      if (value == 0) {
        me.messageClose = "Đóng";
      } else {
        me.messageClose = "Xóa";
      }
    },
  },
  methods: {
    /**
     * chuẩn hóa ngày hiển thị ra form
     * Author: NVC(20/07/2023)
     */
    formatDate(date) {
      const now = new Date(date);
      let day = ("0" + now.getDate()).slice(-2);
      let month = ("0" + (now.getMonth() + 1)).slice(-2);
      let today = now.getFullYear() + "-" + month + "-" + day;
      return today;
    },

    /**
     * định dạng dữ liệu không được để trống
     * Author: NVC(20/07/2023)
     */
    validateInput() {
      if (event.currentTarget.value == "") {
        event.currentTarget.classList.add("m-input-error");
        event.currentTarget.setAttribute(
          "title",
          "Thông tin này không được phép để trống"
        );
      }
    },

    /**
     * xóa class lỗi
     * Author: NVC(20/07/2023)
     */
    deleteValidate() {
      event.currentTarget.classList.remove("m-input-error");
      event.currentTarget.removeAttribute("title");
    },

    /**
     * kiểm các input bắt buộc khi bấm luuw
     * Author: NVC(20/07/2023)
     */
    validateData() {
      let isValid = true;
      const me = this;
      if (!me.employee.EmployeeCode) {
        isValid = false;
        me.$refs["txtId"].classList.add("m-input-error");
        me.$refs["txtId"].setAttribute(
          "title",
          "Thông tin này không được phép để trống"
        );
      }
      if (!me.employee.FullName) {
        isValid = false;
        me.$refs["txtName"].classList.add("m-input-error");
        me.$refs["txtName"].setAttribute(
          "title",
          "Thông tin này không được phép để trống"
        );
      }
      if (!me.employee.Email) {
        isValid = false;
        me.$refs["txtEmail"].classList.add("m-input-error");
        me.$refs["txtEmail"].setAttribute(
          "title",
          "Thông tin này không được phép để trống"
        );
      }
      if (!me.employee.PhoneNumber) {
        isValid = false;
        me.$refs["txtPhone"].classList.add("m-input-error");
        me.$refs["txtPhone"].setAttribute(
          "title",
          "Thông tin này không được phép để trống"
        );
      }
      if (!me.employee.IdentityNumber) {
        isValid = false;
        me.$refs["txtPassPort"].classList.add("m-input-error");
        me.$refs["txtPassPort"].setAttribute(
          "title",
          "Thông tin này không được phép để trống"
        );
      }
      if (me.employee.DateOfBirth) {
        let temp = me.employee.DateOfBirth;
        temp = new Date(temp);
        if (temp > new Date()) {
          isValid = false;
          me.showToast(
            true,
            "setToastError",
            true,
            "Không được lớn hơn ngày hiện tại",
            3000
          );
        }
      }
      return isValid;
    },

    /**
     * reset lại các input khi bấm đóng
     * Author: NVC(20/07/2023)
     */
    deleteValidateData() {
      this.$refs["txtName"].classList.remove("m-input-error");
      this.$refs["txtName"].removeAttribute("title");
      this.$refs["txtEmail"].classList.remove("m-input-error");
      this.$refs["txtEmail"].removeAttribute("title");
      this.$refs["txtId"].classList.remove("m-input-error");
      this.$refs["txtId"].removeAttribute("title");
      this.$refs["txtPassPort"].classList.remove("m-input-error");
      this.$refs["txtPassPort"].removeAttribute("title");
      this.$refs["txtPhone"].classList.remove("m-input-error");
      this.$refs["txtPhone"].removeAttribute("title");
    },

    /**
     * chuẩn hóa salary
     * Author: NVC(20/07/2023)
     */
    inputSalaryFormat() {
      let value = event.currentTarget.value;

      //lấy ra value của input (mức lương)
      //thực hiện định dạng dữ liệu
      if (value) {
        value = value.replaceAll(".", "");
        value = new Intl.NumberFormat().format(value);

        //set lại giá trị hiển thị trên input
        event.currentTarget.value = value;
      }
      console.log(value);
      // console.log(this.employee.Salary.replaceAll(".", ""));
    },

    /**
     * xử lý khi bấm đóng
     * Author: NVC(20/07/2023)
     */
    btnCloseEmployee() {
      this.deleteValidateData();
      this.$emit("showDialog", false);
    },

    /**
     * xử lý khi bấm lưu
     * Author: NVC(20/07/2023)
     */
    btnOnClick() {
      const me = this;
      const isValid = me.validateData();
      if (!isValid) {
        return;
      }
      //1. validate dữ liệu
      //2. build object thông tin nhân viên
      // 2.1: kiểm tra lại dữ liệu về lương-> chuyển thành dạng số
      if (me.employee.Salary) {
        let salary = String(me.employee.Salary);
        salary = salary.replaceAll(".", "");
        me.employee.Salary = Number(salary);
      }
      //3. gọi api thực hiện thêm mới
      //3.1. Kiểm tra trạng thái của form
      if (this.status == 0) {
        axios
          .post("https://cukcuk.manhnv.net/api/v1/Employees/", me.employee)
          .then(function () {
            me.showToast(
              true,
              "setToastSuccess",
              true,
              "Thêm mới thành công",
              3000
            );
            me.$emit("showDialog", false);
            me.$emit("reload");
          })
          .catch((err) => {
            let response = err.response;
            let userMsg = "";
            userMsg = response.data["userMsg"];
            switch (response.status) {
              case 400:
                me.showToast(true, "setToastError", true, userMsg, 3000);
                break;
              case 500:
                me.showToast(true, "setToastError", true, userMsg, 3000);
                break;
              default:
                break;
            }
          });
      } else {
        axios
          .put(
            `https://cukcuk.manhnv.net/api/v1/Employees/${me.employeeSelectedId}`,
            me.employee
          )
          .then(function () {
            me.$emit("showDialog", false);
            me.showToast(true, "setToastSuccess", true, "Sửa thành công", 3000);
            me.$emit("reload");
            //load lại dữ liệu ở màn hình chi tiết
          })
          .catch(function () {
            me.showToast(
              true,
              "setToastError",
              true,
              "Sửa không thành công",
              3000
            );
          });
      }
      //4. hiển thị thông báo thêm mới thành công
      //nếu có lỗi thì validate hoặc lỗi từ server trả về
    },

    /**
     * xử lý khi xóa
     * Author: NVC(20/07/2023)
     */
    btnOnClickDelete() {
      const me = this;
      me.deleteValidateData();
      if (me.status == 1) {
        axios
          .delete(
            `https://cukcuk.manhnv.net/api/v1/Employees/${me.employeeSelectedId}`
          )
          .then(function (response) {
            console.log(response);
            me.$emit("showDialog", false);
            me.showToast(true, "setToastSuccess", true, "Xóa thành công", 3000);
            me.$emit("reload");
            //load lại dữ liệu ở màn hình chi tiết
          })
          .catch(function () {
            me.showToast(
              true,
              "setToastError",
              true,
              "Xóa không thành công",
              3000
            );
          });
      } else {
        me.$emit("showDialog", false);
      }
    },

    /**
     * xử lý toast message
     * Author: NVC(20/07/2023)
     */
    showToast(isShow, toast, isToast, message, time) {
      this.$emit(toast, isToast);
      this.$emit("setToastMessage", message);
      this.$emit("setShowToast", isShow);
      setTimeout(() => {
        this.$emit(toast, !isToast);
        this.$emit("setShowToast", false);
      }, time);
    },
  },
  data() {
    return {
      employee: {},
    };
  },
};
</script>
