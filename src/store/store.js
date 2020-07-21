import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)

const store= new Vuex.Store({
    state:{
        data:[]
    },
    getters:{

    },
    mutations:{
       
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
            let sum = parseInt(payload.amount*500000)
            if(payload.session=="Sáng" || payload.session=="Trưa"){
             var sum1 = sum- parseInt(sum*0.1)
            }
            if(payload.place=="Trong Nhà"){
            var sum2 = sum- parseInt(sum*0.1)
            }
            else {
                sum2=0
            }
            if(payload.amount>9){
                var sum3 = sum - parseInt(sum*0.3)
            }
            else {
                sum3=0
            }
            payload.totalPrice = sum1 + sum2 + sum3
            state.data.push(payload)
        
        }
    },
    actions:{
        order({commit},order){
            commit("order",order)
        },
        deleteItem({commit} , payload) {
            commit('deleteItem', payload);
        },edit({commit}, payload) {
            console.log(payload);
            commit('edit', payload);
        },
        save({commit},payload){
            commit('save',payload)
        }
    }
})

export default store