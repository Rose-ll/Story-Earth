<template>
  <div id="nav_menu">
    <div class="icon">
      <i class="el-icon-star-off" title="足迹" @click="dialogVisible"></i>
      <i class="el-icon-cherry" title="故事"></i>
      <i class="el-icon-apple"></i>
      <i class="el-icon-burger"></i>
    </div>
    
  </div>
</template>
<script>

export default {
  data() {
    return {
        
    };
  },
  methods: {
      dialogVisible(){
          this.$parent.dialogVisible=!this.$parent.dialogVisible;
      },
  }
};
</script>
<style>
#nav_menu {
  height: 10rem;
  width: 3.75rem;
  /* background: #03172e; */
  position: absolute;
  right: 1rem;
  top: 38%;
}
#nav_menu .icon i {
  width: 3.75rem;
  height: 2.5rem;
  line-height: 2.5rem;
  color: #fff;
  display: block;
  text-align: center;
  cursor: pointer;
}

</style>