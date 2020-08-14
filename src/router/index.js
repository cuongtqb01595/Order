import vue from "vue"
import router from "vue-router"
import Data from '../components/Data.vue'
import Order from '../components/Order.vue'

vue.use(router)

export default new router({
    routes:[
        {
            path:"/data",
            name: "Data",
            component: Data
        },
        {
            path:"/",
            name: "Order",
            component: Order
        },
    ],
    mode:"history"

})