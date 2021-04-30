(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\mtn_angular_swipe\src\main.ts */"zUnb");


/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-yellow {\r\n        background-color: yellow;\r\n }\r\n.transition {\r\n        transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;\r\n}\r\n.active-slide {\r\n        background-color: green;\r\n        color: #000;\r\n}\r\n.bg-blue {\r\n        background-color: blue;\r\n        color: #000;\r\n }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO1FBQ1Esd0JBQXdCO0NBQy9CO0FBQ0Q7UUFDUSx5RUFBeUU7QUFDakY7QUFDQTtRQUNRLHVCQUF1QjtRQUN2QixXQUFXO0FBQ25CO0FBQ0E7UUFDUSxzQkFBc0I7UUFDdEIsV0FBVztDQUNsQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy15ZWxsb3cge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuIH1cclxuLnRyYW5zaXRpb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yNXMgZWFzZSwgY29sb3IgMC4yNXMgZWFzZSwgdHJhbnNmb3JtIDAuMjVzIGVhc2U7XHJcbn1cclxuLmFjdGl2ZS1zbGlkZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLmJnLWJsdWUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiB9XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/core */ "TaHA");




// import Swiper core and required components

// install Swiper components
swiper_core__WEBPACK_IMPORTED_MODULE_4__["default"].use([
    swiper_core__WEBPACK_IMPORTED_MODULE_4__["Navigation"],
    swiper_core__WEBPACK_IMPORTED_MODULE_4__["Pagination"],
    swiper_core__WEBPACK_IMPORTED_MODULE_4__["Scrollbar"],
    swiper_core__WEBPACK_IMPORTED_MODULE_4__["A11y"],
    swiper_core__WEBPACK_IMPORTED_MODULE_4__["Virtual"],
    swiper_core__WEBPACK_IMPORTED_MODULE_4__["Zoom"],
    swiper_core__WEBPACK_IMPORTED_MODULE_4__["Autoplay"],
    swiper_core__WEBPACK_IMPORTED_MODULE_4__["Thumbs"],
    swiper_core__WEBPACK_IMPORTED_MODULE_4__["Controller"]
]);
let AppComponent = class AppComponent {
    constructor(cd) {
        this.cd = cd;
        this.indexNumber = 0;
        this.exampleConfig = { slidesPerView: 3 };
        this.slidesPerView = 4;
        this.pagination = false;
        this.slides2 = ["slide 1 One", "slide 2 Two", "slide 3 Three"];
        this.navigation = false;
        this.scrollbar = false;
        this.breakpoints = {
            640: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 5, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 20 }
        };
        this.slides = Array.from({ length: 5 }).map((el, index) => `Slide ${index + 1}`);
        this.virtualSlides = Array.from({ length: 600 }).map((el, index) => `Slide ${index + 1}`);
    }
    ngOnInit() { }
    setThumbsSwiper(swiper) {
        this.thumbsSwiper = swiper;
    }
    setControlledSwiper(swiper) {
        this.controlledSwiper = swiper;
    }
    replaceSlides() {
        this.slides2 = ["foo", "bar"];
    }
    togglePagination() {
        if (!this.pagination) {
            this.pagination = { type: "fraction" };
        }
        else {
            this.pagination = false;
        }
    }
    toggleNavigation() {
        this.navigation = !this.navigation;
    }
    toggleScrollbar() {
        if (!this.scrollbar) {
            this.scrollbar = { draggable: true };
        }
        else {
            this.scrollbar = false;
        }
    }
    log(string) {
        // console.log(string);
    }
    breakpointChange() {
        this.breakPointsToggle = !this.breakPointsToggle;
        this.breakpoints = {
            640: { slidesPerView: 2, spaceBetween: 50 },
            768: { slidesPerView: 4, spaceBetween: 40 },
            1024: { slidesPerView: this.breakPointsToggle ? 7 : 5, spaceBetween: 50 }
        };
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
AppComponent.propDecorators = {
    swiperRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["swiperRef", { static: false },] }]
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-swiper-example",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["\n      .bg-yellow {\n        background-color: yellow;\n      }\n      .transition {\n        transition: background 0.25s ease, color 0.25s ease;\n      }\n      .active-slide {\n        background-color: green;\n        color: #fff;\n      }\n      .bg-blue {\n        background-color: blue;\n        color: #fff;\n      }\n    ", _app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Navigation--\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-white\">\r\n  <div class=\"container-fluid\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n    <img src=\"https://raw.githubusercontent.com/Mfabela/warinnovation/master/logo.png\" alt=\"\" width=\"60\">\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Store</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Products & Services</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Help And Support</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Link</a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n            Dropdown\r\n          </a>\r\n          <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\r\n            <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\r\n            <li><hr class=\"dropdown-divider\"></li>\r\n            <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\r\n        </li>\r\n      </ul>\r\n      \r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n      \t<form class=\"d-flex\">\r\n        <input class=\"form-control me-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n        <button class=\"btn btn-outline-success\" type=\"submit\">Search</button>\r\n      </form>\r\n        <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\r\n        <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<!--Navigation-->\r\n<!--Navigation-->\r\n<nav class=\"navbar navbar-expand-md navbar-light bg-white\">\r\n\t<div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"#\"><img src=\"https://raw.githubusercontent.com/Mfabela/warinnovation/master/logo.png\" alt=\"\" width=\"60\"></a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item\">\r\n          <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Store</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Products & Services</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Help And Support</a>\r\n        </li>\r\n        <!--\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\">Link</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n          </li>\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </li>-->\r\n        </ul>\r\n        <div class=\"my-2 my-lg-0\">\r\n          <!--<input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>-->\r\n          <!--Dropdown>-->\r\n          <ul class=\"navbar-nav mr-5\">\r\n          \t<li class=\"nav-item pt-2 pr-3\">\r\n          \t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"13\" height=\"13\" fill=\"currentColor\" class=\"bi bi-search\" viewBox=\"0 0 16 16\">\r\n  <path d=\"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z\"/>\r\n</svg>\r\n           </li>\r\n             <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Personal</a>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\r\n              <a class=\"dropdown-item\" href=\"#\">Personal</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Business</a>\r\n            </div>\r\n          </li>\r\n          </ul>\r\n          <!--Dropdown>-->\r\n        </div>\r\n      </div>\r\n      </div>\r\n    </nav>\r\n<!--Navigation-->\r\n<main class=\"container pt-3 ml-auto mr-auto swipermain\">\r\n<div class=\"row\">\r\n<div class=\"col-md-12\"><h2 class=\"mainquestion\">What Are You <br><strong>Here To Do?</strong></h2></div>\r\n</div>\r\n    <!--Current-->\r\n    <swiper (swiper)=\"log('swiper')\" [centeredSlides]=\"true\" (slideChange)=\"log('slideChange')\"\r\n\t\t[slidesPerView]=\"3\" [spaceBetween]=\"20\" [breakpoints]=\"breakpoints\" [scrollbar]=\"scrollbar\" [navigation]=\"true\" [loop]=\"true\"\r\n\t\t[(index)]=\"indexNumber\">\r\n\t\t<ng-template let-data swiperSlide>\r\n\t\t\t<!--Old--\r\n\t\t\t<div class=\"transition\" [class.active-slide]=\"data.isActive\" [class.bg-yellow]=\"data.isNext\" [class.bg-blue]=\"data.isPrev\">\r\n\t\tSlide 1 {{ data.isActive ? 'active' : '' }} {{ data.isNext ? 'next' : '' }}\r\n\t       </div>\r\n\t       <!--Old-->\r\n\t       <!--New-->\r\n\t       <div class=\"card transition\" [class.active-slide]=\"data.isActive\" [class.bg-yellow]=\"data.isNext\" [class.bg-blue]=\"data.isPrev\">\r\n\t\t\t  <img src=\"https://raw.githubusercontent.com/Mfabela/warinnovation/master/img-placeholder.JPG\" class=\"card-img-top\" alt=\"Image\">\r\n\t\t\t  <div class=\"card-body\">\r\n\t\t\t    <h5 class=\"card-title\">\r\n\t\t\t    Get a device {{ data.isActive ? 'active' : '' }} {{ data.isNext ? 'next' : '' }}\r\n\t\t\t    </h5>\r\n\t\t\t    <a href=\"#\" class=\"btn btn-primary\">START HERE ></a>\r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n           <!--New-->\r\n\t    </ng-template>\r\n\t\t<ng-template let-data swiperSlide> \r\n\t        <!--New-->\r\n\t       <div class=\"card transition\" [class.active-slide]=\"data.isActive\" [class.bg-yellow]=\"data.isNext\" [class.bg-blue]=\"data.isPrev\">\r\n\t\t\t  <img src=\"https://raw.githubusercontent.com/Mfabela/warinnovation/master/img-placeholder.JPG\" width=\"100%\" class=\"card-img-top\" alt=\"Image\">\r\n\t\t\t  <div class=\"card-body\">\r\n\t\t\t    <h5 class=\"card-title\">\r\n\t\t\t    Add a <br/>phone-line {{ data.isActive ? 'active' : '' }} {{ data.isNext ? 'next' : '' }}\r\n\t\t\t    </h5>\r\n\t\t\t    <a href=\"#\" class=\"btn btn-primary\">START HERE ></a>\r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n           <!--New-->\r\n\t    </ng-template>\r\n\t\t<ng-template let-data swiperSlide>\r\n\t        <!--New-->\r\n\t       <div class=\"card transition\" [class.active-slide]=\"data.isActive\" [class.bg-yellow]=\"data.isNext\" [class.bg-blue]=\"data.isPrev\">\r\n\t\t\t  <img src=\"https://raw.githubusercontent.com/Mfabela/warinnovation/master/img-placeholder.JPG\" width=\"100%\" class=\"card-img-top\" alt=\"Image\">\r\n\t\t\t  <div class=\"card-body\">\r\n\t\t\t    <h5 class=\"card-title\">\r\n\t\t\t    Upgrade {{ data.isActive ? 'active' : '' }} {{ data.isNext ? 'next' : '' }}\r\n\t\t\t    </h5>\r\n\t\t\t    <a href=\"#\" class=\"btn btn-primary\">START HERE ></a>\r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n           <!--New-->\r\n\t    </ng-template>\r\n\t\t<ng-template let-data swiperSlide>\r\n\t\t\r\n\t       <!--New-->\r\n\t       <div class=\"card transition\" [class.active-slide]=\"data.isActive\" [class.bg-yellow]=\"data.isNext\" [class.bg-blue]=\"data.isPrev\">\r\n\t\t\t  <img src=\"https://raw.githubusercontent.com/Mfabela/warinnovation/master/img-placeholder.JPG\" width=\"100%\" class=\"card-img-top\" alt=\"Image\">\r\n\t\t\t  <div class=\"card-body\">\r\n\t\t\t    <h5 class=\"card-title\">\r\n\t\t\t    Mobile <br/> internet{{ data.isActive ? 'active' : '' }} {{ data.isNext ? 'next' : '' }}\r\n\t\t\t    </h5>\r\n\t\t\t    <a href=\"#\" class=\"btn btn-primary\">START HERE ></a>\r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n           <!--New-->\r\n\t    </ng-template>\r\n\t    <ng-template let-data swiperSlide>\r\n\t\t\r\n\t       <!--New-->\r\n\t       <div class=\"card transition\" [class.active-slide]=\"data.isActive\" [class.bg-yellow]=\"data.isNext\" [class.bg-blue]=\"data.isPrev\">\r\n\t\t\t  <img src=\"https://raw.githubusercontent.com/Mfabela/warinnovation/master/img-placeholder.JPG\" width=\"100%\" class=\"card-img-top\" alt=\"Image\">\r\n\t\t\t  <div class=\"card-body\">\r\n\t\t\t    <h5 class=\"card-title\">\r\n\t\t\t    Home  <br/>internet {{ data.isActive ? 'active' : '' }} {{ data.isNext ? 'next' : '' }}\r\n\t\t\t    </h5>\r\n\t\t\t    <a href=\"#\" class=\"btn btn-primary\">START HERE ></a>\r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n           <!--New-->\r\n\t    </ng-template>\r\n\t</swiper>\r\n    <!--Current-->\r\n\r\n\r\n<!--\r\n\t\r\n   <h2>Old</h2>\r\n    <swiper [slidesPerView]=\"2.6\" [spaceBetween]=\"50\" [pagination]=\"{ type: 'fraction' }\"  [navigation]=\"true\">\r\n\t\t<ng-template let-data swiperSlide>\r\n\t\tSlide 1 {{ data.isActive ? 'active' : '' }} {{ data.isNext ? 'next' : '' }}</ng-template>\r\n\t\t<ng-template let-data swiperSlide> \r\n\t\tSwiper 2  {{ data.isActive ? 'active' : '' }} {{ data.isNext ? 'next' : '' }}\r\n\t    </ng-template>\r\n\t\t<ng-template let-data swiperSlide>\r\n\t\tSlide 3  {{ data.isActive ? 'active' : '' }} {{ data.isNext ? 'next' : '' }}\r\n\t    </ng-template>\r\n\t\t<ng-template let-data swiperSlide>\r\n\t\tSlide 4  {{ data.isActive ? 'active' : '' }} {{ data.isNext ? 'next' : '' }}\r\n\t    </ng-template>\r\n\t</swiper>\r\n   \r\n\r\n     <h2>Change config</h2>\r\n\t<swiper #swiperRef [navigation]=\"navigation\" (swiper)=\"log('swiper')\" (slideChange)=\"log('slideChange')\"\r\n\t\t[slidesPerView]=\"3\" [spaceBetween]=\"50\" [breakpoints]=\"breakpoints\" [scrollbar]=\"scrollbar\" [loop]=\"true\"\r\n\t\t[(index)]=\"indexNumber\" [pagination]=\"{ el: '.swiper-pagination.pagination-test' }\">\r\n\t\t<ng-container *ngIf=\"show\">\r\n\t\t\t<ng-template swiperSlide>Best slide ever 1 {{ show }}</ng-template>\r\n\t\t\t<ng-template swiperSlide>Best slide ever 2</ng-template>\r\n\t\t</ng-container>\r\n\t\t<ng-template swiperSlide>\r\n\t\t\t<div *ngIf=\"true\">Best slide ever 3</div>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template swiperSlide let-data *ngFor=\"let slide of slides; index as i\">\r\n\t\t\t{{ slide }} {{ data.isActive ? 'active' : '' }} {{ data.isNext ? 'next' : '' }}\r\n\t\t</ng-template>\r\n\r\n\t\t<div slot=\"container-end\" class=\"swiper-pagination pagination-test\"></div>\r\n\t</swiper>\r\n\t<button (click)=\"slides.push('test')\">Add slide</button>\r\n\t<button (click)=\"toggleNavigation()\">Toggle navigation</button>\r\n\t<button (click)=\"toggleScrollbar()\">Toggle scrollbar</button>\r\n\t<button (click)=\"breakpointChange()\">Breakpoint change</button>\r\n\t<button (click)=\"show = !show\">Toggle show</button>\r\n\t<button (click)=\"indexNumber = 0\">0</button>\r\n\t<button (click)=\"indexNumber = 3\">3</button>\r\n\t<button (click)=\"indexNumber = 5\">5</button>\r\n\t<button (click)=\"indexNumber = 6\">6</button>\r\n\t<br>\r\n\tCurrent index: <b>{{ indexNumber }}</b>\r\n   \r\n\r\n    <swiper [slidesPerView]=\"2.6\" [spaceBetween]=\"50\" [centeredSlides]=\"true\" [loop]=\"true\">\r\n\t\t<ng-template *ngFor=\"let slide of [].constructor(10); index as i\" swiperSlide let-data>\r\n\t\t\t<div class=\"transition\" [class.active-slide]=\"data.isActive\" [class.bg-yellow]=\"data.isNext\"\r\n\t\t\t\t[class.bg-blue]=\"data.isPrev\">\r\n\t\t\t\tSlide {{i + 1}}</div>\r\n\t\t</ng-template>\r\n\t</swiper>\r\n\t\r\n\r\n\t<h2>Virtual slide</h2>\r\n\t<swiper #swiperVirtualRef [slidesPerView]=\"3\" [spaceBetween]=\"50\" [pagination]=\"{ type: 'fraction' }\"\r\n\t\t[virtual]=\"true\" slideActiveClass=\"swiper-active whyWouldIuseCustomClass\" [centeredSlides]=\"true\"\r\n\t\t[navigation]=\"true\">\r\n\t\t<ng-template swiperSlide *ngFor=\"let slide of virtualSlides; index as i\">Slide {{ slide }}</ng-template>\r\n\t\t<ng-template swiperSlide>Slide</ng-template>\r\n\t\t<ng-template swiperSlide>Slide</ng-template>\r\n\t</swiper>\r\n\r\n\t\r\n\t<h2>Change config</h2>\r\n\t<swiper [config]=\"exampleConfig\">\r\n\t\t<ng-template swiperSlide>Best slide ever 2</ng-template>\r\n\t\t<ng-template swiperSlide>Best slide ever 2</ng-template>\r\n\t\t<ng-template swiperSlide>Best slide ever 2</ng-template>\r\n\t\t<ng-template swiperSlide>Best slide ever 2</ng-template>\r\n\t\t<ng-template swiperSlide>Best slide ever 2</ng-template>\r\n\t</swiper>\r\n\t<button (click)=\"exampleConfig = { slidesPerView: 2 }\">config = SlidePerView 2</button>\r\n\t<button (click)=\"exampleConfig = { slidesPerView: 1 }\">config = SlidePerView 1</button>\r\n\t<br>\r\n\t<pre>{{ exampleConfig | json }}</pre>\r\n\t<h1>Modifing slides</h1>\r\n\t<swiper #swiper [slidesPerView]=\"1\" [centeredSlides]=\"true\"\r\n\t\t[navigation]=\"{ prevEl: '.swiper-navigation-prev', nextEl: '.swiper-navigation-next' }\"\r\n\t\t[pagination]=\"pagination\">\r\n\t\t<ng-template swiperSlide *ngFor=\"let slide of slides2; index as i\">\r\n\t\t\t{{ i }} - {{ slide }}\r\n\t\t</ng-template>\r\n\t</swiper>\r\n\t<button type=\"button\" class=\"swiper-navigation-prev\">&lt;</button>\r\n\t<button type=\"button\" class=\"swiper-navigation-next\">&gt;</button>\r\n\t<hr />\r\n\t<button (click)=\"replaceSlides()\">replace slides</button>\r\n\t<button (click)=\"togglePagination()\">Toggle pagination</button>\r\n\r\n\t<h2>Zoom</h2>\r\n\t<swiper [zoom]=\"true\" [autoplay]=\"true\">\r\n\t\t<ng-template swiperSlide class=\"custom-class\" [zoom]=\"true\">\r\n\t\t\t<img src=\"https://swiperjs.com/demos/images/nature-1.jpg\" />\r\n      </ng-template>\r\n\t\t\t<ng-template swiperSlide>\r\n\t\t\t\t<img src=\"https://swiperjs.com/demos/images/nature-2.jpg\" />\r\n      </ng-template>\r\n\t\t\t\t<ng-template swiperSlide [zoom]=\"true\">\r\n\t\t\t\t\t<img src=\"https://swiperjs.com/demos/images/nature-3.jpg\" />\r\n      </ng-template>\r\n\t</swiper>\r\n\r\n\t<h1>Thumbs</h1>\r\n\t<swiper [slidesPerView]=\"1\" [spaceBetween]=\"50\" [navigation]=\"true\" [pagination]=\"{ clickable: true }\"\r\n\t\t[thumbs]=\"{ swiper: thumbsSwiper }\">\r\n\t\t<ng-template swiperSlide>Slide 1</ng-template>\r\n\t\t<ng-template swiperSlide>Slide 2</ng-template>\r\n\t\t<ng-template swiperSlide>Slide 3</ng-template>\r\n\t\t<ng-template swiperSlide>Slide 4</ng-template>\r\n\t\t<ng-template swiperSlide>Slide 5</ng-template>\r\n\t\t<ng-template swiperSlide>Slide 6</ng-template>\r\n\t</swiper>\r\n\t<swiper [slidesPerView]=\"3\" [spaceBetween]=\"50\" (swiper)=\"setThumbsSwiper($event)\" [navigation]=\"{}\"\r\n\t\t[pagination]=\"{ clickable: true }\" [scrollbar]=\"{ draggable: true }\" [watchSlidesVisibility]=\"true\"\r\n\t\t[watchSlidesProgress]=\"true\">\r\n\t\t<ng-template swiperSlide>Slide 1</ng-template>\r\n\t\t<ng-template swiperSlide>Slide 2</ng-template>\r\n\t\t<ng-template swiperSlide>Slide 3</ng-template>\r\n\t\t<ng-template swiperSlide>Slide 4</ng-template>\r\n\t\t<ng-template swiperSlide>Slide 5</ng-template>\r\n\t\t<ng-template swiperSlide>Slide 6</ng-template>\r\n\t</swiper>\r\n\r\n\t<h1>Controller</h1>\r\n\t<swiper [slidesPerView]=\"1\" [spaceBetween]=\"50\" [navigation]=\"true\" [pagination]=\"{ clickable: true }\"\r\n\t\t[controller]=\"{ control: controlledSwiper }\">\r\n\t\t<ng-template swiperSlide>Slide 1</ng-template>\r\n\t\t<ng-template swiperSlide>Slide 2</ng-template>\r\n\t\t<ng-template swiperSlide>Slide 3</ng-template>\r\n\t\t<ng-template swiperSlide>Slide 4</ng-template>\r\n\t\t<ng-template swiperSlide>Slide 5</ng-template>\r\n\t\t<ng-template swiperSlide>Slide 6</ng-template>\r\n\t</swiper>\r\n\t<swiper [slidesPerView]=\"3\" [spaceBetween]=\"50\" (swiper)=\"setControlledSwiper($event)\" [navigation]=\"{}\"\r\n\t\t[pagination]=\"{ clickable: true }\" [scrollbar]=\"{ draggable: true }\" [watchSlidesVisibility]=\"true\"\r\n\t\t[watchSlidesProgress]=\"true\">\r\n\t\t<ng-template swiperSlide>Slide 1</ng-template>\r\n\t\t<ng-template swiperSlide>Slide 2</ng-template>\r\n\t\t<ng-template swiperSlide>Slide 3</ng-template>\r\n\t\t<ng-template swiperSlide>Slide 4</ng-template>\r\n\t\t<ng-template swiperSlide>Slide 5</ng-template>\r\n\t\t<ng-template swiperSlide>Slide 6</ng-template>\r\n\t</swiper>-->\r\n</main>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/angular */ "UMfn");






let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], swiper_angular__WEBPACK_IMPORTED_MODULE_5__["SwiperModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "hN/g":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ "pDpN");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
// import 'core-js/es6/reflect';
// import 'core-js/es7/reflect';
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "hN/g");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");



Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
}).catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map