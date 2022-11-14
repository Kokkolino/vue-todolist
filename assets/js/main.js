var app = new Vue({
    el: '#root',
    data: {
      todoElements: [
    
      ],

      completedTasks: [
        
      ],
    },
    methods:{
      addTask: function (value){
        const x = {task: value, done: false};
        return this.todoElements.push(x);
      }
    }
  })