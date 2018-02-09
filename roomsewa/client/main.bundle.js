webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    // Register User
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Authenticate User
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Get Profile
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:8080/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Stors token and user to localStorage
    AuthService.prototype.storeUserData = function (token, usr) {
        localStorage.setItem('id token', token);
        localStorage.setItem('name', usr.name);
        this.authToken = token;
        this.user = usr;
    };
    // Load Token
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id token');
        this.authToken = token;
    };
    //LoggedIn
    AuthService.prototype.loggedIn = function () {
        this.loadToken();
        if (this.authToken)
            return true;
        return false;
    };
    // Logout clears the token and user details
    AuthService.prototype.logOut = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/Services/hotel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HotelService = /** @class */ (function () {
    function HotelService(http) {
        this.http = http;
    }
    // Get Profile
    HotelService.prototype.getHotel = function (place) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/hotels/city', place, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HotelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HotelService);
    return HotelService;
}());



/***/ }),

/***/ "../../../../../src/app/Services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    // Validation for Register
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    // Validation for Email 
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    // Validation for Login Form
    ValidateService.prototype.validateLogin = function (user) {
        if (user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n    <flash-messages></flash-messages>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_material_module__ = __webpack_require__("../../../../../src/app/shared/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Services_validate_service__ = __webpack_require__("../../../../../src/app/Services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Services_auth_service__ = __webpack_require__("../../../../../src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Services_hotel_service__ = __webpack_require__("../../../../../src/app/Services/hotel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages_module_flash_messages_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_hotel_hotel_component__ = __webpack_require__("../../../../../src/app/components/hotel/hotel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_hotel_details_hotel_details_component__ = __webpack_require__("../../../../../src/app/components/hotel-details/hotel-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_geolocation_geolocation_component__ = __webpack_require__("../../../../../src/app/components/geolocation/geolocation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_room_details_room_details_component__ = __webpack_require__("../../../../../src/app/components/room-details/room-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_confirm_page_confirm_page_component__ = __webpack_require__("../../../../../src/app/components/confirm-page/confirm-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_invoice_invoice_component__ = __webpack_require__("../../../../../src/app/components/invoice/invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__guards_can_reserve_guard__ = __webpack_require__("../../../../../src/app/guards/can-reserve.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__guards_confirm_guard_guard__ = __webpack_require__("../../../../../src/app/guards/confirm-guard.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var appRoute = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'authenticate', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'geolocation/:lat/:lon', component: __WEBPACK_IMPORTED_MODULE_19__components_hotel_hotel_component__["a" /* HotelComponent */] },
    { path: 'home/:roomType/:roomPrice/:hotelName', component: __WEBPACK_IMPORTED_MODULE_25__components_confirm_page_confirm_page_component__["a" /* ConfirmPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_can_reserve_guard__["a" /* CanReserveGuard */]] },
    { path: 'home/:roomType/:roomPrice/:hotelName/:roomType/:roomPrice', component: __WEBPACK_IMPORTED_MODULE_26__components_invoice_invoice_component__["a" /* InvoiceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_28__guards_confirm_guard_guard__["a" /* ConfirmGuardGuard */]] },
    // { path: '**', component: HomeComponent }
    { path: '**', redirectTo: 'home' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_hotel_hotel_component__["a" /* HotelComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_hotel_details_hotel_details_component__["a" /* HotelDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_geolocation_geolocation_component__["a" /* GeolocationComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_room_details_room_details_component__["a" /* RoomDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_confirm_page_confirm_page_component__["a" /* ConfirmPageComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_invoice_invoice_component__["a" /* InvoiceComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoute),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_22__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyC0fBZVHcDpPM620wwOLNttkrf2BN0wtFg'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__Services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_15__Services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__Services_hotel_service__["a" /* HotelService */], __WEBPACK_IMPORTED_MODULE_27__guards_can_reserve_guard__["a" /* CanReserveGuard */], __WEBPACK_IMPORTED_MODULE_28__guards_confirm_guard_guard__["a" /* ConfirmGuardGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/confirm-page/confirm-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wholeDiv\r\n{\r\n  \r\n    width:70%;\r\n    margin:auto;\r\n    margin-top: 20px;\r\n    outline: 2px solid rgb(15, 11, 11);\r\n    padding :20px;\r\n}\r\n\r\nh1, h5{\r\n    text-align: center;\r\n}\r\n\r\n.bookBtn\r\n{\r\n    float: right;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/confirm-page/confirm-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"print-section\">\r\n  <div class=\"wholeDiv wrapper\">\r\n\r\n  <h1>{{hotelName | uppercase}}</h1>\r\n  <h5> You have got a great room at ${{roomPrice}}</h5>\r\n\r\n  <div>\r\n    <br>\r\n    <h4 class=\"reservation-title\">RESERVATION TERMS</h4>\r\n    <p> By clicking \"Book\", you agree that you have read and accepted our Terms and Conditions. </p>\r\n    <hr>\r\n    <div class=\"row\">\r\n      <div class=\"column col-sm-8\">\r\n        You are Booking:\r\n        <strong>{{roomType}} </strong>\r\n      </div>\r\n      <div class=\"column col-sm-4\">\r\n        <button class=\"btn btn-primary bookBtn\" [routerLink]=\"[roomType,roomPrice]\">CONFIRM</button>\r\n        <button class=\"btn btn-primary bookBtn\" (click)=\"onBackClick()\">CANCEL</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div></div>"

/***/ }),

/***/ "../../../../../src/app/components/confirm-page/confirm-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_hotel_service__ = __webpack_require__("../../../../../src/app/Services/hotel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfirmPageComponent = /** @class */ (function () {
    // confirmationOfHotel: any[];
    function ConfirmPageComponent(route, hotelService, location) {
        this.route = route;
        this.hotelService = hotelService;
        this.location = location;
    }
    ConfirmPageComponent.prototype.ngOnInit = function () {
        this.roomPrice = this.route.snapshot.params['roomPrice'];
        this.roomType = this.route.snapshot.params['roomType'];
        console.log('roomType', this.roomType);
        console.log('p', this.route.snapshot.params);
        this.hotelName = this.route.snapshot.params['hotelName'];
        console.log('hotelName', this.hotelName);
    };
    ConfirmPageComponent.prototype.onBackClick = function () {
        this.location.back();
    };
    ConfirmPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm-page',
            template: __webpack_require__("../../../../../src/app/components/confirm-page/confirm-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/confirm-page/confirm-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__Services_hotel_service__["a" /* HotelService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]])
    ], ConfirmPageComponent);
    return ConfirmPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/geolocation/geolocation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n    height: 300px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/geolocation/geolocation.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!-- this creates a google map on the page with the given lat/lng from -->\r\n<!-- the component as the initial center of the map: -->\r\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n</agm-map>\r\n<app-hotel></app-hotel>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/geolocation/geolocation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GeolocationComponent = /** @class */ (function () {
    function GeolocationComponent() {
        this.title = 'Map';
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    GeolocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-geolocation',
            template: __webpack_require__("../../../../../src/app/components/geolocation/geolocation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/geolocation/geolocation.component.css")]
        })
    ], GeolocationComponent);
    return GeolocationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form\r\n{\r\n    margin:auto;\r\n}\r\n\r\n.form-control\r\n{\r\n    margin-left:15px;\r\n}\r\n\r\n.jumbotron\r\n{\r\n    width:90%;\r\n    margin:auto;\r\n}\r\n\r\n.text\r\n{\r\n    text-align: center;\r\n}\r\n\r\n.outMost\r\n{\r\n  width:90%;\r\n  margin:auto;\r\n  margin-top:10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.wrapper\r\n{\r\n  border: 2px solid black;\r\n  padding: 2px;\r\n  margin-bottom:15px;\r\n  margin-top:15px;\r\n\r\n}\r\n\r\n.column-left {\r\n  width: 40%;\r\n  padding-left:0px;\r\n}\r\n\r\n.column-right {\r\n  width: 60%;\r\n}\r\n\r\n.rowTwo\r\n{\r\n  margin:0px;\r\n}\r\n\r\n.responsive-image {\r\n  height: auto;\r\n  width: 100%;\r\n}\r\n\r\n.showMap\r\n{\r\n  margin-top:2px;\r\n}\r\n\r\n.rowFour\r\n{\r\n  height: 60px;\r\n  margin-top: 4px;\r\n  margin-left:0px;\r\n  padding: 2px;\r\n  border:2px solid black;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.features\r\n{\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n/* .roomDetails\r\n{\r\n  width:80%\r\n} */\r\n\r\n#noRoom\r\n{\r\n    background-color:yellow;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.noHotels\r\n{\r\n  \r\n  background-color: yellow;\r\n  width: 300px;\r\n  height: 300 px;\r\n  margin-top: 30px;\r\n  text-align: center;\r\n  margin:auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <div class=\"text\">\r\n      <h1>ROOM-SEWA</h1>\r\n      <p class=\"lead\"><strong>FIND YOUR HOTEL</strong></p>\r\n  </div>\r\n    \r\n    <br>\r\n      <form (submit)=\"onFindSubmit()\">\r\n        <div class=\"form-group\" class=\"row\">\r\n          <div class=\" form column col-10\">\r\n              <input type=\"text\" [(ngModel)]=\"place\" name=\"place\" placeholder=\"Please enter your destination\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"column col-2\">\r\n              <input type=\"submit\" class=\"btn btn-primary glyphicon glyphicon-search\" value=\"SEARCH\">\r\n          </div> \r\n        </div>\r\n        <br>\r\n        <br> \r\n        <br>\r\n      </form>\r\n</div>\r\n\r\n\r\n\r\n\r\n  <div class=\"outMost\" id=\"hotelList\" *ngIf =\"hotels\" >\r\n    <div class=\"row wrapper\" *ngFor=\"let hotel of hotels\">\r\n      <div class=\"column-left col-md-4\">\r\n        <img src=\"http://www.telegraph.co.uk/content/dam/Travel/leadAssets/35/50/nihiwatubed_3550753a-xlarge.jpg\" class=\"responsive-image\"\r\n          alt=\"hotel\">\r\n      </div>\r\n  \r\n      <div class=\"column-right col-md-8\">\r\n        <br>\r\n        <div class=\" row rowOne\">\r\n          <div class=\"col-md-8 col-xs-12\">\r\n            <label>\r\n              <strong>Name: </strong>\r\n            </label>\r\n            <strong>{{hotel.name}}</strong>\r\n          </div>\r\n          <div class=\"col-md-4 col-xs-12\">\r\n            <label>\r\n              <strong>Rating: </strong>\r\n            </label>\r\n            <strong>{{hotel.rating}}</strong>\r\n          </div>\r\n        </div>\r\n        <div class=\"row rowTwo col-xs-12\">\r\n          {{hotel.address.street}}, {{hotel.address.city}},{{hotel.address.state}}, {{hotel.address.country}}\r\n        </div>\r\n        <div class=\"row rowThree col-xs-12\">\r\n            <div class=\"col-md-8\">\r\n          <button class=\"btn btn-success\" (click) = \"onClickMap(hotel.location)\" >SHOW ON MAP</button>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            </div>\r\n        </div>\r\n        <div class=\"rowFour col-xs-12\">\r\n          {{hotel.description}} \r\n        </div>\r\n        <div class=\"row rowFive col-xs-12\">\r\n        <div class=\" features col-md-8\">\r\n          \r\n        </div>\r\n        \r\n        </div>\r\n      </div>\r\n  \r\n      <!-- Table-->\r\n            <!--Div for room details -->\r\n                 <div> \r\n                <hr>\r\n                    <table class=\"table table-hover roomDetails\" *ngIf=\"hotel.room.length!=0\">\r\n                  <thead>\r\n                    <tr>\r\n                      \r\n                      <th>Types of Room</th>\r\n                      <th>Rooms Available</th>\r\n                      <th>Price ($)</th>\r\n                      <th>Confirm</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let rm of hotel.room\">\r\n                      <td>{{rm.roomType}}</td>\r\n                      <td>{{rm.quantity}}</td>\r\n                      <td>{{rm.price}}</td>\r\n                      <td>\r\n                        <button class=\"btn btn-primary\" [routerLink]=\"[rm.roomType,rm.price,hotel.name]\">RESERVE</button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <div *ngIf=\"hotel.room.length==0\">\r\n                    <span id=\"noRoom\">ROOMS NOT AVAILABLE CURRENTLY</span>  \r\n                  </div> \r\n              </div>\r\n        \r\n        \r\n    </div>\r\n  </div>\r\n \r\n  <div hidden *ngIf =\"!hotels\">\r\n    <div class=\"noHotels\">\r\n      <br>\r\n      <p> No Hotels Found On This Location</p>\r\n      <br>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_hotel_service__ = __webpack_require__("../../../../../src/app/Services/hotel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module_flash_messages_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function HomeComponent(hotelService, flashMessage, router, activatedRoute) {
        this.hotelService = hotelService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    // calls getHotel() method on authService to fetch the list of hotels from server
    HomeComponent.prototype.onFindSubmit = function () {
        var _this = this;
        this.hotels = null;
        var loc = {
            place: this.place
        };
        this.hotelService.getHotel(loc).subscribe(function (data) {
            if (data) {
                _this.hotels = data;
                if (data.length == 0) {
                    _this.flashMessage.show('Oops! No hotels found on this location!', { cssClass: 'alert-danger' });
                }
            }
            else {
                _this.flashMessage.show('Oops! No hotels found on this location!', { cssClass: 'alert-danger' });
            }
        });
    };
    // Display Map
    HomeComponent.prototype.onClickMap = function (x) {
        var lat = x.lat;
        var lon = x.lon;
        this.router.navigate(['geolocation', lat, lon]);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_hotel_service__["a" /* HotelService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/hotel-details/hotel-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n  * {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    background-color: antiquewhite;\r\n}\r\n\r\n/* Create two unequal columns that floats next to each other */\r\n\r\n.column {\r\n    float: left;\r\n    /* padding: 10px; */\r\n    height: 300px; /* Should be removed. Only for demonstration */\r\n}\r\n\r\n.left {\r\n  width: 40%;\r\n}\r\n\r\n.right {\r\n  width: 60%;\r\n}\r\n\r\n/* Clear floats after the columns */\r\n\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n\r\n.wrapper\r\n{\r\n  margin: auto;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  outline: 2px solid rgb(15, 11, 11);\r\n}\r\n\r\n.row.wrapperInner\r\n{\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  outline: 2px solid rgb(15, 11, 11);\r\n  margin:left;\r\n  width:60%;\r\n  \r\n}\r\n\r\n.showRoom\r\n{\r\n  /* float:right;\r\n  margin-left:30px;\r\n  margin-bottom: 10px; */\r\n  /* position: absolute;\r\n  right:0;\r\n  bottom: 0; \r\n  position: absolute;*/\r\n  margin-left:20px;\r\n  margin-bottom: 20px;\r\n  float: right;\r\n}\r\n\r\n.outer\r\n{\r\n  margin:auto;\r\n  margin-top:10px;\r\n  margin-bottom: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/hotel-details/hotel-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width:950px; margin:auto; margin-top:10px;margin-bottom:10px;\">\r\n  <div class=\"row wrapper outer\" style=\"margin:auto\">\r\n    <div class=\"column left\">\r\n      <img src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\" style=\"height:300px; width:350px\"\r\n      />\r\n    </div>\r\n    <div class=\"column right\">\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-8\">\r\n          <label>\r\n            <strong>Name: </strong>\r\n          </label>\r\n          <strong>HOTEL NAME</strong>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <label>\r\n            <strong>Rating:</strong>\r\n          </label>\r\n          <strong> RATING</strong>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-sm-12\">\r\n        <!-- <p> Street, City, State, Country</p> -->\r\n        <label>\r\n          <strong>Address: </strong>\r\n        </label>\r\n        <p> DHULIKHEL, KATHMANDU, BAGMATI, NEPAL</p>\r\n      </div>\r\n      <div class=\"row col-sm-8\">\r\n        <button class=\"btn btn-primary\"> SHOW ON MAP</button>\r\n      </div>\r\n\r\n      <div class=\"row wrapperInner col-sm-12\">\r\n        <p>\r\n          ONE OF THE BEST HOTLELS IN NEPAL\r\n        </p>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-8 \">TV/WIFI/BATH TUB/ATTACHED REST ROOM</div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-8 \"></div>\r\n        <div class=\"col-sm-4 \">\r\n          <button class=\"showRoom btn btn-primary\" style=\"float:right; margin-right:30px\"> SHOW ROOM</button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--    \r\n<!-- <div layout=\"row\" style=\"max-width:300px\">\r\n    <img src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"image\" style=\"max-height: 500px; max-width:300px\"/>\r\n</div> -->\r\n<!-- <div layout=\"column\"  style=\"max-width: 50%;max-height: 20px\" flex=\"70\">\r\n  <div layout=\"column\"  style=\"max-width: 50%;max-height: 20px\">\r\n      <div flex style=\"max-width: 50%;max-height: 20px\">Ktm</div>\r\n      <div flex style=\"max-width: 50%;max-height: 20px\">1.4</div>\r\n  </div>\r\n<div layout=\"column\">\r\n    <div flex>Ktm</div>\r\n    <div flex>1.4</div>\r\n</div> \r\n\r\n</div>-->\r\n\r\n<!-- <div layout=\"row\" style=\"width: 50%; height: 50%\">\r\n\r\n    <span layout=\"column\" style=\"width: 50%; height: 100%\">\r\n      <img src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"image\" style=\"max-height: 500px; max-width:300px\"\r\n      />\r\n    </span>\r\n\r\n    <span layout=\"column\">\r\n      <img src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"image\" style=\"max-height: 500px; max-width:300px\"\r\n      />\r\n    </span>\r\n  </div> -->\r\n\r\n<!-- <div layout=\"row\">\r\n    <img src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"image\" style=\"max-height: 500px; max-width:300px\"\r\n    />\r\n  </div>\r\n  <div layout=\"row\" style=\"float: right\">\r\n    <div layout=\"column\">\r\n\r\n      <div flex> First Item</div>\r\n\r\n      <div flex> Second </div>\r\n      <div flex> Street, City, State, Country</div>\r\n      <div flex> Show On Map</div>\r\n      <div flex> One of the best hotels in Kathmandu</div>\r\n      <div flex>\r\n        <h3> Features</h3>\r\n      </div>\r\n      <div layout=\"column\">\r\n        TV, Wifi, Bath Tub\r\n      </div>\r\n      <button> Show Room</button>\r\n    </div>\r\n  </div> -->"

/***/ }),

/***/ "../../../../../src/app/components/hotel-details/hotel-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HotelDetailsComponent = /** @class */ (function () {
    function HotelDetailsComponent() {
    }
    HotelDetailsComponent.prototype.ngOnInit = function () {
    };
    HotelDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hotel-details',
            template: __webpack_require__("../../../../../src/app/components/hotel-details/hotel-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/hotel-details/hotel-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HotelDetailsComponent);
    return HotelDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/hotel/hotel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n    height: 300px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/hotel/hotel.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\r\n\r\n<!-- this creates a google map on the page with the given lat/lng from -->\r\n<!-- the component as the initial center of the map: -->\r\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n</agm-map>\r\n<br>\r\n<button class=\"btn btn-primary\" [routerLink]=\"['/']\"> Back </button> "

/***/ }),

/***/ "../../../../../src/app/components/hotel/hotel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HotelComponent = /** @class */ (function () {
    function HotelComponent(activatedRoute) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        activatedRoute.params.subscribe(function (params) {
            var latitude = parseFloat(params['lat']);
            var longitude = parseFloat(params['lon']);
            // Set default value if lat and lon is undefined
            if (!latitude || !longitude) {
                _this.lat = 51.678418;
                _this.lng = 7.809007;
            }
            else {
                _this.lat = latitude;
                _this.lng = longitude;
            }
        });
    }
    HotelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hotel',
            template: __webpack_require__("../../../../../src/app/components/hotel/hotel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/hotel/hotel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], HotelComponent);
    return HotelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/invoice/invoice.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".left {\r\n    width: 70%;\r\n  }\r\n  \r\n  .right {\r\n    width: 30%;\r\n  }\r\n  \r\n  .outer\r\n  {\r\n      width:80%;\r\n      margin:auto;\r\n      margin-top: 20px;\r\n  }\r\n  \r\n  table\r\n  {\r\n      width:80%;\r\n      margin: auto;\r\n  }\r\n  \r\n  .bottomText\r\n  {\r\n      text-align: center;\r\n  }\r\n  \r\n  .leftText\r\n  {\r\n      margin: left;\r\n  }\r\n\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/invoice/invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"outer\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-7\">\r\n            <p>\r\n                    Room-Sewa.com\r\n            </p>\r\n            <p>\r\n                Kathmandu, Nepal\r\n            </p>\r\n            <p>\r\n                Phone [9860 569842]\r\n            </p>\r\n        </div>\r\n        <div class=\"col-sm-5\">\r\n            <p>\r\n                    <!-- INVOICE NO: 1234 -->\r\n                    INVOICE NO: {{random}}\r\n            </p>\r\n          <p>\r\n                Date:  {{date | date:'yyyy-MM-dd'}}\r\n          </p>\r\n           \r\n        </div>\r\n    </div>\r\n</div>\r\n<br>\r\n<table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">QTY</th>\r\n            <th scope=\"col\">DESCRIPTION</th>\r\n            <th scope=\"col\">UNIT PRICE ($)</th>\r\n            <th scope=\"col\">AMOUNT ($)</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th>1</th>\r\n            <td>{{roomType}}</td>\r\n            <td>{{roomPrice}}</td>\r\n            <td>{{roomPrice}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n<br>\r\n\r\n      <div class=\"row bottomText\">\r\n            <div class=\"col-sm-7 leftText\">\r\n                <p>\r\n                       <strong>Make All Payment To The Hotel</strong> \r\n                </p>\r\n                <p class=\"leftText\">\r\n                   <strong>Thank You</strong>\r\n                </p>\r\n            </div>\r\n            <div class=\"col-sm-5\">\r\n                <p>\r\n                        SubTotal: ${{roomPrice}}\r\n                </p>\r\n              <p>\r\n                    Sales Tax: $ {{salesTax}}\r\n              </p>\r\n              <p>\r\n                    Total Due: $ {{totalPrice}}\r\n              </p>\r\n              <br>\r\n              <!-- <div class=\"row\"> -->\r\n                    <button class=\"btn btn-primary\" ng-click=\"export()\" (click)=\"print()\">Print </button>\r\n                <!-- </div> -->\r\n            </div>\r\n        </div>\r\n\r\n        "

/***/ }),

/***/ "../../../../../src/app/components/invoice/invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_hotel_service__ = __webpack_require__("../../../../../src/app/Services/hotel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(hotelService, route, flash) {
        this.hotelService = hotelService;
        this.route = route;
        this.flash = flash;
        this.flash.show("YOUR ROOM IS CONFIRMED!", { cssClass: 'alert-success', timeout: 1000 });
    }
    InvoiceComponent.prototype.ngOnInit = function () {
        this.date = new Date();
        this.random = Math.floor(Math.random() * 20);
        this.salesTax = 5;
        this.roomPrice = this.route.snapshot.params['roomPrice'];
        this.roomType = this.route.snapshot.params['roomType'];
        this.rp = Number(this.roomPrice);
        this.totalPrice = this.rp + this.salesTax;
    };
    // Print Documents
    InvoiceComponent.prototype.print = function () {
        var printContents, popupWin;
        printContents = document.getElementById('print-section');
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>Print tab</title>\n          <style>\n          //........Customized style.......\n          </style>\n        </head>\n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    InvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__("../../../../../src/app/components/invoice/invoice.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/invoice/invoice.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_hotel_service__["a" /* HotelService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group\r\n{\r\n    width:80%\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">LOGIN</h2>\r\n<form (submit)=\"onLoginSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>UserName</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n  </div>\r\n\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_auth_service__ = __webpack_require__("../../../../../src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_validate_service__ = __webpack_require__("../../../../../src/app/Services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
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
    function LoginComponent(authService, router, route, flashMessage, validateService) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log('route', this.route.snapshot);
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        // Validate Required Fields
        if (!this.validateService.validateLogin(user)) {
            this.flashMessage.show('Please fill in all fields!', { cssClass: 'alert-danger', timeout: 1000 });
            return false;
        }
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('Successfully LoggedIn', { cssClass: 'alert-success', timeout: 1000 });
                _this.router.navigate(['home']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 1000 });
                _this.router.navigate(['./authenticate']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__Services_validate_service__["a" /* ValidateService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-green\r\n{\r\n    margin-right:10px;\r\n}\r\n\r\n\r\n.navbar-right\r\n{\r\n    float:right;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\r\n  <a class=\"navbar-brand\" [routerLink] = \"['']\">ROOM-SEWA</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\">\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n        <li>\r\n          <button class=\"btn btn-green navbar-btn\" *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/profile']\">{{user}}\r\n          </button>\r\n          </li>\r\n      <li [routerLinkActive] = \"['active']\"  [routerLinkActiveOptions] =\"{exact: true}\">\r\n        <button class=\"btn btn-green navbar-btn\"  *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/authenticate']\">LOGIN\r\n        </button>\r\n      </li>\r\n      <li [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] =\"{exact: true}\">\r\n        <button class=\"btn btn-green navbar-btn\" *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/register']\">SIGNUP\r\n        </button>\r\n      </li>\r\n      <li>\r\n        <button class=\"btn btn-green navbar-btn\" *ngIf=\"authService.loggedIn()\" (click) = \"onLogoutClick()\" [routerLink] =\"['']\" >LOGOUT\r\n        </button>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n</nav>\r\n<br />\r\n<br />\r\n \r\n<hr />\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_auth_service__ = __webpack_require__("../../../../../src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.user = localStorage.name;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logOut();
        this.flashMessage.show('You are Logged Out!', { cssClass: 'alert-danger', timeout: 500 });
        this.router.navigate(['']);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"user\">\r\n  <h2 class=\"page-header\">{{user}}</h2>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">User Name: {{user}}</li>\r\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\r\n  </ul>  \r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_auth_service__ = __webpack_require__("../../../../../src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        console.log(authService.loggedIn());
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = localStorage.name;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">SignUP</h2>\r\n<form (submit)=\"onRegisterSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Name</label>\r\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>UserName</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>Email</label>\r\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n  </div>\r\n\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_validate_service__ = __webpack_require__("../../../../../src/app/Services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_auth_service__ = __webpack_require__("../../../../../src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Validate Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields!', { cssClass: 'alert-danger', timeout: 1000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email!', { cssClass: 'alert-danger', timeout: 1000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered!', { cssClass: 'alert-success', timeout: 1000 });
                _this.router.navigate(['/login']);
            }
            else {
                console.log(data);
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 1000 });
                _this.router.navigate(['./register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__Services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/room-details/room-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table\r\n{\r\n    width:80%;\r\n   margin:auto;\r\n   margin-top:20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/room-details/room-details.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <table class=\"table table-hover\" >\n    <thead>\n      <tr>\n        <th>Types of Room</th>\n        <th>Rooms Available</th>\n        <th>Capacity</th>\n        <th>Price ($)</th>\n        <th>Confirm</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr  *ngFor=\"let room of rooms\">\n        <td>{{room.roomType}}</td>\n        <td>{{room.quantity}}</td>\n        <td>{{room.capacity}}</td>\n        <td>{{room.price}}</td>\n        <td><button class=\"btn btn-primary\" [routerLink]=\"[roomType]\">RESERVE</button></td>\n      </tr>\n    </tbody>\n  </table>"

/***/ }),

/***/ "../../../../../src/app/components/room-details/room-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_hotel_service__ = __webpack_require__("../../../../../src/app/Services/hotel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomDetailsComponent = /** @class */ (function () {
    function RoomDetailsComponent(hotelService, route) {
        var _this = this;
        this.hotelService = hotelService;
        this.route = route;
        {
            //fetching the value of parameter from route.snapshot
            this.hotel = this.route.snapshot.params['hotel._id'];
            console.log('place', this.hotel);
            //subscribing to get the data
            this.hotelService.getHotel(this.hotel).subscribe(function (data) {
                if (data) {
                    console.log('filter', data);
                    _this.rooms = data.filter(function (data) { return data._id == _this.hotel; });
                    console.log('rooms', _this.rooms);
                    console.log(JSON.stringify(_this.rooms));
                }
                else {
                    // this.flashMessage.show('Oops! No Rooms found on this hotel!', { cssClass: 'alert-danger' });
                }
            });
        }
    }
    RoomDetailsComponent.prototype.ngOnInit = function () {
        //from the current url, retrieve and assign to id
        console.log('hjdf', this.route.snapshot.params['hotel.name']);
        var id = this.route.snapshot.params['id'];
    };
    RoomDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-room-details',
            template: __webpack_require__("../../../../../src/app/components/room-details/room-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/room-details/room-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_hotel_service__["a" /* HotelService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], RoomDetailsComponent);
    return RoomDetailsComponent;
}());

var ELEMENT_DATA = [];


/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_auth_service__ = __webpack_require__("../../../../../src/app/Services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        // if(this.authService.loggedIn()){
        //     return true;
        // } 
        if (localStorage.getItem('name')) {
            // logged in so return true
            return true;
        }
        else {
            this.router.navigate(['/authenticate']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/can-reserve.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanReserveGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_auth_service__ = __webpack_require__("../../../../../src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanReserveGuard = /** @class */ (function () {
    function CanReserveGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CanReserveGuard.prototype.canActivate = function (next, state) {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['authenticate']);
            return false;
        }
    };
    CanReserveGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CanReserveGuard);
    return CanReserveGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/confirm-guard.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmGuardGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConfirmGuardGuard = /** @class */ (function () {
    function ConfirmGuardGuard() {
    }
    ConfirmGuardGuard.prototype.canActivate = function (next, state) {
        var x = window.confirm("Do you want to proceed ahead?");
        if (x)
            return true;
        return false;
    };
    ConfirmGuardGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ConfirmGuardGuard);
    return ConfirmGuardGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["a" /* FlexLayoutModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["a" /* FlexLayoutModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map