import Vue from 'vue'
import VueRouter from 'router'
import Index from './views/Index.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import Headerbar from './components/Headerbar.vue'
Vue.use(VueRouter)
Vue.component('headerbar', Headerbar)
const router = new VueRouter({
    routes: [{
        path: '/',
        component: Index,
        children: [
            { path: 'login', component: Login },
            { path: 'signup', component: Signup }
        ]
    }]
})

const vm = new Vue({
    router: router
}).$mount('#index')
