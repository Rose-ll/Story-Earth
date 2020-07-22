<template>
<!-- 公共组件 -->
  <div id="x-dialog-wrap">
    <img src="../../assets/shuxian.png" height="100%" style="position:absolute;right:0" />
    <img src="../../assets/bdli.png" width="100%" style="position:absolute;left:0;bottom:0" />
    <div class="x-dialog-header">
      <i class="el-icon-close" v-if="closeBtn" @click="closeDialog" title="关闭"></i>
    </div>
    <div class="x-dialog-content">
      <component :is="mycontent" :ref="mycontent"></component>
    </div>
  </div>
</template>

<script>
import mydialog1 from "../CenterCon/Dialog";
import mydialog2 from "../CenterCon/Dialog";

export default {
  data() {
    return {
        mycontent:"mydialog1"
    };
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    closeBtn: {
      type: Boolean,
      default: true
    },
    content: {
      type: String,
      default: ""
    }
  },
  components: {
    mydialog1
  },
  methods: {
    closeDialog() {
      this.$parent.dialogVisible=false;
    }
  }
};
</script>

<style scoped>
#x-dialog-wrap {
  background: url(../../assets/project.png);
  background-color: transparent;
  padding: 20px;
  position: absolute;
  left: 10px;
  top: 80px;
  min-width: 350px;
  min-height: 200px;
  display: inline-block;
  color: oldlace;
}
#x-dialog-wrap .x-dialog-header {
  float: right;
  margin-top: 15px;
  cursor: pointer;
}
</style>