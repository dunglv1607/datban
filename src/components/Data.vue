<template>
   <div>
     <Header></Header>
      <table class="table">
    <thead>
      <tr>
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
      <tr v-for="(item, index) in dataItem" :key="index">
       
        <td>{{item.amount}}</td>
        <td>{{item.session}}</td>
        <td>{{item.place}}</td>
        <td>{{item.name}}</td>
        <td>{{item.gender}}</td>
        <td>{{item.date}}</td>
        <td>{{item.choose}}</td>
        <td>{{item.request}}</td>
        <td>{{item.source}}</td>
        <td>{{item.totalPrice}}</td>
        <td>
          <button
            @click="edit(item)"
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
            data-whatever="@mdo"
            data-backdrop="false"
          >Sửa</button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Sửa Thông Tin</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Số Người:</label>
                      <input
                        placeholder="Số người tham gia"
                        v-model="amount"
                        type="number"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Buổi:</label>
                      <input
                        placeholder="Sáng,Trưa,Tối"
                        v-model="session"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Nơi tổ chức:</label>
                      <input
                        placeholder="Trong Nhà or Ngoài Trời"
                        v-model="place"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Tên khách:</label>
                      <input
                        placeholder="Nguyễn Văn A"
                        v-model='name'
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Giới tính:</label>
                      <input
                        placeholder="Nam or Nữ"
                        v-model="gender"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Ngày:</label>
                      <input
                        v-model="date"
                        type="date"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Món:</label>
                      <input
                        placeholder="Lẩu Bò,Lẩu Gà..."
                        v-model="choose"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Yêu cầu:</label>
                      <input
                        placeholder="Yêu cầu của khách hàng"
                        v-model="request"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Qua:</label>
                      <input
                        v-model="source"
                        placeholder="Facebook,Zalo...."
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button @click="save(item)"  type="button" class="btn btn-primary" data-dismiss="modal">Save</button>
                </div>
              </div>
            </div>
          </div>
          <button type="button" class="btn btn-danger" @click="deleteItem(item)">xóa</button>
        </td>
      </tr>
    </tbody>
  </table>
   

  </div>
</template>


<script>
import axios from 'axios'
import Header from './header'
export default {
    components:{
      Header
    },
  data() {
    return {
    
      amount: "",
      name: "",
      session: "",
      place: "",
      gender: "",
      choose: "",
      date: "",
      request: "",
      source: ""
      
    };
  },
  computed:{
    dataItem(){ 
    return this.$store.state.data 
    },

  },
  methods: {
    edit(item) {
      this.$store.dispatch("edit",item._id)
    },

    save() {
      var id = this.$store.state.data.id
      var data = {
        id: id,
        place: this.place,
        amount: this.amount,
        name: this.name,
        session: this.session,
        gender: this.gender,
        choose: this.choose,
        request: this.request,
        date: this.date,
        source: this.source,
      }
      this.$store.dispatch("save", data);
    },

    deleteItem(item) {
      axios.delete("http://localhost:3001/order/"+item._id)
      .then(() => {
        alert("đã xóa")
        this.$store.dispatch("loadData")
      })
    },
  },
 
  created(){
  this.$store.dispatch("loadData")
  }

};
</script>

<style scoped>
.modal-backdrop{
    position:relative !important;
}
td{
    color:black
    }
th{
  color: red;
}
</style>