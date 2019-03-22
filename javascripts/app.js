Vue.component("item", {
  template: "#item-todo",
  props: ['item'],
  methods: {
    remove: function() {
      M.toast({html: 'Se eliminó correctamente la tarea'})
      this.$emit('remove', this.item.value)
    }
  }
})

new Vue({
  el: '#app',
  data: {
    desc: "",
    items: []
  },
  methods: {
    save: function() {
      M.toast({html: 'Se añadio correctamente la tarea'})
      this.items.push(this.desc)
    },
    removeItem: function(item) {
      this.items =  this.items.filter(item => {
        return item !== item
      })
    }
  }
})

