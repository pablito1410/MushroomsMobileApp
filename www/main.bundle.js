webpackJsonp([1,4],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AuthenticationGuard = (function () {
    function AuthenticationGuard(router, document) {
        this.router = router;
        this.document = document;
    }
    AuthenticationGuard.prototype.canActivate = function (route, state) {
        if (+document.location.port == 4200) {
            // for only frontend development purposes
            return true;
        }
        if (localStorage.getItem('token')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    };
    return AuthenticationGuard;
}());
AuthenticationGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, Object])
], AuthenticationGuard);

var _a;
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/authentication.guard.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login-cmp',
        template: __webpack_require__(370)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/login.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'register-cmp',
        template: __webpack_require__(371)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/register.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_discovery_service__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoveriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiscoveriesComponent = (function () {
    function DiscoveriesComponent(dialog, discoveryService) {
        this.dialog = dialog;
        this.discoveryService = discoveryService;
        this.model = {};
    }
    DiscoveriesComponent.prototype.ngOnInit = function () {
        // this.discoveryService.getAll().subscribe(
        //     value => this.discoveries = value
        // );
        this.discoveries = [
            { id: 'Podgrzybek' },
            { id: 'Maślak' },
            { id: 'Pieczarka' },
            { id: 'Kurka' },
            { id: 'Muchomor' }
        ];
    };
    DiscoveriesComponent.prototype.openAddDiscoveriesDialog = function () {
    };
    return DiscoveriesComponent;
}());
DiscoveriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'discoveries-cmp',
        template: __webpack_require__(373)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_discovery_service__["a" /* DiscoveryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_discovery_service__["a" /* DiscoveryService */]) === "function" && _b || Object])
], DiscoveriesComponent);

var _a, _b;
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/discoveries.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_friends_search_friends_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_friend_service__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FriendsComponent = (function () {
    function FriendsComponent(dialog, friendService) {
        this.dialog = dialog;
        this.friendService = friendService;
        this.model = {};
    }
    FriendsComponent.prototype.openSearchFriendsDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__search_friends_search_friends_component__["a" /* SearchFriendsComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.selectedOption = result;
        });
    };
    FriendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.friendService.getAll().subscribe(function (value) { return _this.users = value; });
    };
    return FriendsComponent;
}());
FriendsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'friends-cmp',
        template: __webpack_require__(374)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_friend_service__["a" /* FriendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_friend_service__["a" /* FriendService */]) === "function" && _b || Object])
], FriendsComponent);

var _a, _b;
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/friends.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFriendsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchFriendsComponent = (function () {
    function SearchFriendsComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return SearchFriendsComponent;
}());
SearchFriendsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'search-friends-cmp',
        template: __webpack_require__(375)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object])
], SearchFriendsComponent);

var _a;
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/search-friends.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        $('[data-toggle="checkbox"]').each(function () {
            if ($(this).data('toggle') == 'switch')
                return;
            var $checkbox = $(this);
            $checkbox.checkbox();
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home-cmp',
        template: __webpack_require__(376)
    })
], HomeComponent);

//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/home.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapsComponent = (function () {
    function MapsComponent() {
        this.zoom = 8;
        this.lat = 50.287977;
        this.lng = 18.677049;
    }
    MapsComponent.prototype.ngOnInit = function () {
        this.markers = [
            {
                lat: 51.673858,
                lng: 7.815982,
                label: 'A',
                draggable: true
            },
            {
                lat: 51.373858,
                lng: 7.215982,
                label: 'B',
                draggable: false
            },
            {
                lat: 51.723858,
                lng: 7.895982,
                label: 'C',
                draggable: true
            }
        ];
    };
    MapsComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    MapsComponent.prototype.mapClicked = function ($event) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            label: null,
            draggable: null
        });
    };
    MapsComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    return MapsComponent;
}());
MapsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'maps-cmp',
        template: __webpack_require__(377)
    })
], MapsComponent);

//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/maps.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationsComponent = (function () {
    function NotificationsComponent() {
    }
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'notifications-cmp',
        template: __webpack_require__(378)
    })
], NotificationsComponent);

