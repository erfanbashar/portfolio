// Associate with viewer-request on the CloudFront static-site behavior.
function handler(event) {
  var request = event.request;
  var uri = request.uri;
  if (uri.endsWith('/')) request.uri += 'index.html';
  else if (!uri.split('/').pop().includes('.')) request.uri += '/index.html';
  return request;
}
