var app = new Vue({
    el: "#root",
    data: {
        newTodo: '',
        todos: [{
                text: 'Ordinare pizza',
                done: false
            },
            {
                text: 'Fare spesa',
                done: false
            },
            {
                text: "Inviare mail al dott. Mimmo",
                done: false
            }
        ],
    },
    methods: {
        aggiungiTodo: function () {
            const newItem = {
                text: this.newTodo,
                done: false
            }

            if (!this.todos.includes(newItem) && (newItem.text != '')) {
                this.todos.push(newItem);
            }

            this.newTodo = '';
        },
        removeItem: function (index) {
            this.todos.splice(index, 1);
        },
        todoDone: function (index) {
            if (this.todos[index].done == false) {
                this.todos[index].done = true;
            } else {
                this.todos[index].done = false;
            }
        }
    }
})