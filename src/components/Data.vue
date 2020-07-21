<template>
<table class="table">
  <thead>
    <tr>
      <th scope="col">STT</th>
      <th scope="col">Số Người</th>
      <th scope="col">Buổi</th>
      <th scope="col">Nơi Tổ Chức</th>
      <th scope="col">Tên Khách</th>
      <th scope="col">Giới Tính</th>
      <th scope="col">Ngày</th>
      <th scope="col">Món</th>
      <th scope="col">Yêu Cầu</th>
      <th scope="col">Qua</th>
      <th scope="col">Tổng Tiền</th>
      <th scope="col">hành động</th>
    </tr>
  </thead>
  <tbody v-if="demo" demo=true> 
    <tr v-for="(item, index) in data" :key="index">
      <th scope="row">{{item.id}}</th>
      <td>{{item.amount}}</td>
      <td>{{item.session}}</td>
      <td>{{item.place}}</td>
      <td>{{item.name}}</td>
      <td>{{item.sex}}</td>
      <td>{{item.date}}</td>
      <td>{{item.choose}}</td>
      <td>{{item.request}}</td>
      <td>{{item.source}}</td>
      <td>{{item.totalPrice}}</td>
      <td>
        <button type="button" class="btn btn-primary" @click="edit(item)">Sửa</button>
        <button type="button" class="btn btn-danger" @click="deleteItem(item)">xóa</button>
      </td>
    </tr>  
  </tbody>
  <tbody v-else demo=false> 
    <tr v-for="(item, index) in data" :key="index">
      <th scope="row">{{item.id}}</th>
      <td><input type="text" v-model="item.amount"></td>
      <td><input type="text" v-model="item.session"></td>
      <td><input type="text" v-model="item.place"></td>
      <td><input type="text" v-model="item.name"></td>
      <td><input type="text" v-model="item.sex"></td>
      <td><input type="date" v-model="item.date"></td>
      <td><input type="text" v-model="item.choose"></td>
      <td><input type="text" v-model="item.request"></td>
      <td><input type="text" v-model="item.source"></td>
      <td>{{item.totalPrice}}</td>
      <td>
        <button type="button" class="btn btn-primary" @click="save(item)">Save</button>
        <button type="button" class="btn btn-danger" @click="deleteItem(item)">xóa</button>
      </td>
    </tr>
  </tbody>
</table>
</template>
<script>
export default {
    data(){
        return{
            data:this.$store.state.data,
            demo:true,
            text:{
                amount:"",  
                name: "",
                session: "",
                selected: "",
                data_text: "",
                sex: "",
                choose: "",
                date: "",
                request: "",
                source: ""
            }
        }
        },
    methods: {
        edit() {
          this.demo=false
        },
        save(){
          this.$store.dispatch('save',this.text)
          this.demo=true
        },
        deleteItem(item) {
          this.$store.dispatch('deleteItem', item);
        }
    }
}

</script>