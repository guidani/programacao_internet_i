// rendimentos = salário base + comissões
// Vendas até 5 mil NÃO gera comissão
// Vendas acima de 5mil e menores de 10mil geram comissão de 5% para a DIFERENÇA
// Acima de 10mil até 30mil gera comissão de 10% para a DIFERENÇA
// Acima de 30 mil comissão de 20% sobre o que ultrapassar
var Commission = /** @class */ (function () {
    function Commission(nome, valor) {
        this.salarioFixo = 1100;
        this.percComissaoNivel1 = 5;
        this.rangeMinimoComissaoNivel1 = 5000;
        this.rangeMaximoComissaoNivel1 = 10000;
        this.percComissaoNivel2 = 10;
        this.rangeMinimoComissaoNivel2 = 10000;
        this.rangeMaximoComissaoNivel2 = 30000;
        this.percComissaoNivel3 = 20;
        this.rangeMinimoComissaoNivel3 = 30000;
        this.valComissaoNivel1 = 0;
        this.valComissaoNivel2 = 0;
        this.valComissaoNivel3 = 0;
        this.setNomeVendedor = nome;
        this.setVendasMes = valor;
    }
    Object.defineProperty(Commission.prototype, "getNomeVendedor", {
        get: function () {
            return this._nomeVendedor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Commission.prototype, "setNomeVendedor", {
        set: function (value) {
            this._nomeVendedor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Commission.prototype, "getVendasMes", {
        get: function () {
            return this._vendasMes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Commission.prototype, "setVendasMes", {
        set: function (value) {
            this._vendasMes = value;
        },
        enumerable: false,
        configurable: true
    });
    Commission.prototype.comissaoNivel3 = function (valor) {
        var comissao = valor * (this.percComissaoNivel3 / 100);
        return comissao;
    };
    Commission.prototype.comissaoNivel2 = function (valor) {
        var comissao = valor * (this.percComissaoNivel2 / 100);
        return comissao;
    };
    Commission.prototype.comissaoNivel1 = function (valor) {
        var comissao = valor * (this.percComissaoNivel1 / 100);
        return comissao;
    };
    Commission.prototype.totalComissao = function (valor) {
        var acc_comissao = 0;
        var diferenca = 0;
        // Para vendas até 10 mil - Nivel 1
        if (valor >= this.rangeMinimoComissaoNivel1 && valor < this.rangeMaximoComissaoNivel1) {
            diferenca = valor - this.rangeMinimoComissaoNivel1;
            this.valComissaoNivel1 = this.comissaoNivel1(diferenca);
            acc_comissao = acc_comissao + this.valComissaoNivel1;
        }
        // Para vendas entre 10 mil e 30 mil - Nivel 2
        else if (valor >= this.rangeMinimoComissaoNivel2 && valor < this.rangeMaximoComissaoNivel2) {
            diferenca = valor - this.rangeMinimoComissaoNivel2;
            this.valComissaoNivel1 = this.comissaoNivel1(this.rangeMinimoComissaoNivel1);
            this.valComissaoNivel2 = this.comissaoNivel2(diferenca);
            acc_comissao = this.valComissaoNivel2 + this.valComissaoNivel1;
        }
        // Para vendas acima de 30 mil - Nivel 3
        else if (valor >= this.rangeMinimoComissaoNivel3) {
            diferenca = valor - this.rangeMinimoComissaoNivel3;
            this.valComissaoNivel1 = this.comissaoNivel1(this.rangeMinimoComissaoNivel1);
            this.valComissaoNivel2 = this.comissaoNivel2(this.rangeMaximoComissaoNivel2 - this.rangeMinimoComissaoNivel2);
            this.valComissaoNivel3 = this.comissaoNivel3(diferenca);
            acc_comissao = this.valComissaoNivel3 + this.valComissaoNivel2 + this.valComissaoNivel1;
        }
        var totalSalario = this.salarioFixo + this.valComissaoNivel1 + this.valComissaoNivel2 + this.valComissaoNivel3;
        console.log("Total de vendas e comiss\u00E3o do vendedor: " + this._nomeVendedor);
        console.log("Total comiss\u00E3o n\u00EDvel 1 = R$" + this.valComissaoNivel1.toFixed(2));
        console.log("Total comiss\u00E3o n\u00EDvel 2 = R$" + this.valComissaoNivel2.toFixed(2));
        console.log("Total comiss\u00E3o n\u00EDvel 3 = R$" + this.valComissaoNivel3.toFixed(2));
        console.log("Total sal\u00E1rio = R$" + totalSalario.toFixed(2));
    };
    return Commission;
}());
var c = new Commission('Guilherme', 10001);
console.log(c.totalComissao(c.getVendasMes));
