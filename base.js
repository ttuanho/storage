
export function checkStore(key) {
  if (window.localStorage)
      return window.localStorage.getItem(key)
  else
      return null

}

export function clearStore(key) {
  if(window.localStorage) {
    window.localStorage.removeItem(key);
    return true;
  } else {
    return false;
  }
}

export function setStore(key, value) {
  if (window.localStorage)
      return window.localStorage.setItem(key, value)
  else
      return null

}

