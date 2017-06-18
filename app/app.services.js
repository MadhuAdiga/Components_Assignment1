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
var core_1 = require('@angular/core'); //Import injectable from angular
var AppServices = (function () {
    function AppServices() {
    }
    AppServices.prototype.getData = function () {
        return [
            { "name": "Angelina Pickles", "address": "4221 Marie Street, Towson, MD 21204" },
            { "name": "Donald Duck", "address": "3594 Brookside Drive, Birmingham, AL 35203" },
            { "name": "Lola Bunny", "address": "1907 Sardis Sta, Fort Worth, TX 76147" },
            { "name": "Uncle Scrooge", "address": "4210 Anmoore Road, New York, NY 10011" }
        ];
    };
    AppServices = __decorate([
        //Import injectable from angular
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppServices);
    return AppServices;
}());
exports.AppServices = AppServices;
//# sourceMappingURL=app.services.js.map