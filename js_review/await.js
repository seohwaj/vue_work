// 비동기, 동기
async function callAPI() {
  let post = await fetch('https://jsonplaceholder.typicode.com/posts/1')
                    .then(res => res.json())
  console.log(post.title);

  console.log('fetch 호출');
}
callAPI();