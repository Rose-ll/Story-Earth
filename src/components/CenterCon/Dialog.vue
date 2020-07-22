<template>
  <div id="left_dialog">
    <div class="one selected" v-if="curModule=='A'">
      <div class="header_index">
        <span>我的足迹</span>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="200"></el-table-column>
        <el-table-column prop="name" label="标题" width="200"></el-table-column>
      </el-table>
    </div>
    <div class="two" v-else-if="curModule=='B'">
      <div class="header_index">
        <span>我的故事</span>
      </div>
      <el-form :label-position="labelPosition" label-width="5rem" :model="formLabelAlign">
        <el-form-item label="标题">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <div class="block">
          <span class="date">时间</span>
          <el-date-picker
            v-model="formLabelAlign.selecteDate"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>
        <el-form-item label="内容">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      curModule: "B",
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        selecteDate:"",
        type: ""
      },
      pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
    };
  },
  methods: {
    initdialog() {
      /*   this.$axios({
          methods:"get",
          url:"http://127.0.0.1:8080/api/Story/QueryStory"
        }).then(data=>{}) */
      $.get("http://127.0.0.1:8080/api/Story/QueryStory", data => {
        this.tableData = data.data.data;
      });
    },
    initStory(){
      $.get("http://127.0.0.1:8080/api/Story/AddStory", data => {
        this.formLabelAlign=data
      });
    }
  },
  mounted() {
    this.initdialog();
    this.initStory();
  }
};
</script>
<style>
#left_dialog {
  border: none;
}
#left_dialog .header_index {
  height: 2.8125rem;
  line-height: 2.8125rem;
  margin-left: 2.5625rem;
  padding-top: 0.875rem;
}
#left_dialog .header_index > span {
  /* line-height: 45px; */
  font-size: 18px;
  font-weight: 600;
  color: #fff;
}
#left_dialog .el-table--border,
.el-table--group {
  border-radius: .3125rem;
  border-color: #28569f;
}
#left_dialog .el-table th {
  /* background: rgba(214, 222, 225, 1); */
  background: #03172e;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  border-right: 1px solid #00758c;
}

#left_dialog .el-table {
  border-left: 1px solid #00758c;
  border-top: 1px solid #00758c;
}
#left_dialog .el-table td {
  text-align: center;
  color: #fff;
  background: #03172e;
}
#left_dialog .el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid #00758c;
  border-right: 1px solid #00758c;
}
#left_dialog .el-table::before {
  width: 0;
  height: 0;
}
#left_dialog .el-table__body-wrapper .el-table__empty-block {
  background: #03172e;
  border-bottom: 1px solid #00758c;
  border-right: 1px solid #00758c;
}
#left_dialog .el-form .el-form-item__label {
  text-align: center;
  color: #fff;
}
#left_dialog .el-form .el-input .el-input__inner {
  background: transparent;
  border-bottom: 1px solid #00758c;
  color: #fff;
  border-left: none;
  border-top: none;
  border-right: none;
}
#left_dialog .block{
  margin-bottom: 1.25rem;
  color: #fff;
}
#left_dialog .block .date{
  font-size: 15px;
  padding-left: 1.3125rem;
}
#left_dialog .block .el-date-editor.el-input, .el-date-editor.el-input__inner{
  margin-left: 1.625rem;
  width: 16.8125rem;
}
/* #left_dialog .block .el-popper[x-placement^=bottom]{
  margin-left: .875rem;
}
#left_dialog .block .el-date-picker.has-sidebar{
  width: 23.9375rem;
}
#left_dialog .block .el-picker-panel [slot=sidebar], .el-picker-panel__sidebar{
  width: 4.1875rem;
}
#left_dialog .block .el-picker-panel [slot=sidebar]+.el-picker-panel__body, .el-picker-panel__sidebar+.el-picker-panel__body{
  margin-left: 4.125rem;
} */
</style>