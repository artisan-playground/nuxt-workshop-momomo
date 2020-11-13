export default {
  UserList: () => {
    return this.$axios.$get('/user/findAllUser', {})
  },
}
