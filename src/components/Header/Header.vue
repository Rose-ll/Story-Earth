<template>
  <div id="header_wrap">
    <span class="left_con" @click="changeColor" :class="{openColor:isOpenColor}">我的足迹</span>
    <div class="logins">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          个人中心
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改用户信息</el-dropdown-item>
          <el-dropdown-item>修改头像</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-upload
        class="avatar-uploader"
        action="#"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      </el-upload>
      <span class="right_con">{{loginname}}</span>
      <el-divider direction="vertical"></el-divider>
      <span class="tuichu" @click="logout" title="退出登录">退出</span>
    </div>
  </div>
</template>
<script>
import { Cookie } from "../cookie";
export default {
  data() {
    return {
      isOpenColor:false,
      imageUrl: "",
      loginname: "游客"
    };
  },
  methods: {
    changeColor(){
      this.isOpenColor = !this.isOpenColor;
    },
    logout() {
      Cookie.clearCookie();
      this.$router.push("/login");
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG && !isPNG) {
        this.$message.error("上传头像图片只能是 JPG和PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isPNG && isLt2M;
    }
  },
  mounted() {
    var userinfo = Cookie.getCookie();
    if (userinfo.name) {
      this.loginname = userinfo.name;
    }
  }
};
</script>
<style>

#header_wrap {
  width: 100%;
  height: 3.75rem;
  background: #03172e;
  border-bottom: 1px solid #fff;
  position: absolute;
  top: 0;
}
#header_wrap .left_con {
  color: #fff;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 3.75rem;
  margin-left: 1.875rem;
  float: left;
  cursor: pointer;
}
#header_wrap .openColor{
  color: orange !important;
}
#header_wrap .logins {
  float: right;
  line-height: 3.125rem;
  margin-right: 2.1875rem;
  cursor: pointer;
}
#header_wrap .right_con {
  color: #fff;
  margin-left: 0.4375rem;
  cursor: pointer;
}
#header_wrap .tuichu {
  color: #fff;
}
#header_wrap .avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  position: relative;
}
#header_wrap .avatar-uploader .el-upload {
  width: 40px;
  height: 40px;
  /*   border: 1px solid #fff; */
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  top: 0.5625rem;
  box-sizing: border-box;
  background: slategray;
}
#header_wrap .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

#header_wrap .avatar-uploader {
  display: inline-block;
  height: 60px;
}
#header_wrap .el-icon-plus {
  color: #fff;
  position: relative;
  top: -5px;
}

#header_wrap .right_con,
.el-divider,
.tuichu {
  position: relative;
  top: -0.3125rem;
}
#header_wrap .el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
#header_wrap .el-icon-arrow-down {
  font-size: 12px;
}
#header_wrap .el-dropdown{
  position: relative;
  top: -0.3125rem;
}
</style>