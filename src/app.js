import Vue from 'vue'
import VueRouter from 'router'
import Index from './views/Index.vue'
import Signup from './views/Signup.vue'
import Signin from './views/Signin.vue'
import Headerbar from './components/Headerbar.vue'

Vue.use(VueRouter)

Vue.component('headerbar', Headerbar)
const router = new VueRouter({
    routes: [{
        path: '/',
        component: Index
    }, {
        path: '/signin',
        component: Signin
    }, {
       path: '/signup',
        component: Signup
    }]
})

const vm = new Vue({
    router: router
}).$mount('#index')
