import {
  renderStatus,
  setupPageBasics,
  renderUsers,
  renderPosts,
  renderNewUser,
} from './render-functions.js';
import {
  checkResponseStatus,
  getUserPosts,
  createNewUser,
  getUsers
} from './fetch-functions.js';

export default function app(appDiv) {
  /** FEEDBACK: setUpPageBasics contains the elements you will need for this section so make sure you are constantly either using dot notation or you destructure your object to pull out the elements right away! */
  const page = setupPageBasics(appDiv);
  checkResponseStatus()
    .then((statusData) => renderStatus(page.statusDiv, statusData));
  getUsers()
    .then((users) => renderUsers(usersUl, users));

}