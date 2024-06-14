const template = /*html*/`
  <div>
    userId <input v-model="post.userId">
    title <input v-model="post.title">
    body <input v-model="post.body">
    <button @click="addPost">등록</button>
  </div>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>userId</th>
        <th>id</th>
        <th>title</th>
        <th>body</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts">
        <td>{{post.userId}}</td>
        <td>{{post.id}}</td>
        <td>{{post.title}}</td>
        <td>{{post.body}}</td>
        <td><button @click="deletePost(post.id)">삭제</button></td>
      </tr>
    </tbody>
  </table>
`;

const url = 'https://jsonplaceholder.typicode.com/posts'

export default {
  template,
  data() {
    return {
      posts: [],
      post: {}
     }
  },
  created() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(json => this.posts = json)
    axios.get(url)
      .then(json => {
        console.log(json);
        this.posts = json.data;
      })
  },
  methods: {
    addPost() {
      // alert(JSON.stringify(this.post));
      axios.post(url, this.post)
        .then(json => this.posts.push(json.data));
      this.post = {};
    },
    deletePost(id) {
      axios.delete(`${url}/${id}`)
        .then(json => {
          let data = this.posts.filter(post => post.id != id);
          this.posts = data;
        })
    }
  }
}