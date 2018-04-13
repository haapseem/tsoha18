webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Always shows a header, even in smaller screens. -->\r\n<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\r\n  <header class=\"mdl-layout__header\">\r\n    <div class=\"mdl-layout__header-row\">\r\n      <!-- Title -->\r\n      <span class=\"mdl-layout-title\">Tsoha</span>\r\n      <!-- Add spacer, to align navigation to the right -->\r\n      <div class=\"mdl-layout-spacer\"></div>\r\n      <!-- Navigation. We hide it in small screens. -->\r\n      <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\r\n        <a class=\"mdl-navigation__link\" routerLink=\"/login\">login</a>\r\n      </nav>\r\n    </div>\r\n  </header>\r\n  <div class=\"mdl-layout__drawer\">\r\n    <span class=\"mdl-layout-title\">Tsoha</span>\r\n    <nav class=\"mdl-navigation\">\r\n      <a class=\"mdl-navigation__link\" routerLink=\"/login\">login</a>\r\n    </nav>\r\n  </div>\r\n  <main class=\"mdl-layout__content\">\r\n  <router-outlet mdl-shadow=\"2\"></router-outlet>\r\n  </main>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_service__ = __webpack_require__("./src/app/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__create_user_create_user_component__ = __webpack_require__("./src/app/create-user/create-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
    { path: 'login/create', component: __WEBPACK_IMPORTED_MODULE_9__create_user_create_user_component__["a" /* CreateUserComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__create_user_create_user_component__["a" /* CreateUserComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__socket_service__["a" /* SocketService */],
                __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-user/create-user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create-user/create-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"mdl-grid\">\n    <div class=\"mdl-cell mdl-cell--4-col \"></div>\n    <div class=\"mdl-cell mdl-cell--4-col \">\n      <h4>Login</h4>\n    </div>\n    <div class=\"mdl-cell mdl-cell--4-col \"></div>\n    <div class=\"mdl-cell mdl-cell--4-col \"></div>\n    <div class=\"mdl-cell mdl-cell--4-col \">\n\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n        <input class=\"mdl-textfield__input\" placeholder=\"username\" [(ngModel)]=\"username\" type=\"text\" id=\"username\">\n        <!-- <label class=\"mdl-textfield__label\" for=\"username\">username</label> -->\n      </div>\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n        <input class=\"mdl-textfield__input\" placeholder=\"name\" [(ngModel)]=\"name\" type=\"text\" id=\"name\">\n        <!-- <label class=\"mdl-textfield__label\" for=\"name\">name</label> -->\n      </div>\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n        <input class=\"mdl-textfield__input\" placeholder=\"email\" [(ngModel)]=\"email\" type=\"text\" id=\"email\">\n        <!-- <label class=\"mdl-textfield__label\" for=\"email\">email</label> -->\n      </div>\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n        <input class=\"mdl-textfield__input\" placeholder=\"password\" [(ngModel)]=\"password\" type=\"password\" id=\"password\">\n        <!-- <label class=\"mdl-textfield__label\" for=\"password\">email</label> -->\n      </div>\n      <div>\n        <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" (click)=\"click()\">\n          Create\n        </button>\n      </div>\n      <div>\n        <a routerLink=\"/login\"> or login</a>\n      </div>\n    </div>\n    <div class=\"mdl-cell mdl-cell--4-col \"></div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/create-user/create-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent(socketService) {
        this.socketService = socketService;
    }
    CreateUserComponent.prototype.click = function () {
        var _this = this;
        this.socketService.sendMessage(JSON
            .stringify({ command: 'createUser',
            data: {
                username: this.username,
                name: this.name,
                email: this.email,
                password: this.password,
            } }));
        var timerId = setInterval(function () {
            if (_this.socketService.isAnswered()) {
                var aswr = _this.socketService.getAnswer();
                console.log(aswr);
                if (aswr["command"] == "status") {
                    clearInterval(timerId);
                    if (aswr["data"] == "ok") {
                        alert("user created");
                        _this.username = "";
                        _this.name = "";
                        _this.email = "";
                        _this.password = "";
                        window.location.href = "/login";
                    }
                    else {
                        alert("User or email already exists");
                    }
                }
            }
            else {
                console.log("waiting...");
            }
        }, 100);
        setTimeout(function () {
            clearInterval(timerId);
            // alert('timeouted query');
        }, 5000);
    };
    CreateUserComponent.prototype.ngOnInit = function () {
    };
    CreateUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-user',
            template: __webpack_require__("./src/app/create-user/create-user.component.html"),
            styles: [__webpack_require__("./src/app/create-user/create-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]])
    ], CreateUserComponent);
    return CreateUserComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"mdl-grid\" *ngIf=\"show\">\n  <div class=\"mld-cell mdl-cell--2-col mdl-cell--4-col-phone mdl-color--primary\">\n    Logged in as {{getUserName()}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_service__ = __webpack_require__("./src/app/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(storageService) {
        var _this = this;
        this.storageService = storageService;
        this.userName = "";
        this.show = false;
        this.checkStatus();
        setInterval(function () {
            _this.checkStatus();
        }, 1000);
    }
    HomeComponent.prototype.getUserName = function () {
        return this.userName;
    };
    HomeComponent.prototype.checkStatus = function () {
        if (!this.storageService.getData("login")) {
            window.location.href = "/login";
        }
        else {
            this.userName = JSON.parse(this.storageService.getData("login"))["name"];
            this.show = true;
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__storage_service__["a" /* StorageService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/init-storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Init; });
var Init = /** @class */ (function () {
    function Init() {
    }
    Init.prototype.write = function (x, y) {
        localStorage.setItem(x, y);
    };
    Init.prototype.load = function (x) {
        console.log(localStorage.getItem(x));
        return localStorage.getItem(x);
    };
    return Init;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"mdl-grid\">\n    <div class=\"mdl-cell mdl-cell--4-col \"></div>\n    <div class=\"mdl-cell mdl-cell--4-col \">\n      <h4>Login</h4>\n    </div>\n    <div class=\"mdl-cell mdl-cell--4-col \"></div>\n    <div class=\"mdl-cell mdl-cell--4-col \"></div>\n    <div class=\"mdl-cell mdl-cell--4-col \">\n\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n        <input class=\"mdl-textfield__input\" placeholder=\"username\" [(ngModel)]=\"username\" type=\"text\" id=\"username\">\n        <!-- <label class=\"mdl-textfield__label\" for=\"username\">username</label> -->\n      </div>\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n        <input class=\"mdl-textfield__input\" placeholder=\"password\" [(ngModel)]=\"password\" type=\"password\" id=\"password\">\n        <!-- <label class=\"mdl-textfield__label\" for=\"password\">password</label> -->\n      </div>\n      <div>\n        <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" (click)=\"click()\">\n          log in\n        </button>\n      </div>\n      <div>\n        <a routerLink=\"/login/create\"> or create user</a>\n      </div>\n    </div>\n    <div class=\"mdl-cell mdl-cell--4-col \"></div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__("./src/app/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(socketService, storageService) {
        this.socketService = socketService;
        this.storageService = storageService;
    }
    LoginComponent.prototype.click = function () {
        var _this = this;
        this.socketService.sendMessage(JSON
            .stringify({ command: 'login',
            data: {
                username: this.username,
                password: this.password,
            } }));
        var timerId = setInterval(function () {
            if (_this.socketService.isAnswered()) {
                var result = _this.socketService.getAnswer();
                console.log(result);
                if (result["command"] == "status") {
                    clearInterval(timerId);
                    if (result["data"] == "ok") {
                        alert("user logged in");
                        _this.storageService.save("login", result["data2"]);
                        _this.username = "";
                        _this.password = "";
                        window.location.href = "/";
                    }
                    else {
                        alert("login failed");
                    }
                }
            }
            else {
                console.log("waiting...");
            }
        }, 100);
        setTimeout(function () {
            clearInterval(timerId);
        }, 1000);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = /** @class */ (function () {
    function SocketService() {
        var _this = this;
        this.url = 'http://localhost:5000';
        this.answer = {
            'command': 'none',
            'data': ''
        };
        if (window.location.port == "4200") {
            this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__("http://127.0.0.1:5000/");
        }
        else if (window.location.port == "5000") {
            this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__("http://127.0.0.1:5000/");
        }
        else {
            this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__("https://tsoha-harkka.herokuapp.com/");
        }
        console.log(window.location.port);
        this.socket.on('connect', function () {
            console.log("connected");
        });
        this.socket.on('message', function (data) {
            _this.answer = JSON.parse(data);
        });
    }
    SocketService.prototype.sendMessage = function (message) {
        this.socket.emit('message', message);
    };
    SocketService.prototype.isAnswered = function () {
        return this.answer["command"] != "none";
    };
    SocketService.prototype.getAnswer = function () {
        var retval = this.answer;
        this.answer = {
            'command': 'none',
            'data': ''
        };
        return retval;
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_storage__ = __webpack_require__("./src/app/init-storage.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageService = /** @class */ (function (_super) {
    __extends(StorageService, _super);
    function StorageService() {
        return _super.call(this) || this;
    }
    StorageService.prototype.save = function (x, y) {
        this.write(x, JSON.stringify(y));
    };
    StorageService.prototype.getData = function (x) {
        return this.load(x);
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}(__WEBPACK_IMPORTED_MODULE_1__init_storage__["a" /* Init */]));



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map