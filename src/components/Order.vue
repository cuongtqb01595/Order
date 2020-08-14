<template>
  <div class="hello">
    <form>
      <div class="left">
        <!-- <p>{{data}}</p> -->
        <div class="form-group">
          <label for="exampleInputEmail1">Ten khách hàng</label>
          <input
            v-model="name"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Nguyễn Văn A"
          />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Số người</label>
          <input
            v-model="amount"
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Đặt trên 10 người được giảm giá 30%"
          />
        </div>

        <div>
          <label>Buổi:</label>
          <div class="form-check">
            <input
              v-model="session"
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="Sáng"
              checked
            />
            <label class="form-check-label" for="exampleRadios1">Sáng</label>
          </div>

          <div class="form-check">
            <input
              v-model="session"
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="Trưa"
            />
            <label class="form-check-label" for="exampleRadios2">Trưa</label>
          </div>

          <div class="form-check">
            <input
              v-model="session"
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios3"
              value="Tối"
            />
            <label class="form-check-label" for="exampleRadios2">Tối</label>
          </div>
        </div>

        <div>
          <label>Nơi tổ chức:</label>
          <select v-model="selected" class="form-control">
            <option
              v-for="option in options"
              :key="option.id"
              :data_text="option.text"
              :value="option.text">
            {{option.text}}
            </option>
          </select>
        </div>

        <div>
          <label>Giới tính:</label>
          <select v-model="gender" class="form-control">
            <option>Nam</option>
            <option>Nữ</option>
          </select>
        </div>

        <div>
          <br />
          <button type="button" class="btn btn-primary" @click="order">Đặt bàn</button>
          <button type="reset" class="btn btn-Danger">xóa</button>
        </div>
      </div>

      <div class="right">
        <div class="form-group">
          <label for="exampleInputEmail1">chọn món</label>
          <input
            v-model="choose"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Bạn muốn chọn món gì cho bữa ăn"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Date</label>
          <input v-model="date" type="date" class="form-control" id="exampleInputEmail1" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Yêu cầu của khách hàng</label>
          <textarea
            v-model="request"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Bạn có yêu cầu gì không?"
          ></textarea>
        </div>

        <div>
          <label>Bạn biết chúng tôi qua:</label>
          <select v-model="source" class="form-control">
            <option>Facebook</option>
            <option>Bạn bè</option>
          </select>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios"
export default {
  data() {
    return {
      data:this.$store.state.data,
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
      options: [
        { text: "Trong Nhà", value: "A" },
        { text: "Ngoài Trời", value: "B" }
      ]
      } 
  },
   
  methods: {
    order() {
      // if (this.name === '' || this.amount === '' || this.session === '') {
      //   alert("Insert information");
      // } else {
      var that = this
      let id = this.$store.state.data.length + 1;
      this.$store.dispatch("order", {
        id: id,
        name: this.name,
        amount: this.amount,
        session: this.session,
        place: this.selected,
        gender: this.gender,
        choose: this.choose,
        date: this.date,
        request: this.request,
        source: this.source
      });
      this.$router.push("/data")
      axios.post('http://localhost:3001/order', {
            amount:that.amount,
            session:that.session,
            place:that.place,
            name:that.name,
            gender:that.gender,
            date:that.date,
            choose:that.choose,
            request:that.request,
            source:that.source,
            totalPrice:that.totalPrice,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
      }
      
    },
  created(){
   
  }
  }
// };
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p {
  margin-left: 0px;
}
.hello {
  width: 100%;
  position: relative;
}
.right {
  display: inline-block;
  position: absolute;
  right: 8%;
  margin-left: 10%;
  text-align: left;
  margin-top: 0%;
  width: 40%;
}
.left {
  display: inline-block;
  position: absolute;

  width: 40%;
  margin-left: 0%;
  text-align: left;
  left: 8%;
}
</style>