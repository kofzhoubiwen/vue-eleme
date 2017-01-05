<template>
  <div>
    <h1 class="animated infinite bounce">Example</h1>
    <button @click="showHello">
      Toggle
    </button>
    <transition name="fade" v-on:before-enter="beforeEnter">
      <p v-if="show">hello</p>
    </transition>
    <div v-if="show" class="ball"></div>

    <br><br>
    <h1 class="" ref="e2" @click="e2">Example 2</h1>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        show: true
      };
    },
    methods: {
      showHello() {
        this.show = !this.show;
      },
      beforeEnter(el) {
        console.log(el);
        console.log('ballBeforeEnter');
      },
      e2(){
        Velocity(this.$refs.e2, { opacity: 1, fontSize: '1.4em' }, { duration: 300 });
      }
    }
  }
  ;
</script>
<style lang="stylus" rel="stylesheet/stylus">

  .fade-enter-active, .fade-leave-active
    transition: opacity .5s

  .fade-enter, .fade-leave-active
    opacity: 0

  .ball
    display: block
    position: fixed
    top: 32px
    left: 22px
    width: 36px
    height: 36px
    z-index: 500
    border-radius: 50%
    background: orangered


</style>

