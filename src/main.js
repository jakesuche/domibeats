

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueTouch from 'vue-touch';
import Trend from 'vuetrend';
import Toasted from 'vue-toasted';
import VueApexCharts from 'vue-apexcharts';
import Vuesax from 'vuesax'
import '@/assets/css/give-raffle-variable.css'
import Fuse from 'fuse.js'
import '@/assets/css/global.css'
// import 'vuesax/dist/vuesax.css' //Vuesax styles
import moment from 'moment'
import AOS from 'aos'
import 'aos/dist/aos.css'





// make sure we can use it in our components


Vue.prototype.$search = function (term, list, options) {
  return new Promise(function (resolve, reject) {
    var run = new Fuse(list, options)
    var results = run.search(term)
    resolve(results)
  })
}




Vue.filter('fromNow', function(date, formatType = "LL"){
  if (!date) return "";
  return moment(date).fromNow();
})

Vue.filter('formatDate', function(value, formatType = "LL"){
  if (!value) return "";
  return moment(value).format((formatType = "ll"));
})

Vue.filter('formatWord', function(word){
  
    const string = word.replace('_','-').split("-").join(" ");
    return string.charAt(0).toUpperCase() + string.slice(1);
  
})

import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

Vue.use(VueQuillEditor, /* { default global options } */)
Vue.filter("formatMoney", function(x){
  
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
})
Vue.use(Vuesax)
Vue.mixin({
  methods:{
    checkTransaction(type) {
      let conditionCheck = ["debit", "purchase", "Withdrawal"];
      const test = conditionCheck.some((el) => type.includes(el));
      return test;
    },
  }
})



// import 'vuesax/dist/vuesax.css'

import store from './store';
import router from './Routes';
import App from './App';
import layoutMixin from './mixins/layout';

import VueSweetalert2 from 'vue-sweetalert2';


// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
import { MonthPicker } from 'vue-month-picker'
import { MonthPickerInput } from 'vue-month-picker'

// import VueFusionCharts from 'vue-fusioncharts';
// import FusionCharts from 'fusioncharts';
// import Charts from 'fusioncharts/fusioncharts.charts';

// //import the theme
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

// // register VueFusionCharts component
// Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme)

Vue.use(MonthPicker)
Vue.use(MonthPickerInput)

Vue.use(VueSweetalert2);

Vue.use(BootstrapVue);

Vue.use(Trend);


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg',
  },
});
import VTagList from 'v-tag-list'
Vue.component('VTagList', VTagList)

// Vue.use(VueApexCharts)
// Vue.component('apexchart', VueApexCharts);

Vue.mixin(layoutMixin);

Vue.use(Toasted, {duration: 10000});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  mounted() {
    AOS.init({
      once: false,
    })
  },
  router,
  render: h => h(App),
});
