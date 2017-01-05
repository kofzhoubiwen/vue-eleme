<template>
  <div class="cartcontrol">
    <div class="cart-decrease icon-remove_circle_outline animated fadeInRight" v-show="food.count>0"
         @click="removeCart($event)"></div>
    <div class="cart-count animated pulse" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-increase icon-add_circle" @click="addCart($event)"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue';

  export default{

    props: {
      food: {
        type: Object,
        default(){
          return [];
        }
      }
    },
    methods: {
      addCart(event){
        if (!event._constructed) {
          return;
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
          this.food.count = 1;
        } else {
          this.food.count++;
        }
        this.$emit('cartAdd', event.target);
      },
      removeCart(event){
        if (!event._constructed) {
          return;
        }
        if (this.food.count && this.food.count > 0) {
          this.food.count--;
        }
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease, .cart-increase
      display: inline-block
      padding: 6px
      font-size: 24px
      ling-height: 24px
      color: rgb(0, 160, 220)
    .cart-decrease
      display: inline-block
    .cart-increase
      display: inline-block
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px;
      line-height: 24px;
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
</style>
