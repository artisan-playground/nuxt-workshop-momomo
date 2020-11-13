<template>
  <div>
    <a-card hoverable class="card">
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[
              'userName',
              {
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              },
            ]"
            placeholder="Username"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              },
            ]"
            type="password"
            placeholder="Password"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: true,
              },
            ]"
          >
            Remember me
          </a-checkbox>
          <a class="login-form-forgot" href=""> Forgot password </a>
          <a-button type="primary" html-type="submit" class="login-form-button">
            <nuxt-link class="navbar-item" to="/view-list"> Log in </nuxt-link>
          </a-button>
          Don't have an account?
          <nuxt-link class="navbar-item" to="/register">
            Register now!
          </nuxt-link>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
import UserAPI from '~/api/user/user'
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  mounted() {
    this.getAllUser()
    console.log('Hello')
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    getAllUser() {
      this.$axios.$get('/user/findAllUser', {}).then((data) => {
        console.log('data:', data)
      })
    },
  },
}
</script>
<style>
.card {
  margin-top: 5%;
  margin-left: 30%;
  margin-right: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  width: 100%;
}
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 100%;
}
</style>
