const app = Vue.createApp({
  data() {
    return {
      premium: true,
      cart: []
    }
  },
  methods: {
    updateCart(id, mod) {
      if(mod){
        this.cart.push(id)
      }else {
        const index = this.cart.indexOf(id)
        if(index > -1) this.cart.splice(index, 1)
      }

    }
  }
})
