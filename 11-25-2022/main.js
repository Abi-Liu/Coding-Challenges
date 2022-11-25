// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url) {
  let remove = url.indexOf("#");
  if (remove !== -1) {
    return url.slice(0, remove);
  }
  return url;
}