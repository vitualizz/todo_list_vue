Vue.component("item", {
  template: "#item-todo",
  props: ['item'],
  methods: {
    remove: function() {
      M.toast({html: 'Se eliminó correctamente la tarea'})
      this.$el.remove();
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
    }
  }
})

