<template>
  <div>
    <h1>Hello</h1>
    <h3>
      {{ data }}
    </h3>
  </div>
</template>

<script>
export default {
  mounted() {
    this.calculate()
  },
  props: {
    data: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    calculate() {
      let result = this.data * 2
      this.$emit('result', result)
    },
  },
}
</script>

<style></style>
