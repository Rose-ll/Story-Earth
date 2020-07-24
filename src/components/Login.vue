<template>
  <div id="LoginBody">
    <div class="bodyBox">
      <el-form class="rightBox" ref="ruleForm" status-icon :model="ruleForm" :rules="rules">
        <p>
          <!-- <img src="../Assets/login/user1.png" style="width:1.5rem;height:1.5rem" /> -->
          <span class="itemText">账号</span>
        </p>
        <el-form-item prop="userName">
          <el-input placeholder="请输入账号" class="loginInput" v-model="ruleForm.userName" clearable></el-input>
        </el-form-item>
        <p>
          <!-- <img
            src="../Assets/login/password1.png"
            style="width:1.5rem;height:1.66rem;position:relative;top:0.1875rem"
          />-->
          <span class="itemText">密码</span>
        </p>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            class="loginInput"
            v-model="ruleForm.password"
            @keyup.enter="submitForm('ruleForm')"
            show-password
          ></el-input>
        </el-form-item>
        <el-checkbox v-model="checked">记住密码</el-checkbox>
        <span class="forget" @click="forgetPassWnd">忘记密码？</span>
        <p class="centerText loginBtn" @click="submitForm('ruleForm')">登 录</p>
      </el-form>
    </div>
  </div>
</template>
<script>
import { Cookie } from "./cookie";

export default {
  data() {
    return {
      checked: true,
      ruleForm: {
        userName: "",
        password: ""
      },
      rules: {
        userName: [
          {
            message: "请输入您的账号！",
            trigger: "blur"
          }
        ],
        password: [
          {
            message: "输入您的密码！",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      var name = this.ruleForm.userName;
      var pass = this.ruleForm.password;
      const _this = this;
      if (name == "" || name == null) {
        alert("请输入正确的用户名");
        return;
      } else if (pass == "" || pass == null) {
        alert("请输入正确的密码");
        return;
      }
      
      //接口
      let params = {
        username: _this.ruleForm.userName,
        password: _this.ruleForm.password
      };
      _this.$axios({
          methods: "get",
          url: Configuration.BackstageServer + "api/Login/Login",
          params: params
        })
        .then(res => {
          if (res.data.success && res.data.data != null) {
            _this.$message.success("登陆成功！");
            _this.$router.push({ path: "/" });
            //判断复选框是否被勾选 勾选则调用配置cookie方法
            Cookie.setCookie(res.data.data.id, res.data.data.name, 1);
          } else {
            alert("用户名或密码错误,请重新输入");
            _this.ruleForm.userName = "";
            _this.ruleForm.password = "";
          }
        });
    },
    forgetPassWnd() {
      Cookie.clearCookie();
    }
  }
};
</script>
<style>
#LoginBody {
  width: 100%;
  height: 100%;
  background-image: url("../assets/timg.jpg");
  background-size: 100% 100%;
}

#LoginBody .bodyBox {
  width: 22.11%;
  background-color: rgba(175, 179, 202, 0.5);
  position: absolute;
  height: 46%;
  margin: 14% 39%;
  border-radius: 1.4375rem;
}

#LoginBody .bodyBox .rightBox .el-input .el-input__inner {
  background: none;
  color: black;
  border: none;
}

#LoginBody .el-form-item__content {
  font-size: 1.25rem;
}

#LoginBody .el-form-item .el-input .el-input__validateIcon {
  display: none;
}

#LoginBody .bodyBox .rightBox {
  background-color: transparent;
  width: 87.7%;
  float: right;
  height: 88.5%;
  font-size: 1.5rem;
  padding: 1.625rem;
}

@media screen and (max-width: 1680px) {
  .rightBox {
    font-size: 21px !important;
  }
}

@media screen and (max-width: 1440px) {
  .rightBox {
    font-size: 18px !important;
  }
}

@media screen and (max-width: 1366px) {
  .rightBox {
    font-size: 17.075px !important;
  }
}

#LoginBody .bodyBox .rightBox .centerText {
  text-align: center;
}

#LoginBody .bodyBox .rightBox .itemText {
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
  position: relative;
  top: -0.1875rem;
}
#LoginBody .bodyBox input:-internal-autofill-previewed,
input:-internal-autofill-selected {
  /*  -webkit-text-fill-color: #ffffff !important; */
  transition: background-color 5000s ease-in-out 0s !important;
}
#LoginBody .bodyBox .rightBox .el-input .el-input__clear {
  font-size: 1.3125rem;
  color: #999;
}
#LoginBody .bodyBox .rightBox .el-input .el-input__clear:hover {
  color: #fff;
}

#LoginBody .bodyBox .rightBox .loginInput {
  background: transparent;
  border-bottom: 1px solid #fff;
  width: 100%;
  /* color: #fff; */
  font-size: 15px;
  padding-bottom: 0.5rem;
}

#LoginBody .bodyBox .rightBox .remberPass {
  font-size: 0.5em;
  color: #999999;
}
#LoginBody .forget {
  cursor: pointer;
  color: #f19149;
  font-size: 0.75rem;
  margin-top: 0.5625rem;
  float: right;
}

#LoginBody .bodyBox .rightBox .ivu-checkbox-inner {
  background: transparent;
  margin-right: 0.375rem;
}

#LoginBody .bodyBox .rightBox .loginBtn {
  background: #00deff;
  border-radius: 3px;
  color: #fff;
  padding: 0.4em;
  line-height: 1;
  cursor: pointer;
  font-size: 0.9167em;
  margin-top: 4.1875rem;
}

#LoginBody .bodyBox .rightBox .loginBtn:active {
  background: #00ccea;
}
</style>