//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/notifications.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_trip_service__ = __webpack_require__(121);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripsComponent = (function () {
    function TripsComponent(tripService) {
        this.tripService = tripService;
        this.model = {};
    }
    TripsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model = JSON.parse(localStorage.getItem('currentUser'));
        var user = this.model;
        this.tripService.getAll().subscribe(function (value) { return _this.trips = value; }
        // error => this.anyErrors = true,
        // () => this.finished = true
        );
    };
    return TripsComponent;
}());
TripsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'trips-cmp',
        template: __webpack_require__(379)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_trip_service__["a" /* TripService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_trip_service__["a" /* TripService */]) === "function" && _a || Object])
], TripsComponent);

var _a;
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/trips.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.model = {};
        this.loading = false;
        this.imageSrc = '';
    }
    UserComponent.prototype.ngOnInit = function () {
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            this.model = JSON.parse(currentUser);
        }
    };
    UserComponent.prototype.handleReaderLoaded = function (e) {
        var reader = e.target;
        this.imageSrc = reader.result;
    };
    UserComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this.handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    UserComponent.prototype.update = function () {
        var _this = this;
        this.loading = true;
        this.userService.update(this.model)
            .subscribe(function (data) {
            // this.alertService.success('Registration successful', true);
            _this.router.navigate(['/user']);
        }, function (error) {
            // this.alertService.error(error);
            _this.loading = false;
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-cmp',
        template: __webpack_require__(380)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/user.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoveryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiscoveryService = (function () {
    function DiscoveryService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    DiscoveryService.prototype.getAll = function () {
        return this.http.get('/api/discoveries', this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    DiscoveryService.prototype.getById = function (id) {
        return this.http.get('/api/discoveries/' + id, this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    DiscoveryService.prototype.create = function (discovery) {
        return this.http.post('/api/discoveries', discovery, this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    DiscoveryService.prototype.update = function (discovery) {
        return this.http.put('/api/discoveries/' + discovery.id, discovery, this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    DiscoveryService.prototype.delete = function (id) {
        return this.http.delete('/api/discoveries/' + id, this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    return DiscoveryService;
}());
DiscoveryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], DiscoveryService);

var _a, _b;
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/discovery.service.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FriendService = (function () {
    function FriendService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    FriendService.prototype.getAll = function () {
        return this.http.get('/api/friends', this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    FriendService.prototype.create = function (id) {
        return this.http.post('/api/friends', id, this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    FriendService.prototype.delete = function (id) {
        return this.http.delete('/api/friends/' + id, this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    return FriendService;
}());
FriendService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], FriendService);

var _a, _b;
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/friend.service.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TripService = (function () {
    function TripService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    TripService.prototype.getAll = function () {
        return this.http.get('/api/trips', this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    TripService.prototype.getById = function (id) {
        return this.http.get('/api/trips/' + id, this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    TripService.prototype.create = function (trip) {
        return this.http.post('/api/trips', trip, this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    TripService.prototype.update = function (trip) {
        return this.http.put('/api/trips/' + trip.id, trip, this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    TripService.prototype.delete = function (id) {
        return this.http.delete('/api/trips/' + id, this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    return TripService;
}());
TripService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], TripService);

var _a, _b;
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/trip.service.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });

var ROUTES = [
    { path: 'dashboard', title: 'Dashboard', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'material-icons' },
    { path: 'user', title: 'User profile', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'material-icons' },
    { path: 'trips', title: 'Trips', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'material-icons' },
    { path: 'discoveries', title: 'Discoveries', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'material-icons' },
    { path: 'friends', title: 'Friends', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'material-icons' },
    { path: 'notifications', title: 'Notifications', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'material-icons text-gray' },
    { path: 'maps', title: 'Maps', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'material-icons' }
];
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/sidebar-routes.config.js.map

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 184;


/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(193);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/main.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AppComponent = (function () {
    function AppComponent(location, document) {
        this.document = document;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        $.getScript('../assets/js/material-dashboard.js');
        $.getScript('../assets/js/initMenu.js');
    };
    AppComponent.prototype.isMaps = function (path) {
        var title = this.location.prepareExternalUrl(this.location.path());
        title = title.slice(1);
        if (path == title) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.isLoggedIn = function () {
        if (+document.location.port == 4200) {
            // for only frontend development purposes
            return true;
        }
        if (localStorage.getItem('token')) {
            // logged in so return true
            return true;
        }
        return false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'my-app',
        template: __webpack_require__(368)
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _a || Object, Object])
], AppComponent);

var _a;
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/app.component.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_module__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_module__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_footer_footer_module__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_navbar_navbar_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authentication_authentication_guard__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_alert_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_authentication_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routes__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_trip_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_tag_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_discovery_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_comment_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__authentication_authentication_module__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_friend_service__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_15__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_module__["a" /* DashboardModule */],
            __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_module__["a" /* SidebarModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared_navbar_navbar_module__["a" /* NavbarModule */],
            __WEBPACK_IMPORTED_MODULE_7__shared_footer_footer_module__["a" /* FooterModule */],
            __WEBPACK_IMPORTED_MODULE_20__authentication_authentication_module__["a" /* AuthenticationModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_routes__["a" /* APP_ROUTES */])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__authentication_authentication_guard__["a" /* AuthenticationGuard */],
            __WEBPACK_IMPORTED_MODULE_11__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_12__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_16__services_trip_service__["a" /* TripService */],
            __WEBPACK_IMPORTED_MODULE_17__services_tag_service__["a" /* TagService */],
            __WEBPACK_IMPORTED_MODULE_18__services_discovery_service__["a" /* DiscoveryService */],
            __WEBPACK_IMPORTED_MODULE_19__services_comment_service__["a" /* CommentService */],
            __WEBPACK_IMPORTED_MODULE_21__services_friend_service__["a" /* FriendService */],
            { provide: __WEBPACK_IMPORTED_MODULE_9__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_9__angular_common__["b" /* HashLocationStrategy */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/app.module.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_login_login_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_register_register_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_guard__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_home_home_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_user_user_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_friends_friends_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_trips_trips_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_notifications_notifications_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_discoveries_discoveries_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_maps_maps_component__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES; });










var APP_ROUTES = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__authentication_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__authentication_register_register_component__["a" /* RegisterComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__authentication_authentication_guard__["a" /* AuthenticationGuard */]] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__authentication_authentication_guard__["a" /* AuthenticationGuard */]] },
    { path: 'trips', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_trips_trips_component__["a" /* TripsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__authentication_authentication_guard__["a" /* AuthenticationGuard */]] },
    { path: 'discoveries', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_discoveries_discoveries_component__["a" /* DiscoveriesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__authentication_authentication_guard__["a" /* AuthenticationGuard */]] },
    { path: 'friends', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_friends_friends_component__["a" /* FriendsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__authentication_authentication_guard__["a" /* AuthenticationGuard */]] },
    { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_notifications_notifications_component__["a" /* NotificationsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__authentication_authentication_guard__["a" /* AuthenticationGuard */]] },
    { path: 'maps', component: __WEBPACK_IMPORTED_MODULE_9__dashboard_maps_maps_component__["a" /* MapsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__authentication_authentication_guard__["a" /* AuthenticationGuard */]] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/app.routes.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationComponent = (function () {
    function AuthenticationComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.token = localStorage.getItem('token');
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    AuthenticationComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).subscribe(function () { _this.loadAllUsers(); });
    };
    AuthenticationComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    return AuthenticationComponent;
}());
AuthenticationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'authentication-cmp',
        template: __webpack_require__(369)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], AuthenticationComponent);

var _a;
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/authentication.component.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_alert_alert_module__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__equal_validator_directive__ = __webpack_require__(197);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AuthenticationModule = (function () {
    function AuthenticationModule() {
    }
    return AuthenticationModule;
}());
AuthenticationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_alert_alert_module__["a" /* AlertModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__authentication_component__["a" /* AuthenticationComponent */],
            __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__equal_validator_directive__["a" /* EqualValidator */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__authentication_component__["a" /* AuthenticationComponent */],
            __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
        ]
    })
], AuthenticationModule);

//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/authentication.module.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = EqualValidator_1 = (function () {
    function EqualValidator(validateEqual) {
        this.validateEqual = validateEqual;
    }
    EqualValidator.prototype.validate = function (c) {
        // self value (e.g. retype password)
        var v = c.value;
        // control value (e.g. password)
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value)
            return {
                validateEqual: false
            };
        return null;
    };
    return EqualValidator;
}());
EqualValidator = EqualValidator_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
        ]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('validateEqual')),
    __metadata("design:paramtypes", [String])
], EqualValidator);

