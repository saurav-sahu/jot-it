const hiddenMethodNames = require('../constants/hidden-methods');

module.exports = (Tags) => {
  hiddenMethodNames.forEach(
    method => Tags.disableRemoteMethodByName(method),
  );
};
