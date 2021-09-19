//Credit to: https://ultimatecourses.com/blog/fetch-api-post-json

const appDiv = document.getElementById('app');
appDiv.innerHTML = `
  <div class="app">
    <form name="fetch">
      <input type="text" name="title" placeholder="title"><br>
      <input type="text" name="content" placeholder="content">
      <button type="submit">Submit</button>
    </form>
  </div>
`;

// selectors
const app = document.querySelector('.app');
const form = document.forms.fetch;

const postForm = body => {
  return fetch('//httpbin.org/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const body = JSON.stringify(Object.fromEntries(new FormData(e.target)));

  const res = await postForm(body);
  const data = await res.json();

  console.log(data.json);
};

form.addEventListener('submit', handleSubmit);



/*
//Credit to: https://www.learnwithjason.dev/blog/get-form-values-as-json !
function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const value = Object.fromEntries(data.entries());

  console.log({ value });
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);


fetch("/newpost", {
  method: "GET",
  body: JSON.stringify({
  }),
  headers: { "Content-Type": "application/json" }
})
  .then(function(res) {
    console.log(res);
  })
  .catch(err => console.log(err));
*/
/*
const blogFormHandler = async (event) => {
    event.preventDefault();

var submit = document.getElementById("blogsubmit");

submit.onclick = function () {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;

    console.log(title, content);
};

fetch('/api/user/newpost', {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    title,
    content
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

//AskBCS option below:
/*
fetch("/api/user/newpost", {
  method: "GET",
  body: JSON.stringify({
    data
  }),
  headers: { "Content-Type": "application/json" }
})
  .then(function(res) {
    console.log(res);
  })
  .catch(err => console.log(err));
;
*/

//Web Dev Simplified Ideas: https://www.youtube.com/watch?v=cuEtnrL9-H0&t=260s
/*
fetch('/newpost', {
  method: 'POST',
  body: {
    _
  }
}).then(res => {
  res.json()
})
*/
