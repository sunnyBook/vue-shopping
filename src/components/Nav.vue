<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">Shopping Cart</router-link>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
            <slot>
                <li><router-link to="index"> iPhone 6S </router-link></li>
                <li><router-link to="cart"> 购物车 <span class="badge text-danger">{{shoppingLen}}</span></router-link></li>
            </slot>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        name: 'Nav',
        computed: {
            ...mapState({
                shoppingLen: (state) => state.cart.length
            })
        },
    }
</script>
<style lang="">
    .navbar-default .navbar-nav li a:focus {
        background-color: #e7e7e7;
    }
    .badge {
        color: #fff;
        background-color: #d9534f;
    }
</style>