import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from "./gateway/backendapi";
// import axios from "axios";
import Highcharts from 'highcharts';
import VueHighcharts from 'vue-highcharts';
import PrimeVue from 'primevue/config';
import Toast from 'primevue/toast'
import Skeleton from 'primevue/skeleton';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import ConfirmDialog from 'primevue/confirmdialog';
import OverlayPanel from 'primevue/overlaypanel';
import SplitButton from 'primevue/splitbutton';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';
import Editor from 'primevue/editor';
import SelectButton from 'primevue/selectbutton';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import Toaster from '@meforma/vue-toaster';
import swal from "sweetalert";


import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                          //icons

axios.interceptors.request.use((config) => {
    if (typeof window === 'undefined') return config;
    const token =  localStorage.getItem('token');
    const checkinToken =  localStorage.getItem('checkinToken');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (checkinToken) {
      config.headers.Authorization = `Bearer ${checkinToken}`;
    }
    // config.headers.Authorization = `Bearer ${process.env.VUE_APP_PAYSTACK_SECRET_KEY}`
    /*eslint no-undef: "warn"*/
    // NProgress.start()
    return config;
  })

  window.axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
  console.log(error,'Opvhnabhfvnfhfngcf')
    if (401 === error.response.status) {
        swal({
            title: "Session Expired",
            text: "Your session has expired. Would you like to be redirected to the login page?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes",
            closeOnConfirm: false
        }, function(){
            window.location = '/';
        });
    } else {
        return Promise.reject(error);
    }
});

  const app = createApp(App);

 app.use(store).use(router).use().use(Toaster).use(PrimeVue).use(ToastService).use(ConfirmationService).use(VueHighcharts, { Highcharts }).mount('#app')

app.component("Toast", Toast);
app.component("Skeleton", Skeleton);
app.component("Dialog", Dialog);
app.component("Button", Button);
app.component("OverlayPanel", OverlayPanel);
app.component("SelectButton", SelectButton);
app.component("ConfirmDialog", ConfirmDialog);
app.component("SplitButton", SplitButton);
app.component("Checkbox", Checkbox);
app.component("Tag", Tag);
app.component("Editor", Editor);
