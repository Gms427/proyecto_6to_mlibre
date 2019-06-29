(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/components/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/home/components/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\r\n  height: 400px;\r\n  width: 400px;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n}\r\n.btn-login {\r\n  margin-left: auto !important;\r\n  margin-right: auto!important;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n  transition: .3s;\r\n}\r\n.mat-card-header-text {\r\n    margin: auto !important;\r\n}\r\n.example-card {\r\n  padding: 55px;\r\n}\r\n.card-title {\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n.btn-signin {\r\n  transition: .3s;\r\n  margin: auto;\r\n  display: block;\r\n  text-align: center;\r\n  width: 50%;\r\n  height: 35px;\r\n  padding: 8px 4px;\r\n  border-radius: 4px;\r\n}\r\n.btn-signin:hover {\r\n    background: #cce6ff;\r\n    padding-top: 10px;\r\n  }\r\n.btn-login-container {\r\n  height: 65px;\r\n  display: block;\r\n}\r\n.mat-card:not([class*=\"mat-elevation-z\"]) {\r\n  box-shadow: 1px 2px 15px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);\r\n}\r\n.top-section{\r\n  position: relative;\r\n  background: #373D48;\r\n  width: 100vw;\r\n  height: calc(50vh - 100px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtDQUNkO0FBQ0Q7RUFDRSw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGdCQUFnQjtDQUNqQjtBQUNEO0lBQ0ksd0JBQXdCO0NBQzNCO0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7QUFDQztJQUNFLG9CQUFvQjtJQUNwQixrQkFBa0I7R0FDbkI7QUFDSDtFQUNFLGFBQWE7RUFDYixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxxR0FBcUc7Q0FDdEc7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDJCQUEyQjtDQUM1QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmJ0bi1sb2dpbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG8haW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogLjNzO1xyXG59XHJcbi5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICBwYWRkaW5nOiA1NXB4O1xyXG59XHJcbi5jYXJkLXRpdGxlIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idG4tc2lnbmluIHtcclxuICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMzVweDtcclxuICBwYWRkaW5nOiA4cHggNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4gIC5idG4tc2lnbmluOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNjY2U2ZmY7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcbi5idG4tbG9naW4tY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLm1hdC1jYXJkOm5vdChbY2xhc3MqPVwibWF0LWVsZXZhdGlvbi16XCJdKSB7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCAxNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLnRvcC1zZWN0aW9ue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjMzczRDQ4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IGNhbGMoNTB2aCAtIDEwMHB4KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/components/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/home/components/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-section\">\r\n</div>\r\n<div class=\"login-container\">\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <mat-card-title style=\"margin: auto!important; text-align: center; font-size: 22px; margin-bottom: 20px!important;\">{{ 'LoginMessage' | translate }}</mat-card-title>\r\n      </mat-card-header>\r\n\r\n      <mat-card-content>\r\n        <form class=\"example-form\">\r\n          <table class=\"example-full-width\" cellspacing=\"0\" style=\"width: 100%\">\r\n            <tr>\r\n              <td>\r\n                <mat-form-field class=\"example-full-width\" style=\"width: 100%\">\r\n                  <input matInput placeholder=\"{{ 'UserOrEmail' | translate }}\"\r\n                         [formControl]=\"emailFormControl\"\r\n                         [errorStateMatcher]=\"matcher\"\r\n                         [(ngModel)]=\"username\"\r\n                         name=\"username\">\r\n\r\n                  <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n                    Please enter a valid email address\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n                    Email is <strong>required</strong>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <mat-form-field class=\"example-full-width\" style=\"width: 100%\">\r\n                  <input matInput placeholder=\"{{ 'Password' | translate }}\"\r\n                         [formControl]=\"passwordFormControl\"\r\n                         [errorStateMatcher]=\"matcher\"\r\n                         [(ngModel)]=\"password\"\r\n                         name=\"password\"\r\n                         type=\"password\">\r\n                  <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\r\n                    Password is <strong>required</strong>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </form>\r\n        <!--<mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>-->\r\n      </mat-card-content>\r\n\r\n      <mat-card-actions>\r\n        <div class=\"btn-login-container\">\r\n          <button mat-raised-button (click)=\"login()\" color=\"primary\" class=\"btn-login btn-primary\">{{ 'Login' | translate }}</button>\r\n        </div>\r\n        <a class=\"btn-signin btn-transparent\" routerLink=\"/home/signin\">{{ 'Signin' | translate }}</a>\r\n      </mat-card-actions>\r\n\r\n    </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/utils/utils */ "./src/app/shared/utils/utils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var src_app_home_models_UserLogin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/home/models/UserLogin */ "./src/app/home/models/UserLogin.ts");
/* harmony import */ var src_app_shared_services_navbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/navbar.service */ "./src/app/shared/services/navbar.service.ts");



//import { ErrorStateMatcher } from '@angular/material/core';





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, _loginService, _navbarService) {
        this.router = router;
        this._loginService = _loginService;
        this._navbarService = _navbarService;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.matcher = new _shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__["MyErrorStateMatcher"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        if (!(this.emailFormControl.hasError("required") ||
            this.emailFormControl.hasError("email") ||
            this.passwordFormControl.hasError("required"))) {
            console.log("The username is " + this.username);
            console.log("The password is " + this.password);
            var loggedUser = new src_app_home_models_UserLogin__WEBPACK_IMPORTED_MODULE_6__["UserLogin"](this.username, this.password);
            this._loginService.Login(loggedUser);
            this._navbarService.UserLogged(true);
            this.router.navigate(["/home/main"]);
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/home/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/home/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            src_app_shared_services_navbar_service__WEBPACK_IMPORTED_MODULE_7__["NavbarService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/home/components/main/categories-menu/categories-menu.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/home/components/main/categories-menu/categories-menu.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-categories {\r\n  background: white;\r\n  /* border: 1px solid #a6a6a6; */\r\n  color: #666666;\r\n  width: 150px;\r\n}\r\n.container-blocks{\r\n  width: 400px;\r\n  height: 300px;\r\n}\r\n.block {\r\n  display: inline-block;\r\n  width: 50%;\r\n  /* border: 1px solid black; */\r\n  height: 50%;\r\n}\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #ccc;\r\n  margin: 1em 0;\r\n  padding: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL21haW4vY2F0ZWdvcmllcy1tZW51L2NhdGVnb3JpZXMtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsY0FBYztDQUNmO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixZQUFZO0NBQ2I7QUFDRDtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsV0FBVztDQUNaIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb21wb25lbnRzL21haW4vY2F0ZWdvcmllcy1tZW51L2NhdGVnb3JpZXMtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1jYXRlZ29yaWVzIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjYTZhNmE2OyAqL1xyXG4gIGNvbG9yOiAjNjY2NjY2O1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG4uY29udGFpbmVyLWJsb2Nrc3tcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG4uYmxvY2sge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNTAlO1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gIGhlaWdodDogNTAlO1xyXG59XHJcbmhyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDFweDtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWFyZ2luOiAxZW0gMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/components/main/categories-menu/categories-menu.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/home/components/main/categories-menu/categories-menu.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button mat-button [matMenuTriggerFor]=\"menu\" class=\"btn-categories\">\r\n  Categories\r\n  <i class=\"fas fa-angle-down\" style=\"margin-left: 5px;\"></i>\r\n</button>\r\n\r\n<mat-menu #menu=\"matMenu\" yPosition=\"below\">\r\n  <div class=\"cats\">\r\n    <div> <!-- NG FOR\r\n      <button mat-menu-item [matMenuTriggerFor]=\"subMenu\">Category 1</button>\r\n    </div>\r\n    <div>\r\n      <button mat-menu-item [matMenuTriggerFor]=\"subMenu\">Category 2</button>\r\n    </div>\r\n\r\n  </div>\r\n</mat-menu>\r\n\r\n<mat-menu #subMenu=\"matMenu\" yPosition=\"below\">\r\n\r\n  <mat-card class=\"favorites-card mat-elevation-z transparent text-center\"> <!-- NG FOR\r\n    <mat-card-title>\r\n      Category 1\r\n    </mat-card-title>\r\n    <hr />\r\n\r\n    <mat-card-content>\r\n      <div class=\"container-blocks\">\r\n        <mat-card class=\"favorites-card mat-elevation-z block text-center\"> <!-- NG FOR\r\n          <mat-card-title style=\"font-size: 16px\">\r\n            Sub-Category 1\r\n          </mat-card-title>\r\n          <mat-card-content>\r\n            A ver como aparece esto\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card class=\"favorites-card mat-elevation-z block text-center\">\r\n          <mat-card-title style=\"font-size: 16px\">\r\n            Sub-Category 1\r\n          </mat-card-title>\r\n          <mat-card-content>\r\n            A ver como aparece esto\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card class=\"favorites-card mat-elevation-z block text-center\">\r\n          <mat-card-title style=\"font-size: 16px\">\r\n            Sub-Category 1\r\n          </mat-card-title>\r\n          <mat-card-content>\r\n            A ver como aparece esto\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card class=\"favorites-card mat-elevation-z block text-center\">\r\n          <mat-card-title style=\"font-size: 16px\">\r\n            Sub-Category 1\r\n          </mat-card-title>\r\n          <mat-card-content>\r\n            A ver como aparece esto\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n</mat-menu> -->\r\n\r\n"

/***/ }),

/***/ "./src/app/home/components/main/categories-menu/categories-menu.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/home/components/main/categories-menu/categories-menu.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CategoriesMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesMenuComponent", function() { return CategoriesMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CategoriesMenuComponent = /** @class */ (function () {
    function CategoriesMenuComponent() {
    }
    CategoriesMenuComponent.prototype.ngOnInit = function () {
    };
    CategoriesMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories-menu',
            template: __webpack_require__(/*! ./categories-menu.component.html */ "./src/app/home/components/main/categories-menu/categories-menu.component.html"),
            styles: [__webpack_require__(/*! ./categories-menu.component.css */ "./src/app/home/components/main/categories-menu/categories-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CategoriesMenuComponent);
    return CategoriesMenuComponent;
}());



/***/ }),

/***/ "./src/app/home/components/main/main.component.css":
/*!*********************************************************!*\
  !*** ./src/app/home/components/main/main.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-main {\r\n  height: 100vh;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-image: url('4.jpg');\r\n  background-repeat: round;\r\n  /*Las lindas --> 4, 12, 15, */\r\n  display: flow-root;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  color: #ffffff;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100vw;\r\n  z-index: 1;\r\n}\r\n.search-container{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsK0JBQXlEO0VBQ3pELHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsYUFBYTtFQUNiLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQix3QkFBd0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLW1haW4ge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvNC5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XHJcbiAgLypMYXMgbGluZGFzIC0tPiA0LCAxMiwgMTUsICovXHJcbiAgZGlzcGxheTogZmxvdy1yb290O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5zZWFyY2gtY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/components/main/main.component.html":
/*!**********************************************************!*\
  !*** ./src/app/home/components/main/main.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-main\">\r\n  <app-popular-categories></app-popular-categories>\r\n  <div class=\"search-container\">\r\n      <app-categories-menu></app-categories-menu>\r\n      <app-search></app-search>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/components/main/main.component.ts":
/*!********************************************************!*\
  !*** ./src/app/home/components/main/main.component.ts ***!
  \********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
        this.categories = [{
                label: 'Categories',
                items: [{ label: 'Cat 1' }, { label: 'Cat 2' }, { label: 'Cat 3' },]
            }];
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/home/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/home/components/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/home/components/main/popular-categories/popular-categories.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/home/components/main/popular-categories/popular-categories.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-popular-categories{\r\n  width: 100%;\r\n  height: 230px;\r\n  display: flex;\r\n}\r\n.title-popular-categories {\r\n  width: 215px;\r\n  margin: auto;\r\n  margin-top: 175px;\r\n  margin-bottom: 25px;\r\n}\r\n.container-card{\r\n  width: 22%;\r\n  margin: auto\r\n}\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #ccc;\r\n  margin: 1em 0;\r\n  padding: 0;\r\n}\r\n.transparent{\r\n  background: transparent;\r\n  text-align: center;\r\n}\r\n.mat-card{\r\n  color: #ffffff;\r\n}\r\n.mat-card-subtitle{\r\n  color: #ffffff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL21haW4vcG9wdWxhci1jYXRlZ29yaWVzL3BvcHVsYXItY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxjQUFjO0NBQ2Y7QUFDRDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsV0FBVztFQUNYLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxXQUFXO0NBQ1o7QUFDRDtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbXBvbmVudHMvbWFpbi9wb3B1bGFyLWNhdGVnb3JpZXMvcG9wdWxhci1jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLXBvcHVsYXItY2F0ZWdvcmllc3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnRpdGxlLXBvcHVsYXItY2F0ZWdvcmllcyB7XHJcbiAgd2lkdGg6IDIxNXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbi5jb250YWluZXItY2FyZHtcclxuICB3aWR0aDogMjIlO1xyXG4gIG1hcmdpbjogYXV0b1xyXG59XHJcbmhyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDFweDtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWFyZ2luOiAxZW0gMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi50cmFuc3BhcmVudHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1hdC1jYXJke1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5tYXQtY2FyZC1zdWJ0aXRsZXtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/components/main/popular-categories/popular-categories.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/home/components/main/popular-categories/popular-categories.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"title-popular-categories\">Popular Categories</h2>\r\n<div class=\"container-popular-categories\">\r\n\r\n  <div class=\"container-card\">\r\n    <mat-card class=\"favorites-card mat-elevation-z transparent text-center\">\r\n      <mat-card-title>\r\n        Categoría 1\r\n      </mat-card-title>\r\n      <hr />\r\n      <mat-card-subtitle>\r\n        Info about the category\r\n      </mat-card-subtitle>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div class=\"container-card\">\r\n    <mat-card class=\"favorites-card mat-elevation-z transparent text-center\">\r\n      <mat-card-title>\r\n        Categoría 1\r\n      </mat-card-title>\r\n      <hr />\r\n      <mat-card-subtitle>\r\n        Info about the category\r\n      </mat-card-subtitle>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div class=\"container-card\">\r\n    <mat-card class=\"favorites-card mat-elevation-z transparent text-center\">\r\n      <mat-card-title>\r\n        Categoría 1\r\n      </mat-card-title>\r\n      <hr />\r\n      <mat-card-subtitle>\r\n        Info about the category\r\n      </mat-card-subtitle>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div class=\"container-card\">\r\n    <mat-card class=\"favorites-card mat-elevation-z transparent text-center\">\r\n      <mat-card-title>\r\n        Categoría 1\r\n      </mat-card-title>\r\n      <hr />\r\n      <mat-card-subtitle>\r\n        Info about the category\r\n      </mat-card-subtitle>\r\n    </mat-card>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/components/main/popular-categories/popular-categories.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/components/main/popular-categories/popular-categories.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PopularCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularCategoriesComponent", function() { return PopularCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PopularCategoriesComponent = /** @class */ (function () {
    function PopularCategoriesComponent() {
    }
    PopularCategoriesComponent.prototype.ngOnInit = function () {
    };
    PopularCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popular-categories',
            template: __webpack_require__(/*! ./popular-categories.component.html */ "./src/app/home/components/main/popular-categories/popular-categories.component.html"),
            styles: [__webpack_require__(/*! ./popular-categories.component.css */ "./src/app/home/components/main/popular-categories/popular-categories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PopularCategoriesComponent);
    return PopularCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/home/components/signin/signin.component.css":
/*!*************************************************************!*\
  !*** ./src/app/home/components/signin/signin.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signin-container {\r\n  height: 394px;\r\n  width: 750px;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n}\r\n.mat-grid-tile .mat-figure {\r\n  align-items: baseline !important;\r\n}\r\n.space{\r\n  display: block;\r\n  width: 100%;\r\n  height: 64.8px;\r\n}\r\n.btn-signin {\r\n  width: 300px;\r\n}\r\n.signin-conditions {\r\n  display: inline-block;\r\n  width: 300px;\r\n  font-size: 13px;\r\n}\r\n.controles-container {\r\n  width: 95%;\r\n}\r\n.mat-card:not([class*=\"mat-elevation-z\"]) {\r\n  box-shadow: 1px 2px 15px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);\r\n}\r\n.link-company-account {\r\n  float: right;\r\n  font-size: 18px;\r\n}\r\na{\r\n  cursor: pointer;\r\n}\r\n.top-section{\r\n  position: relative;\r\n  background: #373D48;\r\n  width: 100vw;\r\n  height: 50vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0NBQ2Q7QUFDRDtFQUNFLGlDQUFpQztDQUNsQztBQUNEO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxhQUFhO0NBQ2Q7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7QUFDRDtFQUNFLHFHQUFxRztDQUN0RztBQUNEO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ25pbi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMzk0cHg7XHJcbiAgd2lkdGg6IDc1MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5tYXQtZ3JpZC10aWxlIC5tYXQtZmlndXJlIHtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcclxufVxyXG4uc3BhY2V7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2NC44cHg7XHJcbn1cclxuLmJ0bi1zaWduaW4ge1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG4uc2lnbmluLWNvbmRpdGlvbnMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5jb250cm9sZXMtY29udGFpbmVyIHtcclxuICB3aWR0aDogOTUlO1xyXG59XHJcbi5tYXQtY2FyZDpub3QoW2NsYXNzKj1cIm1hdC1lbGV2YXRpb24telwiXSkge1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggMTVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbn1cclxuLmxpbmstY29tcGFueS1hY2NvdW50IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbmF7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50b3Atc2VjdGlvbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogIzM3M0Q0ODtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/components/signin/signin.component.html":
/*!**************************************************************!*\
  !*** ./src/app/home/components/signin/signin.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-section\"></div>\r\n<div class=\"signin-container\">\r\n  <mat-card class=\"example-card\">\r\n    <mat-grid-list cols=\"2\" rowHeight=\"300px\">\r\n      <mat-grid-tile>\r\n        <div class=\"controles-container\">\r\n          <mat-card-header style=\"height: 48px; align-items: center;\">\r\n            <mat-card-title\r\n              style=\"text-align: left; font-size: 23px; margin-bottom: 20px; margin-left: -16px;\"\r\n              >{{ \"SignupMessage\" | translate }}</mat-card-title\r\n            >\r\n          </mat-card-header>\r\n          <mat-form-field class=\"example-full-width\" style=\"width: 100%\">\r\n            <input\r\n              matInput\r\n              placeholder=\"{{ 'Name' | translate }}\"\r\n              [(ngModel)]=\"userData.Name\"\r\n              type=\"text\"\r\n              name=\"name\"\r\n              required\r\n            />\r\n          </mat-form-field>\r\n          <mat-form-field class=\"example-full-width\" style=\"width: 100%\">\r\n            <input\r\n              matInput\r\n              placeholder=\"{{ 'PhoneNumber' | translate }}\"\r\n              [(ngModel)]=\"userData.Phone\"\r\n              type=\"tel\"\r\n              name=\"phone\"\r\n              required\r\n            />\r\n          </mat-form-field>\r\n          <mat-form-field class=\"example-full-width\" style=\"width: 100%\">\r\n            <input\r\n              matInput\r\n              placeholder=\"E-mail\"\r\n              [(ngModel)]=\"userData.Email\"\r\n              type=\"email\"\r\n              name=\"email\"\r\n              required\r\n            />\r\n          </mat-form-field>\r\n        </div>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <div class=\"controles-container\">\r\n          <mat-card-header\r\n            style=\"height: 48px; float: right; align-items: center;\"\r\n          >\r\n            <a class=\"link-company-account btn-transparent\">{{\r\n              \"CreateCompanyAccount\" | translate\r\n            }}</a>\r\n          </mat-card-header>\r\n          <mat-form-field class=\"example-full-width\" style=\"width: 100%\">\r\n            <input\r\n              matInput\r\n              placeholder=\"{{ 'Surname' | translate }}\"\r\n              [(ngModel)]=\"userData.Surname\"\r\n              name=\"surname\"\r\n              required\r\n            />\r\n          </mat-form-field>\r\n          <div class=\"space\"></div>\r\n          <mat-form-field class=\"example-full-width\" style=\"width: 100%\">\r\n            <input\r\n              matInput\r\n              placeholder=\"{{ 'Password' | translate }}\"\r\n              [(ngModel)]=\"userData.Password\"\r\n              type=\"password\"\r\n              name=\"password\"\r\n              required\r\n            />\r\n          </mat-form-field>\r\n        </div>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n\r\n    <mat-grid-list cols=\"2\" rowHeight=\"60px\">\r\n      <mat-grid-tile>\r\n        <button\r\n          mat-raised-button\r\n          color=\"primary\"\r\n          (click)=\"signin()\"\r\n          class=\"btn-signin\"\r\n          [disabled]=\"!buttonEnabled\"\r\n        >\r\n          {{ \"Signin\" | translate }}\r\n        </button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <p class=\"signin-conditions\">\r\n          <mat-checkbox\r\n            color=\"primary\"\r\n            class=\"example-margin\"\r\n            [(ngModel)]=\"buttonEnabled\"\r\n            [(indeterminate)]=\"indeterminate\"\r\n            [labelPosition]=\"labelPosition\"\r\n            [disabled]=\"disabled\"\r\n          >\r\n          </mat-checkbox>\r\n          {{ \"SigninConditions1\" | translate }}\r\n          <a>{{ \"PrivacyPolicy\" | translate }}</a>\r\n          {{ \"SigninConditions2\" | translate }}\r\n          <a>{{ \"TermsAndConditions\" | translate }}</a>\r\n          {{ \"OfNosbey\" | translate }}\r\n        </p>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/components/signin/signin.component.ts":
/*!************************************************************!*\
  !*** ./src/app/home/components/signin/signin.component.ts ***!
  \************************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_UserSignin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/UserSignin */ "./src/app/home/models/UserSignin.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
        this.userData = new _models_UserSignin__WEBPACK_IMPORTED_MODULE_2__["UserSignin"]();
        this.buttonEnabled = false;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.surnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.phoneFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.signin = function () {
        console.log(this.userData);
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/home/components/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/home/components/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/home/components/main/main.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/home/components/login/login.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/home/components/signin/signin.component.ts");






var routes = [
    {
        path: "",
        redirectTo: "main",
        pathMatch: "full"
    },
    {
        path: "main",
        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
    },
    {
        path: "login",
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: "signin",
        component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/home/components/main/main.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/home/components/login/login.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/home/components/signin/signin.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_main_popular_categories_popular_categories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/main/popular-categories/popular-categories.component */ "./src/app/home/components/main/popular-categories/popular-categories.component.ts");
/* harmony import */ var _components_main_categories_menu_categories_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main/categories-menu/categories-menu.component */ "./src/app/home/components/main/categories-menu/categories-menu.component.ts");












var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"], _components_main_popular_categories_popular_categories_component__WEBPACK_IMPORTED_MODULE_10__["PopularCategoriesComponent"], _components_main_categories_menu_categories_menu_component__WEBPACK_IMPORTED_MODULE_11__["CategoriesMenuComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/models/UserSignin.ts":
/*!*******************************************!*\
  !*** ./src/app/home/models/UserSignin.ts ***!
  \*******************************************/
/*! exports provided: UserSignin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignin", function() { return UserSignin; });
var UserSignin = /** @class */ (function () {
    function UserSignin() {
    }
    return UserSignin;
}());



/***/ }),

/***/ "./src/app/shared/utils/utils.ts":
/*!***************************************!*\
  !*** ./src/app/shared/utils/utils.ts ***!
  \***************************************/
/*! exports provided: UsernameValidator, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameValidator", function() { return UsernameValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
var UsernameValidator = /** @class */ (function () {
    function UsernameValidator() {
    }
    UsernameValidator.validUsername = function (fc) {
        if (fc.value.toLowerCase() === "abc123" || fc.value.toLowerCase() === "123abc") {
            return ({ validUsername: true });
        }
        else {
            return (null);
        }
    };
    return UsernameValidator;
}());

var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map