var EqualValidator_1;
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/equal-validator.directive.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard-cmp',
        template: __webpack_require__(372)
    })
], DashboardComponent);

//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/dashboard.component.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__friends_friends_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trips_trips_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notifications_notifications_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__discoveries_discoveries_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__maps_maps_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_google_maps_core__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__friends_search_friends_search_friends_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_material__["c" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_material__["d" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["h" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_13_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDd7pfi7_Du2senx4g4lLArVguhMd2LUKY'
            })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_6__friends_friends_component__["a" /* FriendsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__trips_trips_component__["a" /* TripsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__notifications_notifications_component__["a" /* NotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__discoveries_discoveries_component__["a" /* DiscoveriesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__maps_maps_component__["a" /* MapsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__friends_search_friends_search_friends_component__["a" /* SearchFriendsComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_14__friends_search_friends_search_friends_component__["a" /* SearchFriendsComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_6__friends_friends_component__["a" /* FriendsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__trips_trips_component__["a" /* TripsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__notifications_notifications_component__["a" /* NotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__discoveries_discoveries_component__["a" /* DiscoveriesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__maps_maps_component__["a" /* MapsComponent */]
        ]
    })
], DashboardModule);

//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/dashboard.module.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentService = (function () {
    function CommentService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    CommentService.prototype.getAll = function () {
        return this.http.get('/api/comments', this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    CommentService.prototype.getById = function (id) {
        return this.http.get('/api/comments/' + id, this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    CommentService.prototype.create = function (comment) {
        return this.http.post('/api/comments', comment, this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    CommentService.prototype.update = function (comment) {
        return this.http.put('/api/comments/' + comment.id, comment, this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    CommentService.prototype.delete = function (id) {
        return this.http.delete('/api/comments/' + id).map(function (response) { return response.json(); });
    };
    return CommentService;
}());
CommentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], CommentService);

var _a, _b;
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/comment.service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TagService = (function () {
    function TagService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    TagService.prototype.getAll = function () {
        return this.http.get('/api/tags', this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    TagService.prototype.getById = function (id) {
        return this.http.get('/api/tags/' + id, this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    TagService.prototype.create = function (tag) {
        return this.http.post('/api/tags', tag, this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    TagService.prototype.update = function (tag) {
        return this.http.put('/api/tags/' + tag.id, tag, this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    TagService.prototype.delete = function (id) {
        return this.http.delete('/api/tags/' + id, this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    return TagService;
}());
TagService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], TagService);

var _a, _b;
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/tag.service.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'alert-cmp',
        template: __webpack_require__(381)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/alert.component.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_component__ = __webpack_require__(202);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AlertModule = (function () {
    function AlertModule() {
    }
    return AlertModule;
}());
AlertModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__alert_component__["a" /* AlertComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__alert_component__["a" /* AlertComponent */]]
    })
], AlertModule);

//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/alert.module.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'footer-cmp',
        template: __webpack_require__(382)
    })
], FooterComponent);

//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/footer.component.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__(204);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
    })
], FooterModule);

