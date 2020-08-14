<template>


        <td>
          <button
            @click="edit(item)"
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
            data-whatever="@mdo"
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
                      <p>{{ item.name }} - {{ index }}</p>
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
          <button type="button" class="btn btn-danger" @click="deleteItem(item)">xóa</button>
        </td>

</template>
<script>

export default {
    props:["item","index"],
    data(){
        return{
            data:this.$store.state.data,
          
        }
    },
     methods: {
        edit(item) {
          console.log(item);
          this.$store.dispatch("edit",item.id)
        },
        save(item) {
          console.log(item);
          this.$store.dispatch("save", this.text);
        },
        deleteItem(item) {
          this.$store.dispatch("deleteItem", item);
        },
      },
}
</script>
