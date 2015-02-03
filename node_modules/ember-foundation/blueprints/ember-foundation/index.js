module.exports = {
  afterInstall: function() {
    var self = this;

    return this.addBowerPackageToProject('foundation');
  },

  normalizeEntityName: function() {}
};
