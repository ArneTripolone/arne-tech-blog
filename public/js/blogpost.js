/*
const blogFormHandler = async (event) => {
    event.preventDefault();

var submit = document.getElementById("blogsubmit");

submit.onclick = function () {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;

    console.log(title, content);
};

fetch('/api/user/blogpost', {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    title,
    content,
  })
})
.then(function (blog) {
  return blog.json()
})
.then(function (blog) {
  console.log('got results', blog)
})
}

document.querySelector('#blogsubmit').addEventListener('submit', blogFormHandler);
*/