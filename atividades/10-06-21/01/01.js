var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DefineColecao;
(function (DefineColecao) {
    var CriaMetodos = /** @class */ (function () {
        function CriaMetodos(_a) {
            this.a = [];
        }
        CriaMetodos.prototype.proximo = function (i) {
            return this.a[i + 1];
        };
        CriaMetodos.prototype.atual = function (i) {
            return this.a[i];
        };
        CriaMetodos.prototype.isPrimeiro = function (i) {
            return i == 0;
        };
        CriaMetodos.prototype.isUltimo = function (i) {
            return i != 0;
        };
        CriaMetodos.prototype.irParaPrimeiro = function (i) {
            return this.a[0];
        };
        return CriaMetodos;
    }());
    var ColecaoArray = /** @class */ (function (_super) {
        __extends(ColecaoArray, _super);
        function ColecaoArray() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ColecaoArray.prototype.adiciona = function (values) {
            this.a.push(values);
        };
        return ColecaoArray;
    }(CriaMetodos));
    var colecao = new ColecaoArray([]);
    colecao.adiciona(1);
    colecao.adiciona(2);
    colecao.adiciona(3);
    colecao.adiciona(4);
    colecao.adiciona(5);
})(DefineColecao || (DefineColecao = {}));
