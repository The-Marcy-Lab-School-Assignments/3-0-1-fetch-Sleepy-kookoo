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
  const page = setupPageBasics(appDiv);
  checkResponseStatus()
    .then((statusData) => renderStatus(page.statusDiv, statusData));
  getUsers()
    .then((users) => renderUsers(usersUl, users));

}