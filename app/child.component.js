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
var ChildComponent = (function () {
    function ChildComponent(_appServives) {
        this._appServives = _appServives;
        this.cartoons = [{}]; //Declare an array of objects
    } //Declare a private variable of the type AppServices
    ChildComponent.prototype.ngOnInit = function () {
        this.cartoons = this._appServives.getData(); //Run OnInit which assigns the variable to the data fetched by the getData function of the AppServices
    };
    __decorate([
        //Declare a private variable of the type AppServices
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChildComponent.prototype, "childId", void 0);
    __decorate([
        //Receive the name fom the parent
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChildComponent.prototype, "childAddress", void 0);
    ChildComponent = __decorate([
        // Import AppService 
        core_1.Component({
            selector: 'child',
            template: " <!-- Modal -->\n                <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n                <div class=\"modal-dialog\">\n\n                    <!-- Modal content-->\n                    <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                        <h4 class=\"modal-title\">{{childId}}</h4><!-- Interpolate the child name -->\n                    </div>\n                    <div class=\"modal-body\">\n                        <p><b>Address: </b>{{childAddress}}</p><!--Interpolate the address value received from the parent -->\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    </div>\n                    </div>\n\n                </div>\n                </div>",
        }), 
        __metadata('design:paramtypes', [app_services_1.AppServices])
    ], ChildComponent);
    return ChildComponent;
}());
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map