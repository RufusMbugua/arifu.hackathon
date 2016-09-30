var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  // note: arguments and options should be defined in the constructor.
  constructor: function () {
    generators.Base.apply(this, arguments);

    // This makes `appname` a required argument.
    this.argument('appname', { type: String, required: false });
    if(!this.appname){
      this.appname='test'
    }

  }
});