//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/footer.module.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_routes_config__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_metadata__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(location, authenticationService) {
        this.authenticationService = authenticationService;
        this.location = location;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_routes_config__["a" /* ROUTES */].filter(function (listTitle) { return listTitle.menuType !== __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_metadata__["a" /* MenuType */].BRAND; });
    };
    NavbarComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navbar-cmp',
        template: __webpack_require__(383)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/navbar.component.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__(206);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]]
    })
], NavbarModule);

//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/navbar.module.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_routes_config__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_metadata__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        $.getScript('../../assets/js/material-dashboard-angular.js');
        this.menuItems = __WEBPACK_IMPORTED_MODULE_1__sidebar_routes_config__["a" /* ROUTES */].filter(function (menuItem) { return menuItem.menuType !== __WEBPACK_IMPORTED_MODULE_2__sidebar_metadata__["a" /* MenuType */].BRAND; });
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sidebar-cmp',
        template: __webpack_require__(384),
    })
], SidebarComponent);

//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/sidebar.component.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__(208);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["a" /* SidebarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["a" /* SidebarComponent */]]
    })
], SidebarModule);

//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/sidebar.module.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/environment.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (email, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var urlSearchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        urlSearchParams.append('email', email);
        urlSearchParams.append('password', password);
        var body = urlSearchParams.toString();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post('/login', body, options)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.headers.get('Authorization').replace('Bearer ', '');
            if (token) {
                // store jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', token);
            }
            var user = response.json();
            if (user) {
                // store user details
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    // login(email: string, password: string) {
    //     return this.http.post('/login', JSON.stringify({ email: email, password: password }))
    //         .map((response: Response) => {
    //             // login successful if there's a jwt token in the response
    //             let user = response.json();
    //             if (user && user.token) {
    //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //             }
    //         });
    // }
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.jwt = function () {
        // create authorization header with jwt token
        var token = localStorage.getItem('token');
        if (token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Authorization': 'Bearer ' + token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        }
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/authentication.service.js.map

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div>\r\n        <div *ngIf=\"isLoggedIn()\" class=\"sidebar\" data-color='brown' data-image=\"\">\r\n            <sidebar-cmp></sidebar-cmp>\r\n            <div class=\"sidebar-background\" style=\"background-image: url(../assets/img/sidebar.jpg)\"></div>\r\n        </div>\r\n        <div class=\"main-panel\">\r\n            <div *ngIf=\"isLoggedIn()\">\r\n                <navbar-cmp></navbar-cmp>\r\n            </div>\r\n            <dashboard-cmp></dashboard-cmp>\r\n            <div *ngIf=\"isLoggedIn() && isMaps('/maps')\">\r\n                <footer-cmp></footer-cmp>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 369:
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\r\n<!--<div class=\"authentication\">-->\r\n    <div class=\"container\">\r\n        <div class=\"col-sm-8 col-sm-offset-2\">\r\n            <alert-cmp></alert-cmp>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n<!--</div>-->"

/***/ }),

/***/ 370:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n    <h2>Login</h2>\r\n    <form name=\"login-form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group label-floating\" [ngClass]=\"{ 'has-error': f.submitted && (!email.valid || !email.pristine) }\">\r\n            <label class=\"control-label\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\"\r\n                   #email=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\" required />\r\n            <div *ngIf=\"f.submitted && (!email.valid || !email.pristine)\" class=\"help-block\">\r\n                Email is required, format should be <i>name@mail.com</i>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group label-floating\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n            <label class=\"control-label\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && (!password.valid || !password.pristine)\" class=\"help-block\">\r\n                Password is required, should contain between 4 and 30 characters\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ 371:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n    <h2>Register</h2>\r\n    <form name=\"register-form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group label-floating\" [ngClass]=\"{ 'has-error': f.submitted && (!email.valid || !email.pristine) }\">\r\n            <label class=\"control-label\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\"\r\n                   #email=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\" required />\r\n            <div *ngIf=\"f.submitted && (!email.valid || !email.pristine)\" class=\"help-block\">\r\n                Email is required, format should be <i>name@mail.com</i>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group label-floating\" [ngClass]=\"{ 'has-error': f.submitted && (!username.valid || !username.pristine) }\">\r\n            <label class=\"control-label\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\"\r\n                   #username=\"ngModel\" minlength=\"4\" maxlength=\"30\" required />\r\n            <div *ngIf=\"f.submitted && (!username.valid || !username.pristine)\" class=\"help-block\">\r\n                Username is required, should contain between 4 and 30 characters\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group label-floating\" [ngClass]=\"{ 'has-error': f.submitted && (!password.valid || !password.pristine) }\">\r\n            <label class=\"control-label\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\"\r\n                   #password=\"ngModel\" minlength=\"4\" maxlength=\"30\" required />\r\n            <div *ngIf=\"f.submitted && (!password.valid || !password.pristine)\" class=\"help-block\">\r\n                Password is required, should contain between 4 and 30 characters\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group label-floating\" [ngClass]=\"{ 'has-error': f.submitted && (!repeat.valid || !repeat.pristine) }\">\r\n            <label class=\"control-label\">Repeat password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"repeat\" [(ngModel)]=\"repeatedPassword\"\r\n                   validateEqual=\"password\" #repeat=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && (!repeat.valid || !repeat.pristine)\" class=\"help-block\">\r\n                Different passwords are given\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 373:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"brown\">\r\n                        <h4 class=\"title\">Your Discoveries</h4>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <md-grid-list cols=\"4:2\">\r\n                            <div *ngFor=\"let discovery of discoveries\">\r\n                                <md-grid-tile>\r\n                                    <div class=\"card card-profile\">\r\n                                        <div class=\"card-avatar\">\r\n                                            <img class=\"img\" src=\"..\\assets\\img\\mushrooms-icon.png\"/>\r\n                                        </div>\r\n                                        <div class=\"content\">\r\n                                            <h5 class=\"category text-gray\">{{discovery.id}}</h5>\r\n                                        </div>\r\n                                    </div>\r\n                                </md-grid-tile>\r\n                            </div>\r\n                        </md-grid-list>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <button class=\"btn btn-primary\" (click)=\"openAddDiscoveryDialog()\">Add Discovery</button>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <button class=\"btn btn-primary\" (click)=\"openSearchDiscoveryDialog()\">Search Discoveries</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 374:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"brown\">\r\n                        <h4 class=\"title\">Yours Friends</h4>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <md-grid-list cols=\"4:2\">\r\n                            <div *ngFor=\"let user of users\">\r\n                                <md-grid-tile>\r\n                                    <div class=\"card card-profile friend-card\">\r\n                                        <div class=\"card-avatar\">\r\n                                            <img class=\"img\" src=\"..\\assets\\img\\faces\\default-user.png\"/>\r\n                                        </div>\r\n                                        <div class=\"content\">\r\n                                            <h5 class=\"category text-gray\">{{user.username}}</h5>\r\n                                        </div>\r\n                                    </div>\r\n                                </md-grid-tile>\r\n                            </div>\r\n                        </md-grid-list>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <button class=\"btn btn-primary\" (click)=\"openSearchFriendsDialog()\">Search Friends</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 375:
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Search Friends</h1>\r\n<div md-dialog-content>\r\n    <form role=\"search\">\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n            <span class=\"material-input\"></span>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n            <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\r\n        </button>\r\n    </form>\r\n</div>\r\n<div md-dialog-actions>\r\n    <button class=\"btn btn-primary\" md-button (click)=\"dialogRef.close('Ok')\">Ok</button>\r\n    <button class=\"btn btn-primary\" md-button (click)=\"dialogRef.close('Close')\">Close</button>\r\n</div>"

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n               <!--TODO-->\r\n            </div>\r\n            <div class=\"row\">\r\n                <!--TODO-->\r\n            </div>\r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

module.exports = "<sebm-google-map\r\n        [latitude]=\"lat\"\r\n        [longitude]=\"lng\"\r\n        [zoom]=\"zoom\"\r\n        [disableDefaultUI]=\"false\"\r\n        [zoomControl]=\"false\"\r\n        (mapClick)=\"mapClicked($event)\">\r\n\r\n    <sebm-google-map-marker\r\n            *ngFor=\"let m of markers; let i = index\"\r\n            (markerClick)=\"clickedMarker(m.label, i)\"\r\n            [latitude]=\"m.lat\"\r\n            [longitude]=\"m.lng\"\r\n            [label]=\"m.label\"\r\n            [markerDraggable]=\"m.draggable\"\r\n            (dragEnd)=\"markerDragEnd(m, $event)\">\r\n\r\n        <sebm-google-map-info-window>\r\n            <strong>InfoWindow content</strong>\r\n        </sebm-google-map-info-window>\r\n\r\n    </sebm-google-map-marker>\r\n\r\n    <sebm-google-map-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\"\r\n                            [radius]=\"5000\"\r\n                            [fillColor]=\"'red'\"\r\n                            [circleDraggable]=\"true\"\r\n                            [editable]=\"true\">\r\n    </sebm-google-map-circle>\r\n\r\n</sebm-google-map>\r\n"

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"card\">\r\n            <!--TODO-->\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 379:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"brown\">\r\n                        <h4 class=\"title\">Your Trips</h4>\r\n                    </div>\r\n                    <div class=\"card-content table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"text-danger\">\r\n                                <tr>\r\n                                    <th>Place</th>\r\n                                    <th>Time</th>\r\n                                    <!--<th>Status</th>-->\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let trip of trips\">\r\n                                    <td>{{trip.place}}</td>\r\n                                    <td>{{trip.dateTime}}</td>\r\n                                    <!--<td>{{trip.status()}}</td>-->\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 380:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"brown\">\r\n                        <h4 class=\"title\">Edit Profile</h4>\r\n                        <p class=\"category\">Complete your profile</p>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <form name=\"user-form\" (ngSubmit)=\"f.form.valid && update()\" #f=\"ngForm\" novalidate>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"{ 'has-error': f.submitted && (!email.valid || !email.pristine) }\">\r\n                                        <label class=\"control-label\">Email</label>\r\n                                        <input type=\"email\" class=\"form-control\" name=\"email\"  [(ngModel)]=\"model.email\"\r\n                                               #email=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\" required />\r\n                                        <div *ngIf=\"f.submitted && (!email.valid || !email.pristine)\" class=\"help-block\">\r\n                                            Email is required format should be <i>name@mail.com</i>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"{ 'has-error': f.submitted && (!username.valid || !username.pristine) }\">\r\n                                        <label class=\"control-label\">Username</label>\r\n                                        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\"\r\n                                               #username=\"ngModel\" minlength=\"4\" maxlength=\"30\" required />\r\n                                        <div *ngIf=\"f.submitted && (!username.valid || !username.pristine)\" class=\"help-block\">\r\n                                            Username is required, should contain between 4 and 30 characters\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"{ 'has-error': f.submitted && (!firstName.valid || !firstName.pristine) }\">\r\n                                        <label class=\"control-label\">First Name</label>\r\n                                        <input type=\"text\" class=\"form-control\" name=\"first-name\" [(ngModel)]=\"model.firstName\"\r\n                                               #firstName=\"ngModel\" />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"{ 'has-error': f.submitted && (!lastName.valid || !lastName.pristine) }\">\r\n                                        <label class=\"control-label\">Last Name</label>\r\n                                        <input type=\"text\" class=\"form-control\" name=\"last-name\" [(ngModel)]=\"model.lastName\"\r\n                                               #lastName=\"ngModel\"/>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"{ 'has-error': f.submitted && (!birthDate.valid || !birthDate.pristine) }\">\r\n                                        <md-input-container >\r\n                                            <input mdInput [mdDatepicker]=\"picker\" class=\"form-control\" name=\"birth-date\" [(ngModel)]=\"model.birthDate\"\r\n                                                #birthDate=\"ngModel\" placeholder=\"Birth Date\" />\r\n                                            <button mdSuffix [mdDatepickerToggle]=\"picker\"></button>\r\n                                            <md-datepicker #picker></md-datepicker>\r\n                                        </md-input-container>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"{ 'has-error': f.submitted && (!gender.valid || !gender.pristine) }\">\r\n                                        <label class=\"control-label\">Gender</label>\r\n                                        <input type=\"text\" class=\"form-control\" name=\"gender\" [(ngModel)]=\"model.gender\"\r\n                                               #gender=\"ngModel\" />\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <button [disabled]=\"loading\" class=\"btn btn-primary pull-right\">Update Profile</button>\r\n                                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card card-profile\">\r\n                    <div class=\"card-avatar\">\r\n                        <!--<a [routerLink]=\"'user'\">-->\r\n                            <img class=\"img\" src=\"..\\assets\\img\\faces\\example-user.jpg\" />\r\n                        <!--</a>-->\r\n                    </div>\r\n\r\n                    <div class=\"content\">\r\n                        <h5 class=\"category text-gray\">{{model.username}}</h5>\r\n                        <h4 class=\"card-title\">{{model.firstName}} {{model.lastName}}</h4>\r\n                        <label class=\"btn btn-primary btn-round\">\r\n                            <input type=\"file\" name=\"file\" accept=\"image/*\"\r\n                                   (change)=\"handleInputChange($event)\" style=\"display:none\">\r\n                            Change Profile Picture\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 381:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Home\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://github.com/pablito1410/MushroomsWebApp\">\r\n                        GitHub\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Contact\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <p class=\"copyright pull-right\">\r\n            &copy; {{test | date: 'yyyy'}} <a href=\"#\"></a>\r\n        </p>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ 383:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <!--<a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>-->\r\n            <div class=\"navbar-brand\">{{getTitle()}}</div>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons\">notifications</i>\r\n                        <span class=\"notification\">2</span>\r\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">Notification 1</a></li>\r\n                        <li><a href=\"#\">This is second notification</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons\">person</i>\r\n                        <p class=\"hidden-lg hidden-md\">Profile</p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a [routerLink]=\"['/user']\">Manage Profile</a></li>\r\n                        <li><a href=\"/logout\" (click)=\"logout()\">Log Out</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n\r\n            <form class=\"navbar-form navbar-right\" role=\"search\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                    <span class=\"material-input\"></span>\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\r\n                </button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ 384:
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n    <a href=\"#\" class=\"simple-text\">\r\n        <div class=\"logo-img\">\r\n            <img src=\"/assets/img/mushrooms-logo.png\"/>\r\n        </div>\r\n        Mushrooms\r\n    </a>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n    <div class=\"nav-container\">\r\n        <ul class=\"nav\">\r\n            <li routerLinkActive=\"active\">\r\n                <a [routerLink]=\"[menuItems[0].path]\">\r\n                    <i class=\"{{menuItems[0].icon}}\">dashboard</i>\r\n                    <p>{{menuItems[0].title}}</p>\r\n                </a>\r\n            </li>\r\n            <li routerLinkActive=\"active\">\r\n                <a  [routerLink]=\"[menuItems[1].path]\">\r\n                    <i class=\"{{menuItems[1].icon}}\">person</i>\r\n                    <p>{{menuItems[1].title}}</p>\r\n                </a>\r\n            </li>\r\n            <li routerLinkActive=\"active\">\r\n                <a  [routerLink]=\"[menuItems[2].path]\">\r\n                    <i class=\"{{menuItems[2].icon}}\">directions_walk</i>\r\n                    <p>{{menuItems[2].title}}</p>\r\n                </a>\r\n            </li>\r\n            <li routerLinkActive=\"active\">\r\n                <a  [routerLink]=\"menuItems[3].path\">\r\n                    <i class=\"{{menuItems[3].icon}}\">library_books</i>\r\n                    <p>{{menuItems[3].title}}</p>\r\n                </a>\r\n            </li>\r\n            <li routerLinkActive=\"active\">\r\n                <a  [routerLink]=\"[menuItems[4].path]\">\r\n                    <i class=\"{{menuItems[4].icon}}\">supervisor_account</i>\r\n                    <p>{{menuItems[4].title}}</p>\r\n                </a>\r\n            </li>\r\n            <li routerLinkActive=\"active\">\r\n                <a  [routerLink]=\"[menuItems[5].path]\">\r\n                    <i class=\"{{menuItems[5].icon}}\">notifications</i>\r\n                    <p>{{menuItems[5].title}}</p>\r\n                </a>\r\n            </li>\r\n            <li routerLinkActive=\"active\">\r\n                <a  [routerLink]=\"[menuItems[6].path]\">\r\n                    <i class=\"{{menuItems[6].icon}}\">location_on</i>\r\n                    <p>{{menuItems[6].title}}</p>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(185);


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/alert.service.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    UserService.prototype.getAll = function () {
        return this.http.get('/api/users', this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('/api/users/' + id, this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/api/users', user, this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/users/', user, this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id, this.authenticationService.jwt()).map(function (response) { return response.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/user.service.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuType; });
var MenuType;
(function (MenuType) {
    MenuType[MenuType["BRAND"] = 0] = "BRAND";
    MenuType[MenuType["LEFT"] = 1] = "LEFT";
    MenuType[MenuType["RIGHT"] = 2] = "RIGHT";
})(MenuType || (MenuType = {}));
//# sourceMappingURL=E:/Projekty/IntelliJ Workspace/MushroomsWebApp/frontend/src/main/frontend/src/sidebar.metadata.js.map

/***/ })

},[437]);
//# sourceMappingURL=main.bundle.js.map