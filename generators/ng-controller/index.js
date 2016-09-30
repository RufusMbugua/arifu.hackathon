var generators = require('yeoman-generator');

generators.Base.extend({
  writing: function () {
    this.fs.copyTpl(
      this.templatePath('ng/controller.js'),
      this.destinationPath('public/app/controllers/testCtrl.js'));
  }
});
