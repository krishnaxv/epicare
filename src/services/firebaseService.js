import { chain, keys, isUndefined } from 'lodash';
import { firebaseRef, firebaseAuth } from '../config/constants';

function getFirebaseToken() {
  return chain(keys(localStorage))
    .filter(key => key.startsWith('firebase:authUser:'))
    .first()
    .value();
}

export function signIn(email, password) {
  return firebaseAuth().signInWithEmailAndPassword(email, password);
}

export function checkIfAuth() {
  return isUndefined(localStorage[getFirebaseToken()]) ? false : true;
}

export function getIdToken() {
  const currentUser = firebaseAuth().currentUser;
  if (currentUser === null) {
    const firebaseToken = getFirebaseToken();
    if (isUndefined(localStorage[firebaseToken])) {
      return Promise.reject(
        new Error({
          error: {
            code: 401,
            message: 'Authentication Failed. User token is null.'
          }
        })
      );
    }
    return Promise.resolve(
      JSON.parse(localStorage[firebaseToken]).stsTokenManager.accessToken
    );
  }
  return currentUser.getIdToken(true);
}

export function getUserId() {
  const firebaseToken = getFirebaseToken();
  if (isUndefined(localStorage[firebaseToken])) {
    return Promise.reject(
      new Error({
        error: {
          code: 401,
          message: 'Authentication Failed. User token is null.'
        }
      })
    );
  }
  return Promise.resolve(JSON.parse(localStorage[firebaseToken]).uid);
}

export function saveUser(user) {
  return firebaseRef
    .child(`users/${user.uid}`)
    .set(user)
    .then(() => user);
}

export function signOut() {
  return firebaseAuth().signOut();
}
