require('./bootstrap');

require('moment');


// Midone Theme
// import "./assets/sass/app.scss";
import Vue from 'vue';

import { InertiaApp } from '@inertiajs/inertia-vue';
import { InertiaForm } from 'laravel-jetstream';
import PortalVue from 'portal-vue';
import { InertiaProgress } from '@inertiajs/progress'
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll();
InertiaProgress.init(
    {
        // The delay after which the progress bar will
        // appear during navigation, in milliseconds.
        delay: 250,
      
        // The color of the progress bar.
        color: '#fff',
      
        // Whether to include the default NProgress styles.
        includeCSS: true,
      
        // Whether the NProgress spinner will be shown.
        showSpinner: true,
      }
)
Vue.mixin({ methods: { route } });
Vue.use(InertiaApp);
Vue.use(InertiaForm);
Vue.use(PortalVue);



// const webpack = require("webpack");
// const path = require("path");
// const CKEditorWebpackPlugin = require("@ckeditor/ckeditor5-dev-webpack-plugin");
// const { styles } = require("@ckeditor/ckeditor5-dev-utils");



Vue.config.productionTip = false;

const app = document.getElementById('app');

new Vue({
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => require(`./Pages/${name}`).default,
            },
        }),
}).$mount(app);
