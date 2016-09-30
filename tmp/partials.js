angular.module('templates-dist', ['../public/app/partials/public/banner.html', '../public/app/partials/public/footer.html', '../public/app/partials/public/header.html', '../public/app/partials/public/index.html']);

angular.module("../public/app/partials/public/banner.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/banner.html",
    "<div class=\"banner\">\n" +
    "  <div class=\"row\" style=\"background:white;border-radius:3px;margin-top:4em;padding:10px;margin:0\">\n" +
    "    <div class=\"col-md-6 col-md-offset-3\" >\n" +
    "      <h4 style=\"text-align:center\">Welcome to LAYG</h4>\n" +
    "      <p>\n" +
    "        Not sure what to say, so I'll put a bunch of logos. You'll figure out the rest. 🤓\n" +
    "      </br>\n" +
    "      In case of anything, contact me <a href=\"mailto:mbuguarufus@gmail.com\">here</a>.\n" +
    "    </p>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-6 col-md-offset-3\">\n" +
    "    <a class=\"col-md-3\" href=\"http://www.laravel.com\">\n" +
    "      <img src=\"https://worldvectorlogo.com/logos/laravel.svg\" style=\"display:inline-block;width:100px;margin:0 auto\">\n" +
    "    </a>\n" +
    "    <a class=\"col-md-3\" href=\"https://angularjs.org/\">\n" +
    "      <img src=\"http://code-maven.com/img/angularjs.png\" style=\"display:inline-block;width:100px;margin:0 auto\"?>\n" +
    "    </a>\n" +
    "\n" +
    "\n" +
    "    <a class=\"col-md-3\" href=\"http://yeoman.io/\">\n" +
    "      <img src=\"http://blog.teamtreehouse.com/wp-content/uploads/2014/01/yeoman-logo.png\" style=\"display:inline-block;width:100px;margin:0 auto\" >\n" +
    "    </a>\n" +
    "\n" +
    "    <a class=\"col-md-3\" href=\"http://gruntjs.com/\">\n" +
    "      <img src=\"https://camo.githubusercontent.com/39242419c60a53e1f3cecdeecb2460acce47366f/687474703a2f2f6772756e746a732e636f6d2f696d672f6772756e742d6c6f676f2d6e6f2d776f72646d61726b2e737667\" style=\"display:inline-block;width:100px;margin:0 auto\" >\n" +
    "    </a>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/public/footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/footer.html",
    "<nav>\n" +
    "    <div class=\"col-md-6\">\n" +
    "        <a href=\"\">\n" +
    "            <i class=\"ion-email\"></i>  Contact Us\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6\">\n" +
    "        Follow Us\n" +
    "        <a href=\"\">\n" +
    "            <i class=\"ion-social-twitter\"></i></a>\n" +
    "        <a href=\"\">\n" +
    "            <i class=\"ion-social-facebook\"></i>\n" +
    "        </a>\n" +
    "        <a href=\"\">\n" +
    "            <i class=\"ion-social-googleplus\"></i>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</nav>");
}]);

angular.module("../public/app/partials/public/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/header.html",
    "<nav id=\"main\" class=\"header\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "        </button>\n" +
    "        <a class=\"navbar-brand\" href=\"#\">\n" +
    "        </a>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "    </div>\n" +
    "</nav>\n" +
    "");
}]);

angular.module("../public/app/partials/public/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/index.html",
    "<div ui-view=\"header\"></div>\n" +
    "<div ui-view=\"banner\"></div>\n" +
    "<div ui-view=\"\"></div>\n" +
    "");
}]);
