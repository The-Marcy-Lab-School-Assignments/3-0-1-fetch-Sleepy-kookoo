const userUrl = 'https://jsonplaceholder.typicode.com/users'

export const checkResponseStatus = () => {
  return fetch(userUrl)
    .then((data) => {
      console.log(data.ok, data.status, data.url);
      return { status: data.status, ok: data.ok, url: data.url }
    })
};

export const getUsers = () => {
  return fetch(userUrl)
    .then((data) => {
      return data.json()
    })
  // .then((user) => {
  //   const users = user.map((user) => {
  //     return ({ id: user.id, username: user.username })
  //   });
  //   console.log(users)
  //   return users
  // })
};

export const getUserPosts = (userId, maxNumPosts = 3) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then((data) => {
      return data.json()
    })
  // .then((postArr) => { 
  //   return postArr.slice(0, maxNumPosts) 
  // })
};

export const createNewUser = (newUser) => {
  const postOption = {
    method: "POST",                      // The type of HTTP request
    body: JSON.stringify(newUser),       // The data to be sent to the API
    headers: {
      "Content-Type": "application/json" // The format of the body's data
    }
  }
  return fetch(userUrl, postOption)
    .then((data) => {
      return data.json();
    })

}
createNewUser()
