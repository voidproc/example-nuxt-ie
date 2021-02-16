<template>
  <div>
    {{ text }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    }
  },

  async mounted() {
    //Promiseとか使ってみる
    const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms));
    await sleep(1000);
    this.text = 'aaaaaaaaa';
  }
}
</script>

<style>
</style>
