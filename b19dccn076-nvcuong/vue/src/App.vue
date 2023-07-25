<template>
  <TheHeader></TheHeader>
    <div class="main">
      <TheNavbar></TheNavbar>
      <TheContent></TheContent>
    </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheNavbar from "./components/layout/TheNavbar.vue";
import TheContent from "./components/layout/TheContent.vue";
export default {
  name: 'App',
  components: {
    TheHeader,
    TheContent,
    TheNavbar,
  }
}
</script>

<style>
@import url("./style/main.css");
body {
  font-family: GoogleSands;
  font-size: 13px;
  margin: 0px;
}
</style>
