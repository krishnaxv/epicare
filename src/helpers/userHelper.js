import HTTPService, { interpolateURL } from '../services/HTTPService';

const userAPI = {
  getUserEvents: '/user/:userId/events'
};

const getUserEvents = userId => {
  const requestURL = interpolateURL(userAPI.getUserEvents, {
    userId
  });
  return HTTPService.request(requestURL);
};

const userHelper = {
  getUserEvents
};

export default userHelper;
