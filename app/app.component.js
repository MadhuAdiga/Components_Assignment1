"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core'); //Import Component and ngOnInit dependenicies
var app_services_1 = require('./app.services'); // Import AppService 
var AppComponent = (function () {
    function AppComponent(_appServives) {
        this._appServives = _appServives;
        this.cartoons = [{}]; //Declare an array of objects
    } //Declare a private variable of the type AppServices
    AppComponent.prototype.ngOnInit = function () {
        this.cartoons = this._appServives.getData(); //Run OnInit which assigns the variable to the data fetched by the getData function of the AppServices
    };
    AppComponent.prototype.updateCartoon = function (name, address) {
        this.name = name; //assign updated value to name
        this.address = address; //assign updated value to address
    };
    AppComponent = __decorate([
        // Import AppService 
        core_1.Component({
            selector: 'my-app',
            template: "<div class=\"container container-fluid\">\n\n             <h4>On click of the button, a modal component opens with data fetched by AppServices</h4><br><br>\n                <div *ngFor=\"let x of cartoons\"><!-- Iterate through the array of cartoons   -->\n                    <button class = \"btn btn-block btn-primary\"  data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"updateCartoon(x.name,x.address)\">{{x.name}}</button><!-- On click open the modal and also update the currently selected cartoon   -->\n                    <child [childId]=\"name\" [childAddress]=\"address\"></child><!-- Pass the parent parameters to the child component  -->\n                </div>\n                \n             </div>",
        }), 
        __metadata('design:paramtypes', [app_services_1.AppServices])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map