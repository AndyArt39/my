async function getData(id) {
  let res = await fetch('https://gorest.co.in/public/v1/posts/' + id)
  return await res.json()
}

// async function getComments(id) {
//   let res = await fetch('https://gorest.co.in/public/v1/comments/' + id)
//   return await res.json()
// }

let URLData = new URLSearchParams(window.location.search)
let id = URLData.get("post_id")

let postData = await getData(id)

function createPost (post) {
  let $h2 = document.createElement('h2')
  let $p = document.createElement('p')
  $h2.textContent = post.title
  $p.textContent = post.body
  document.title = post.title
  document.body.append($h2)
  document.body.append($p)
}

createPost(postData.data)
