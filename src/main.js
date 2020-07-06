import * as Vue from "vue";

new Vue({
  el: '#app',
  data: {
    todos: [
      {done:false, text:'빵 사기'},
      {done:false, text:'커피 사기'}
    ]
  },
  computed: {
    remaining: function() {
      return this.todos.filter(function(val) {
        return val.done;
      }).length;
    }
  }
})
