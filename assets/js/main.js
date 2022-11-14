var app = new Vue({
    el: '#root',
    data: {
      todoElements: [
    
      ],

      completedTasks: [
        
      ],
    },
    methods:{
      // add task
      addTask: function (value){
        const x = {task: value, done: false};
        return this.todoElements.push(x);
      },
      // delete task
      deleteTask: function (position) {
        return this.todoElements.splice(position,1)
      }
    }
  })