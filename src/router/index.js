import vue from "vue"
import router from "vue-router"
import Data from '../components/Data.vue'
import Order from '../components/Order.vue'
import Login from "../components/login.vue"
import OrderAdmin from "../components/OrderAdmin.vue"
import Not from "../components/404.vue"

vue.use(router)

export default new router({
    routes:[
        {
            path:"/data",
            name: "Data",
            component: Data
        },
        {
            path:"/order",
            name: "Order",
            component: Order
        },
        {
            path:"/",
            name: "Login",
            component: Login
        },
        {
            path:"/order-admin",
            name: "order-admin",
            component: OrderAdmin
        },
        {
            path:"/*",
            name: "not",
            component: Not
        },
    ],
    mode:"history"

})