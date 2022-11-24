import Vue from 'vue';
// import VueI18n from 'vue-i18n';
// import Meta from 'vue-meta';
// import VueScreen from 'vue-screen';
// import PortalVue from 'portal-vue';
// import Fragment from 'vue-fragment';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
// Vue.use(VueI18n as any);
// Vue.use(Meta);
// Vue.use(PortalVue);
// Vue.use(VueScreen as any, {
//     lg: 1440,
//     md: 1024,
//     sm: 768,
//     width_472: 472,
//     tablet: (screen: { md: any; lg: any }) => screen.md && !screen.lg,
//     mobile: (screen: { md: any; lg: any }) => !screen.md && !screen.lg,
// });
// Vue.use(Fragment.Plugin);
new Vue({
    el: '#app',
    router,
    render: (h: any) => h(App)
} as any).$mount('#app');
