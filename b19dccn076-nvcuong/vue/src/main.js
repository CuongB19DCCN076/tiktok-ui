import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from "vue-router";
import EmployeeList from "./view/employee/EmployeeList.vue";
import ReportPage from "./view/report/ReportPage.vue";

const routes = [
  //   { path: "/", component: Home },
  { path: "/employee", component: EmployeeList },
  { path: "/report", component: ReportPage },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

createApp(App).use(router).mount('#app')
