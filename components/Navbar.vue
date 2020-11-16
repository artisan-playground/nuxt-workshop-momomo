<template>
  <button class="navbar-item" @click="logout">Log Out</button>
</template>

<script>
  export default {
    methods: {
      logout() {
        this.$store.commit('/user/logout')
      }
    }
  }
</script>

<style>
.nav {
  margin-right: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: flex-end;
}
.space {
  margin-right: 8px;
}
</style>
