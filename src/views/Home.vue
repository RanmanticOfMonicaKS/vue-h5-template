<template>
  <div class="home">
      <h1>111</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    
  },
  created () {
    this.getdata()
  },
  methods: {
    getdata(){
      this.$http.get('/mock/01.json').then((res)=>{
        console.log(11)
      })
    }
  }
}
</script>
<style scoped>
.home {
  width: 1rem;
  height: 1rem;
  background-color: red;
  font-size: 32px;/*px*/
}
h1{
  font-size: 20px;
}
</style>

