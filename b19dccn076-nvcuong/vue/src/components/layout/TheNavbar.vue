<template lang="">
    <div class="navbar">
        <router-link class="menu-item" to="/employee">
          <div class="menu-icon menu-icon-dashboard"></div>
          <div class="menu-text">Tổng quan</div>
        </router-link>
        <router-link class="menu-item" to="/report">
          <div class="menu-icon menu-icon-report"></div>
          <div class="menu-text">Báo cáo</div>
        </router-link>
        <div class="menu-item">
          <div class="menu-icon menu-icon-dashboard"></div>
          <div class="menu-text">Mua hàng</div>
        </div>
        <div class="menu-item">
          <div class="menu-icon menu-icon-employee"></div>
          <div class="menu-text">Danh mục nhân viên</div>
        </div>
        <div class="menu-item">
          <div class="menu-icon menu-icon-setting"></div>
          <div class="menu-text">Thiết lập hệ thống</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>