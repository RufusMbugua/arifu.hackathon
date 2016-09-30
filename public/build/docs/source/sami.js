
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:App" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App.html">App</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Events" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Events.html">Events</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Events_Event" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Events/Event.html">Event</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Exceptions" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Exceptions.html">Exceptions</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Exceptions_Handler" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Exceptions/Handler.html">Handler</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Http" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http.html">Http</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Http_Controllers" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Controllers.html">Controllers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Http_Controllers_Auth" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Controllers/Auth.html">Auth</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Http_Controllers_Auth_AuthController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/AuthController.html">AuthController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_Auth_PasswordController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/PasswordController.html">PasswordController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Http_Controllers_Controller" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/Controller.html">Controller</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_TestController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/TestController.html">TestController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Http_Middleware" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Middleware.html">Middleware</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Http_Middleware_Authenticate" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/Authenticate.html">Authenticate</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_RedirectIfAuthenticated" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/RedirectIfAuthenticated.html">RedirectIfAuthenticated</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_VerifyCsrfToken" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/VerifyCsrfToken.html">VerifyCsrfToken</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Http_Requests" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Requests.html">Requests</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Http_Requests_Request" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Requests/Request.html">Request</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Http_Kernel" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Http/Kernel.html">Kernel</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Providers" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Providers.html">Providers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Providers_AppServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/AppServiceProvider.html">AppServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_BusServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/BusServiceProvider.html">BusServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_ConfigServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/ConfigServiceProvider.html">ConfigServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_EventServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/EventServiceProvider.html">EventServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_RouteServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/RouteServiceProvider.html">RouteServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Services" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Services.html">Services</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Services_Registrar" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Services/Registrar.html">Registrar</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_AuditTrail" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="App/AuditTrail.html">AuditTrail</a>                    </div>                </li>                            <li data-name="class:App_User" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="App/User.html">User</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">Senshi</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Senshi_Data" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Senshi/Data.html">Data</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Senshi_Data_Export" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Senshi/Data/Export.html">Export</a>                    </div>                </li>                            <li data-name="class:Senshi_Data_Import" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Senshi/Data/Import.html">Import</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Senshi_Files" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Senshi/Files.html">Files</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Senshi_Files_FileHandler" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Senshi/Files/FileHandler.html">FileHandler</a>                    </div>                </li>                            <li data-name="class:Senshi_Files_FileReader" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Senshi/Files/FileReader.html">FileReader</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Senshi_Nesters" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Senshi/Nesters.html">Nesters</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Senshi_Nesters_ArrayNester" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Senshi/Nesters/ArrayNester.html">ArrayNester</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Senshi_Transformers" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Senshi/Transformers.html">Transformers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Senshi_Transformers_DependentTransformer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Senshi/Transformers/DependentTransformer.html">DependentTransformer</a>                    </div>                </li>                            <li data-name="class:Senshi_Transformers_FacilityTransformer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Senshi/Transformers/FacilityTransformer.html">FacilityTransformer</a>                    </div>                </li>                            <li data-name="class:Senshi_Transformers_MemberTransformer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Senshi/Transformers/MemberTransformer.html">MemberTransformer</a>                    </div>                </li>                            <li data-name="class:Senshi_Transformers_Transformer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Senshi/Transformers/Transformer.html">Transformer</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "App.html", "name": "App", "doc": "Namespace App"},{"type": "Namespace", "link": "App/Events.html", "name": "App\\Events", "doc": "Namespace App\\Events"},{"type": "Namespace", "link": "App/Exceptions.html", "name": "App\\Exceptions", "doc": "Namespace App\\Exceptions"},{"type": "Namespace", "link": "App/Http.html", "name": "App\\Http", "doc": "Namespace App\\Http"},{"type": "Namespace", "link": "App/Http/Controllers.html", "name": "App\\Http\\Controllers", "doc": "Namespace App\\Http\\Controllers"},{"type": "Namespace", "link": "App/Http/Controllers/Auth.html", "name": "App\\Http\\Controllers\\Auth", "doc": "Namespace App\\Http\\Controllers\\Auth"},{"type": "Namespace", "link": "App/Http/Middleware.html", "name": "App\\Http\\Middleware", "doc": "Namespace App\\Http\\Middleware"},{"type": "Namespace", "link": "App/Http/Requests.html", "name": "App\\Http\\Requests", "doc": "Namespace App\\Http\\Requests"},{"type": "Namespace", "link": "App/Providers.html", "name": "App\\Providers", "doc": "Namespace App\\Providers"},{"type": "Namespace", "link": "App/Services.html", "name": "App\\Services", "doc": "Namespace App\\Services"},{"type": "Namespace", "link": "Senshi.html", "name": "Senshi", "doc": "Namespace Senshi"},{"type": "Namespace", "link": "Senshi/Data.html", "name": "Senshi\\Data", "doc": "Namespace Senshi\\Data"},{"type": "Namespace", "link": "Senshi/Files.html", "name": "Senshi\\Files", "doc": "Namespace Senshi\\Files"},{"type": "Namespace", "link": "Senshi/Nesters.html", "name": "Senshi\\Nesters", "doc": "Namespace Senshi\\Nesters"},{"type": "Namespace", "link": "Senshi/Transformers.html", "name": "Senshi\\Transformers", "doc": "Namespace Senshi\\Transformers"},
            
            {"type": "Class", "fromName": "App", "fromLink": "App.html", "link": "App/AuditTrail.html", "name": "App\\AuditTrail", "doc": "&quot;\n&quot;"},
                    
            {"type": "Class", "fromName": "App\\Events", "fromLink": "App/Events.html", "link": "App/Events/Event.html", "name": "App\\Events\\Event", "doc": "&quot;\n&quot;"},
                    
            {"type": "Class", "fromName": "App\\Exceptions", "fromLink": "App/Exceptions.html", "link": "App/Exceptions/Handler.html", "name": "App\\Exceptions\\Handler", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "App\\Exceptions\\Handler", "fromLink": "App/Exceptions/Handler.html", "link": "App/Exceptions/Handler.html#method_report", "name": "App\\Exceptions\\Handler::report", "doc": "&quot;Report or log an exception.&quot;"},
                    {"type": "Method", "fromName": "App\\Exceptions\\Handler", "fromLink": "App/Exceptions/Handler.html", "link": "App/Exceptions/Handler.html#method_render", "name": "App\\Exceptions\\Handler::render", "doc": "&quot;Render an exception into an HTTP response.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/AuthController.html", "name": "App\\Http\\Controllers\\Auth\\AuthController", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\AuthController", "fromLink": "App/Http/Controllers/Auth/AuthController.html", "link": "App/Http/Controllers/Auth/AuthController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\AuthController::__construct", "doc": "&quot;Create a new authentication controller instance.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/PasswordController.html", "name": "App\\Http\\Controllers\\Auth\\PasswordController", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\PasswordController", "fromLink": "App/Http/Controllers/Auth/PasswordController.html", "link": "App/Http/Controllers/Auth/PasswordController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\PasswordController::__construct", "doc": "&quot;Create a new password controller instance.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/Controller.html", "name": "App\\Http\\Controllers\\Controller", "doc": "&quot;\n&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/TestController.html", "name": "App\\Http\\Controllers\\TestController", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\TestController", "fromLink": "App/Http/Controllers/TestController.html", "link": "App/Http/Controllers/TestController.html#method_index", "name": "App\\Http\\Controllers\\TestController::index", "doc": "&quot;Display a listing of the resource.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\TestController", "fromLink": "App/Http/Controllers/TestController.html", "link": "App/Http/Controllers/TestController.html#method_create", "name": "App\\Http\\Controllers\\TestController::create", "doc": "&quot;Show the form for creating a new resource.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\TestController", "fromLink": "App/Http/Controllers/TestController.html", "link": "App/Http/Controllers/TestController.html#method_store", "name": "App\\Http\\Controllers\\TestController::store", "doc": "&quot;Store a newly created resource in storage.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\TestController", "fromLink": "App/Http/Controllers/TestController.html", "link": "App/Http/Controllers/TestController.html#method_show", "name": "App\\Http\\Controllers\\TestController::show", "doc": "&quot;Display the specified resource.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\TestController", "fromLink": "App/Http/Controllers/TestController.html", "link": "App/Http/Controllers/TestController.html#method_edit", "name": "App\\Http\\Controllers\\TestController::edit", "doc": "&quot;Show the form for editing the specified resource.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\TestController", "fromLink": "App/Http/Controllers/TestController.html", "link": "App/Http/Controllers/TestController.html#method_update", "name": "App\\Http\\Controllers\\TestController::update", "doc": "&quot;Update the specified resource in storage.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\TestController", "fromLink": "App/Http/Controllers/TestController.html", "link": "App/Http/Controllers/TestController.html#method_destroy", "name": "App\\Http\\Controllers\\TestController::destroy", "doc": "&quot;Remove the specified resource from storage.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http", "fromLink": "App/Http.html", "link": "App/Http/Kernel.html", "name": "App\\Http\\Kernel", "doc": "&quot;\n&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/Authenticate.html", "name": "App\\Http\\Middleware\\Authenticate", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Middleware\\Authenticate", "fromLink": "App/Http/Middleware/Authenticate.html", "link": "App/Http/Middleware/Authenticate.html#method___construct", "name": "App\\Http\\Middleware\\Authenticate::__construct", "doc": "&quot;Create a new filter instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Middleware\\Authenticate", "fromLink": "App/Http/Middleware/Authenticate.html", "link": "App/Http/Middleware/Authenticate.html#method_handle", "name": "App\\Http\\Middleware\\Authenticate::handle", "doc": "&quot;Handle an incoming request.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/RedirectIfAuthenticated.html", "name": "App\\Http\\Middleware\\RedirectIfAuthenticated", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Middleware\\RedirectIfAuthenticated", "fromLink": "App/Http/Middleware/RedirectIfAuthenticated.html", "link": "App/Http/Middleware/RedirectIfAuthenticated.html#method___construct", "name": "App\\Http\\Middleware\\RedirectIfAuthenticated::__construct", "doc": "&quot;Create a new filter instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Middleware\\RedirectIfAuthenticated", "fromLink": "App/Http/Middleware/RedirectIfAuthenticated.html", "link": "App/Http/Middleware/RedirectIfAuthenticated.html#method_handle", "name": "App\\Http\\Middleware\\RedirectIfAuthenticated::handle", "doc": "&quot;Handle an incoming request.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/VerifyCsrfToken.html", "name": "App\\Http\\Middleware\\VerifyCsrfToken", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Middleware\\VerifyCsrfToken", "fromLink": "App/Http/Middleware/VerifyCsrfToken.html", "link": "App/Http/Middleware/VerifyCsrfToken.html#method_handle", "name": "App\\Http\\Middleware\\VerifyCsrfToken::handle", "doc": "&quot;Handle an incoming request.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Requests", "fromLink": "App/Http/Requests.html", "link": "App/Http/Requests/Request.html", "name": "App\\Http\\Requests\\Request", "doc": "&quot;\n&quot;"},
                    
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/AppServiceProvider.html", "name": "App\\Providers\\AppServiceProvider", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\AppServiceProvider", "fromLink": "App/Providers/AppServiceProvider.html", "link": "App/Providers/AppServiceProvider.html#method_boot", "name": "App\\Providers\\AppServiceProvider::boot", "doc": "&quot;Bootstrap any application services.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\AppServiceProvider", "fromLink": "App/Providers/AppServiceProvider.html", "link": "App/Providers/AppServiceProvider.html#method_register", "name": "App\\Providers\\AppServiceProvider::register", "doc": "&quot;Register any application services.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/BusServiceProvider.html", "name": "App\\Providers\\BusServiceProvider", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\BusServiceProvider", "fromLink": "App/Providers/BusServiceProvider.html", "link": "App/Providers/BusServiceProvider.html#method_boot", "name": "App\\Providers\\BusServiceProvider::boot", "doc": "&quot;Bootstrap any application services.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\BusServiceProvider", "fromLink": "App/Providers/BusServiceProvider.html", "link": "App/Providers/BusServiceProvider.html#method_register", "name": "App\\Providers\\BusServiceProvider::register", "doc": "&quot;Register any application services.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/ConfigServiceProvider.html", "name": "App\\Providers\\ConfigServiceProvider", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\ConfigServiceProvider", "fromLink": "App/Providers/ConfigServiceProvider.html", "link": "App/Providers/ConfigServiceProvider.html#method_register", "name": "App\\Providers\\ConfigServiceProvider::register", "doc": "&quot;Overwrite any vendor \/ package configuration.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/EventServiceProvider.html", "name": "App\\Providers\\EventServiceProvider", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\EventServiceProvider", "fromLink": "App/Providers/EventServiceProvider.html", "link": "App/Providers/EventServiceProvider.html#method_boot", "name": "App\\Providers\\EventServiceProvider::boot", "doc": "&quot;Register any other events for your application.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/RouteServiceProvider.html", "name": "App\\Providers\\RouteServiceProvider", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\RouteServiceProvider", "fromLink": "App/Providers/RouteServiceProvider.html", "link": "App/Providers/RouteServiceProvider.html#method_boot", "name": "App\\Providers\\RouteServiceProvider::boot", "doc": "&quot;Define your route model bindings, pattern filters, etc.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\RouteServiceProvider", "fromLink": "App/Providers/RouteServiceProvider.html", "link": "App/Providers/RouteServiceProvider.html#method_map", "name": "App\\Providers\\RouteServiceProvider::map", "doc": "&quot;Define the routes for the application.&quot;"},
            
            {"type": "Class", "fromName": "App\\Services", "fromLink": "App/Services.html", "link": "App/Services/Registrar.html", "name": "App\\Services\\Registrar", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "App\\Services\\Registrar", "fromLink": "App/Services/Registrar.html", "link": "App/Services/Registrar.html#method_validator", "name": "App\\Services\\Registrar::validator", "doc": "&quot;Get a validator for an incoming registration request.&quot;"},
                    {"type": "Method", "fromName": "App\\Services\\Registrar", "fromLink": "App/Services/Registrar.html", "link": "App/Services/Registrar.html#method_create", "name": "App\\Services\\Registrar::create", "doc": "&quot;Create a new user instance after a valid registration.&quot;"},
            
            {"type": "Class", "fromName": "App", "fromLink": "App.html", "link": "App/User.html", "name": "App\\User", "doc": "&quot;The model used to access and modify instances of a system user&quot;"},
                    
            {"type": "Class", "fromName": "Senshi\\Data", "fromLink": "Senshi/Data.html", "link": "Senshi/Data/Export.html", "name": "Senshi\\Data\\Export", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Senshi\\Data\\Export", "fromLink": "Senshi/Data/Export.html", "link": "Senshi/Data/Export.html#method___construct", "name": "Senshi\\Data\\Export::__construct", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Senshi\\Data\\Export", "fromLink": "Senshi/Data/Export.html", "link": "Senshi/Data/Export.html#method_pdf", "name": "Senshi\\Data\\Export::pdf", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Senshi\\Data\\Export", "fromLink": "Senshi/Data/Export.html", "link": "Senshi/Data/Export.html#method_xls", "name": "Senshi\\Data\\Export::xls", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Senshi\\Data\\Export", "fromLink": "Senshi/Data/Export.html", "link": "Senshi/Data/Export.html#method_image", "name": "Senshi\\Data\\Export::image", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "Senshi\\Data", "fromLink": "Senshi/Data.html", "link": "Senshi/Data/Import.html", "name": "Senshi\\Data\\Import", "doc": "&quot;\n&quot;"},
                    
            {"type": "Class", "fromName": "Senshi\\Files", "fromLink": "Senshi/Files.html", "link": "Senshi/Files/FileHandler.html", "name": "Senshi\\Files\\FileHandler", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Senshi\\Files\\FileHandler", "fromLink": "Senshi/Files/FileHandler.html", "link": "Senshi/Files/FileHandler.html#method_test", "name": "Senshi\\Files\\FileHandler::test", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Senshi\\Files\\FileHandler", "fromLink": "Senshi/Files/FileHandler.html", "link": "Senshi/Files/FileHandler.html#method_upload", "name": "Senshi\\Files\\FileHandler::upload", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Senshi\\Files\\FileHandler", "fromLink": "Senshi/Files/FileHandler.html", "link": "Senshi/Files/FileHandler.html#method_download", "name": "Senshi\\Files\\FileHandler::download", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Senshi\\Files\\FileHandler", "fromLink": "Senshi/Files/FileHandler.html", "link": "Senshi/Files/FileHandler.html#method_scanDir", "name": "Senshi\\Files\\FileHandler::scanDir", "doc": "&quot;[scanDir description]&quot;"},
                    {"type": "Method", "fromName": "Senshi\\Files\\FileHandler", "fromLink": "Senshi/Files/FileHandler.html", "link": "Senshi/Files/FileHandler.html#method_readFile", "name": "Senshi\\Files\\FileHandler::readFile", "doc": "&quot;[readFile description]&quot;"},
            
            {"type": "Class", "fromName": "Senshi\\Files", "fromLink": "Senshi/Files.html", "link": "Senshi/Files/FileReader.html", "name": "Senshi\\Files\\FileReader", "doc": "&quot;\n&quot;"},
                    
            {"type": "Class", "fromName": "Senshi\\Nesters", "fromLink": "Senshi/Nesters.html", "link": "Senshi/Nesters/ArrayNester.html", "name": "Senshi\\Nesters\\ArrayNester", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Senshi\\Nesters\\ArrayNester", "fromLink": "Senshi/Nesters/ArrayNester.html", "link": "Senshi/Nesters/ArrayNester.html#method_nest", "name": "Senshi\\Nesters\\ArrayNester::nest", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "Senshi\\Transformers", "fromLink": "Senshi/Transformers.html", "link": "Senshi/Transformers/DependentTransformer.html", "name": "Senshi\\Transformers\\DependentTransformer", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Senshi\\Transformers\\DependentTransformer", "fromLink": "Senshi/Transformers/DependentTransformer.html", "link": "Senshi/Transformers/DependentTransformer.html#method_transform", "name": "Senshi\\Transformers\\DependentTransformer::transform", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "Senshi\\Transformers", "fromLink": "Senshi/Transformers.html", "link": "Senshi/Transformers/FacilityTransformer.html", "name": "Senshi\\Transformers\\FacilityTransformer", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Senshi\\Transformers\\FacilityTransformer", "fromLink": "Senshi/Transformers/FacilityTransformer.html", "link": "Senshi/Transformers/FacilityTransformer.html#method_transform", "name": "Senshi\\Transformers\\FacilityTransformer::transform", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "Senshi\\Transformers", "fromLink": "Senshi/Transformers.html", "link": "Senshi/Transformers/MemberTransformer.html", "name": "Senshi\\Transformers\\MemberTransformer", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Senshi\\Transformers\\MemberTransformer", "fromLink": "Senshi/Transformers/MemberTransformer.html", "link": "Senshi/Transformers/MemberTransformer.html#method_transform", "name": "Senshi\\Transformers\\MemberTransformer::transform", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Senshi\\Transformers\\MemberTransformer", "fromLink": "Senshi/Transformers/MemberTransformer.html", "link": "Senshi/Transformers/MemberTransformer.html#method_transformNest", "name": "Senshi\\Transformers\\MemberTransformer::transformNest", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "Senshi\\Transformers", "fromLink": "Senshi/Transformers.html", "link": "Senshi/Transformers/Transformer.html", "name": "Senshi\\Transformers\\Transformer", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Senshi\\Transformers\\Transformer", "fromLink": "Senshi/Transformers/Transformer.html", "link": "Senshi/Transformers/Transformer.html#method_transformCollection", "name": "Senshi\\Transformers\\Transformer::transformCollection", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Senshi\\Transformers\\Transformer", "fromLink": "Senshi/Transformers/Transformer.html", "link": "Senshi/Transformers/Transformer.html#method_transform", "name": "Senshi\\Transformers\\Transformer::transform", "doc": "&quot;\n&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


