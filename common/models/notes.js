const hiddenMethodNames = require('../constants/hidden-methods');

module.exports = (notes) => {
  hiddenMethodNames.forEach(
    method => notes.disableRemoteMethodByName(method),
  );
};
