import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'



Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        data: []
    },

    getters: {
        datas: state => {return state.data}
    },

    mutations: {
        loadData(state, response) {
            state.data = response
        },
        changeLoadingState(state, loading) {
            state.loading = loading
        },

        order(state, order) {
            state.data.push(order)
        },
        edit(state,payload){
            state.data.id=payload
        }

    },
    actions: {
        order({ commit }, order) {
            let sum = parseInt(order.amount * 500000)
            if (order.session == "Sáng" || order.session == "Trưa") {
                var sum1 = sum - parseInt(sum * 0.1)
            }
            else {
                sum1 = parseInt(order.amount * 500000)
            }
            if (order.place == "Trong Nhà") {
                var sum2 = sum - parseInt(sum * 0.1)
            }
            else {
                sum2 = 0
            }
            if (order.amount > 9) {
                var sum3 = sum - parseInt(sum * 0.3)
            }
            else {
                sum3 = 0
            }
            order.totalPrice = sum1 + sum2 + sum3
            axios.post('http://localhost:3001/order', {
                amount: order.amount,
                session: order.session,
                place: order.place,
                name: order.name,
                gender: order.gender,
                date: order.date,
                choose: order.choose,
                request: order.request,
                source: order.source,
                totalPrice: order.totalPrice,
            }).then(function (response) {
                axios.get("http://localhost:3001/order")
                    .then(response => {
                        commit('loadData', response.data)
                    })
                console.log(response);
            })
                .catch(function (error) {
                    console.log(error);
                });
            commit("order", order)
        },


        loadData({ commit }) {
            axios.get("http://localhost:3001/order")
                .then(response => {
                    commit('loadData', response.data)
                    commit('changeLoadingState', false)
                    // console.log(response);

                })
                .catch(error => {
                    console.log(error);
                })
                

        },
        save({ commit }, payload) {
            var price = parseInt(payload.amount * 500000)
            if (payload.session == "Sáng" || payload.session == "Trưa") {
                var price1 = price - parseInt(price * 0.1)
            }
            if (payload.place == "Trong Nhà") {
                var price2 = price - parseInt(price * 0.1)
            }
            else {
                price2 = 0
            }
            if (payload.amount > 9) {
                var price3 = price - parseInt(price * 0.3)
            }
            else {
                price3 = 0
            }
            payload.totalPrice = price1 + price2 + price3;
            axios.put(`/order/${payload.id}`, {
                place: payload.place,
                amount: payload.amount,
                name: payload.name,
                session: payload.session,
                choose: payload.choose,
                gender: payload.gender,
                request: payload.request,
                date: payload.date,
                source: payload.source,
                totalPrice: payload.totalPrice
            }).then(() => {
                axios.get("http://localhost:3001/order")
                    .then(response => {
                        commit('loadData', response.data)
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }).catch(error => console.log(error))
        },
        edit( {commit }, payload){
            commit('edit', payload)
        }

    }
})

export default store