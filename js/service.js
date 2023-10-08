export const services = {
    storeTodo: function (task) {
        // const myTask = [];
        // myTask.push(task)
        // if (localStorage.getItem('data') === null) {
        //     localStorage.setItem('data', []);
        // }
        // const localData = localStorage.setItem('data', JSON.stringify(myTask));

        const allTodo = this.getTodo();
        allTodo.push(task)

        
        if (localStorage.getItem('data') === null) {
            localStorage.setItem('data', []);
        }

        localStorage.setItem('data', JSON.stringify(task));

        const localData = JSON.parse(localStorage.getItem('data'));

        return localData;


    },
    getTodo: function() {
        const myTask = [];
        return myTask;
    }
}