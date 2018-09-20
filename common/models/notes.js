const hiddenMethodNames = require('../constants/hidden-methods');

module.exports = (Notes) => {
  hiddenMethodNames.forEach(
    method => Notes.disableRemoteMethodByName(method),
  );
};
