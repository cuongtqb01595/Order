<template>
  <div>
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
     
      <tr v-for="(item, index) in dataItem" :key="index">
        <th scope="row">{{item.id}}</th>
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
            @click="btnEdit(item._id)"
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
            data-whatever="@mdo"
          >Sửa{{btnEdit(item._id).name}}</button>

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
                        v-model="item.amount"
                        type="number"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Buổi:</label>
                      <input
                        v-model="item.session"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Nơi tổ chức:</label>
                      <input
                        v-model="item.place"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Tên khách:</label>
                      <input
                        v-model="item.name"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Giới tính:</label>
                      <input
                        v-model="item.gender"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Ngày:</label>
                      <input
                        v-model="item.date"
                        type="date"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Món:</label>
                      <input
                        v-model="item.choose"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Yêu cầu:</label>
                      <input
                        v-model="item.request"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Qua:</label>
                      <input
                        v-model="item.source"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button @click="save(item)" type="button" class="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>
          <button type="button" class="btn btn-danger" @click="deleteItem(item._id)">xóa</button>
        </td>
      </tr>
    </tbody>
  </table>

  </div>
</template>
<script>
import axios from 'axios';
import {mapGetters} from 'vuex';

export default {
  data() {
    return {
      loading: true,
      data: this.$store.state.data,
      demo:this.$store.state.demo,
      text: {
        amount: "",
        name: "",
        session: "",
        selected: "",
        data_text: "",
        gender: "",
        choose: "",
        date: "",
        request: "",
        source: "",
      },
    };
  },

    computed: {
      dataItem () {
      //  console.log(this.data);
        return  this.$store.state.data;
      },
      
      ...mapGetters(['getDataById'])
    },

  methods: {

    btnEdit(item) {
     console.log(this.getDataById(item));
     return this.getDataById(item)
      // this.$store.dispatch("edit",item)
    },
    save(item) {
      console.log(item);
      this.$store.dispatch("save", this.text);
    },
    deleteItem(id) {
      axios.delete("http://localhost:3001/order/"+id)
      .then(() => {
        alert("đã xóa")
        this.$store.dispatch("getAll")
      })
    },
  },

  created(){
    this.$store.dispatch("getAll")
  }

};
</script>