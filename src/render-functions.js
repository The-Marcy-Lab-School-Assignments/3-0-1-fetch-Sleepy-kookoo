export const setupPageBasics = (parentEl) => {
  parentEl.innerHTML = `
      <h1>Intro To Fetch!</h1>
      <div id='status'></div>
      <div id='users'>
        <h2>Users</h2>
        <ul id='users-list'></ul>
      </div>
      <div id='posts'>
        <h2>Posts</h2>
        <ul id='posts-list'></ul>
      </div>
      <form id='new-user-form' aria-labelledby='new-user-heading'>
        <h2 id='new-user-heading'>Create A New Blog User!</h2>
        <label for='username'>Username:</label>
        <input type='text' id='username' name='username' />
        <label for='email'>Email:</label>
        <input type='email' id='email' name='email' />
        <button>Submit</button>
      </form>
      <div id='new-user'></div>
    `;

  const statusDiv = parentEl.querySelector('#status');
  const usersUl = parentEl.querySelector('#users-list');
  const postsUl = parentEl.querySelector('#posts-list');
  const newUserForm = parentEl.querySelector('#new-user-form');
  const newUserDiv = parentEl.querySelector('#new-user');

  return { statusDiv, usersUl, postsUl, newUserForm, newUserDiv };
};

export const renderStatus = (statusDiv, statusInfoObj) => {
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h2.id = 'status-heading';
  p.id = 'status-code';

  h2.textContent = `Info on - ${statusInfoObj.url}`;

  if (statusInfoObj.ok) {
    p.textContent = `Status code: ${statusInfoObj.status}, OK!`;
  } else {
    p.textContent = `Status code: ${statusInfoObj.status}, FAIL!`
  }

  statusDiv.append(h2, p);
}

export const renderUsers = (usersUl, users) => {
  usersUl.innerHTML = ""
  users.forEach((user) => {
    const li = document.createElement('li');
    li.setAttribute("class", "user-card");
    const buttons = document.createElement('button');
    buttons.setAttribute("data-user-id", user.id);
    buttons.textContent = `Load ${user.username}'s posts`;

    li.append(buttons);
    usersUl.append(li);
  })
};

export const renderPosts = (postsUl, posts) => {
  postsUl.innerHTML = ""
  posts.forEach((post) => {
    const postLi = document.createElement('li');
    const title = document.createElement('h2')
    const body = document.createElement('p')

    title.textContent = post.title;
    body.textContent = post.body;

    postLi.append(title, body);
    postsUl.append(postLi)
  })
}

export const renderNewUser = (newUserDiv, newUserInfo) => {
  newUserDiv.innerHTML = "";
  const divH2 = document.createElement('h2');
  const divP = document.createElement('p');

  divH2.textContent = newUserInfo.username
  divP.textContent = newUserInfo.email

  newUserDiv.append(divH2, divP);

}
