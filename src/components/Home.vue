<template>
  <dir class="home">
    <mmap></mmap>
    <hheader></hheader>
    <navmenu></navmenu>
    <xdialog mycontent="mydialog1" v-show="dialogVisible"></xdialog>
    <Profile></Profile>
  </dir>
</template>

<script>
import mmap from "./Map/Map";
import hheader from "./Header/Header";
import navmenu from "./CenterCon/NavMenu";
import xdialog from "./Base/XDialog"
import {Cookie} from './cookie';
import Profile from './Profile'
export default {
  data(){
    return{
      dialogVisible:false
    }
  },
  created(){
    var userinfo=Cookie.getCookie();
    if(!userinfo.userId){
      this.$router.push("/login");
    }
  },
  components: {
    mmap,
    hheader,
    navmenu,
    xdialog,
    Profile
  }
};
</script>
<style scoped>
.home{
  height: 100%;
}
</style>
