import vue from "vue"
import router from "vue-router"
import Data from '../components/Data.vue'
import Order from '../components/Order.vue'
import Edit from '../components/edit.vue'

vue.use(router)

export default new router({
    routes:[
        {
            path:"/",
            name: "Data",
            component: Data
        },
        {
            path:"/order",
            name: "Order",
            component: Order
        },
        {
            path:"/edit/:id",
            name: "edit",
            component: Edit
        }
    ],
    mode:"history"

})