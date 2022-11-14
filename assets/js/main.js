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
      deleteTask: function (elem, position) {
        if(elem.done === false){
          return this.todoElements.splice(position,1)
        }
        else{
          return this.completedTasks.splice(position,1)
        }
      },
      checkTask: function (elem, position) {
        if(elem.done === false){
          const x = this.todoElements[position];
          x.done = true;
          this.todoElements.splice(position,1)
          return this.completedTasks.push(x)
        }
        else{
          const x = this.completedTasks[position];
          x.done = false;
          this.completedTasks.splice(position,1)
          return this.todoElements.push(x)
        }
      }
    }
  })