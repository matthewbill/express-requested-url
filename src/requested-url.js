/**
 * @copyright Matthew Bill
 */

function getBaseUrl(protocol, hostname, port) {
  let url = `${protocol}://${hostname}`;
  if (!(port === 80 && protocol === 'http') && !(port === 443 && protocol === 'https')) {
    url = `${url}:${port}`;
  }
  return url;
}

function getUrl(protocol, hostname, port, suffix) {
  return `${getBaseUrl(protocol, hostname, port)}${suffix}`;
}

const baseUrl = port => (req, res, next) => {
  req.baseUrl = getBaseUrl(req.protocol, req.hostname, port);
  next();
};

const strippedUrl = port => (req, res, next) => {
  req.strippedUrl = getUrl(req.protocol, req.hostname, port, req.path);
  next();
};

const requestedUrl = port => (req, res, next) => {
  req.requestedUrl = getUrl(req.protocol, req.hostname, port, req.originalUrl);
  next();
};

module.exports = {
  baseUrl,
  requestedUrl,
  strippedUrl,
};
