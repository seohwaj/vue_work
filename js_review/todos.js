const template = /*html*/`
  <div>
    userId <input v-model="todo.userId">
    title <input v-model="todo.title">
    <button @click="addTodo">등록</button>
  </div>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>userId</th>
        <th>id</th>
        <th>title</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="todo in todos">
        <td>{{todo.userId}}</td>
        <td>{{todo.id}}</td>
        <td @click="delTodo(todo.id)">{{todo.title}}</td>
      </tr>
    </tbody>
  </table>
`;

const url = 'https://jsonplaceholder.typicode.com/todos';

export default {
    template,
    data() {
      return {
        todos: [],
        todo: {
          userId: '',
          title: '',
          completed: false
        }
      }
    },
    created() {
      axios.get(url)
        .then(json => {
          this.todos = json.data;
        })
    },
    methods: {
      addTodo() {
        axios.post(url, this.todo)
          .then(json => this.todos.push(json.data))
        this.todo.userId = '';
        this.todo.title = '';
      },
      delTodo(id) {
        axios.delete(`${url}/${id}`)
          .then(json => {
            let result = this.todos.filter(todo => todo.id != id);
            this.todos = result;
          })
      }
    }
}