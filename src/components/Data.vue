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
    <tbody>
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
          <button type="button" class="btn btn-danger" @click="deleteItem(item)">xóa</button>
        </td>
              
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data() {
    return {
      data: this.$store.state.data,
      text: {
        amount: "",
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
    };
  },
  methods: {
    edit(item) {
      console.log(item.id);
    },
    save(item) {
      console.log(item);
      this.$store.dispatch("save", this.text);
    },
    deleteItem(item) {
      this.$store.dispatch("deleteItem", item);
    }
  }
};
</script>