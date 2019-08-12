
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var car = JSON.parse(localStorage.getItem('car') || '[]')
const store=new Vuex.Store({
    state:{
        car:car
    },
    mutations:{
        addtocar(state,goodsinfo){
            // 点击加入购物车把商品信息保存到store中的car上面
            var flag=false
            state.car.some(item=>{
                if(item.id==goodsinfo.id){
                    item.count+=parseInt(goodsinfo.count)
                    flag=true
                    return true
                }
            })
            if(!flag){
                state.car.push(goodsinfo)
            }
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updatedgoods(state,goodsinfo) {
            state.car.some(item=>{
                if(item.id==goodsinfo.id){

                    item.count=parseInt(goodsinfo.count)
                    return true;
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        romovefromcar(state,id){
            state.car.some((item,i)=>{
                if(item.id==id){
                    state.car.splice(i,1)
                    return true;
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updategoodsselect(state,info){
            state.car.some(item=>{
                if(item.id==info.id){
                    item.selected=info.selected
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        
    },
    getters:{
        getallcount(state){
            var c=0
            state.car.forEach(item=>{
                c+=item.count
            })
            return c
        },
        getgoodscount(state){
            var o={}
            state.car.forEach(item=>{
                o[item.id]=item.count
            })
            return o
        },
        getgoodsselect(state){
            var o={}
            state.car.forEach(item=>{
                o[item.id]=item.selected
            })
            return o
        },
        getgoodscontandamount(state){
            var a={
                count:0,
                amount:0
            }
            state.car.forEach(item=>{
                if(item.selected){
                    a.count+=item.count
                    a.amount+=item.pirce*item.count
                }
            })
            return a;
        }
    },
    actions:{

    },
    modules:{

    }

})
export default store;