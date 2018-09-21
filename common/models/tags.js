const hiddenMethodNames = require('../constants/hidden-methods');

module.exports = (tags) => {
  hiddenMethodNames.forEach(
    method => tags.disableRemoteMethodByName(method),
  );
};
