"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var mobx_1 = require("./node_modules/mobx");
// 卦例笔记
var Note = /** @class */ (function () {
    function Note(quanGua) {
        // 分析
        this.analysis = "";
        // 断言
        this.assert = "";
        // 结果
        this.result = "";
        // 准确否
        this.rigth = undefined;
        this.quanGua = mobx_1.observable(quanGua);
    }
    __decorate([
        mobx_1.observable
    ], Note.prototype, "quanGua");
    __decorate([
        mobx_1.observable
    ], Note.prototype, "analysis");
    __decorate([
        mobx_1.observable
    ], Note.prototype, "assert");
    __decorate([
        mobx_1.observable
    ], Note.prototype, "result");
    __decorate([
        mobx_1.observable
    ], Note.prototype, "rigth");
    return Note;
}());
exports.Note = Note;
