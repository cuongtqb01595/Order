import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'


Vue.use(Vuex)


const store= new Vuex.Store({
    state:{
        data:[]
    },
    mutations:{
        getAll(state,data){
            // console.dir( data);
            state.data=data;
        },
        setData(newData){
            this.state.data =  newData
        },
    //    edit(state,payload){
    //     //    state.demo.push(payload)

    //    },
        order(state,order){
            let sum = parseInt(order.amount*500000)
            if(order.session=="Sáng" || order.session=="Trưa"){
             var sum1 = sum- parseInt(sum*0.1)
            }
            if(order.place=="Trong Nhà"){
            var sum2 = sum- parseInt(sum*0.1)
            }
            else {
                sum2=0
            }
            if(order.amount>9){
                var sum3 = sum - parseInt(sum*0.3)
            }
            else {
                sum3=0
            }
            order.totalPrice = sum1 + sum2 + sum3
            state.data.push(order)

            
        },
        deleteItem(state, payload ) {
            state.data.splice(state.data.indexOf(payload), 1);
        },
        
        save(state, payload) {
            console.log(payload);
            var price = parseInt(payload.amount*500000)
            if(payload.session=="Sáng" || payload.session=="Trưa"){
             var price1 = price- parseInt(price*0.1)
            }
            if(payload.place=="Trong Nhà"){
            var price2 = price- parseInt(price*0.1)
            }
            else {
                price2=0
            }
            if(payload.amount>9){
                var price3 = price - parseInt(price*0.3)
            }
            else {
                price3=0
            }
            payload.totalPrice = price1 + price2 + price3
            state.data.push(payload)
        
        }
    },
    actions:{
        getAll({commit}){
            axios.get("http://localhost:3001/order")
            .then(response => {
                // console.log('action'+response.data);
               commit('getAll', response.data)
            })
            .catch(error => {
                console.log(error);
            })
        },
        setData({commit}, newData){
            commit("setData", newData)
        },
        order({commit},order){
            commit("order",order)
        },
        deleteItem({commit} , payload) {
            commit('deleteItem', payload);
        },
        // edit({commit}, payload) {
        //     console.log(payload);
        //     commit('edit', payload);
        // },
        save({commit},payload){
            commit('save',payload)
        }
    },
    getters:{
        datas: state => {return state.data},

        getDataById : state => id => {
            return state.data.find(item => item._id == id)
        }
    }
})

export default store