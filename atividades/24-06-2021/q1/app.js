// Sobre a COVID, diariamente o noticiário informa a população dados importantes sobre a
// evolução e controle da doença. Neste cenário, usam-se atualmente os conceitos de Em
// queda, Em Alta e Em Estabilidade baseados nos números do dia(média) e dos últimos 14
// dias. Variações menores que 15% nos números indicam "Em Estabilidade".
// Construa uma implementação que calcule e classifique a variação dos dados de acordo com
// o explicado. Para isso, crie uma implementação em que dois atributos privados sejam
// inicializados no construtor de uma classe: Média de Casos há 14 dias e Média de Casos
// hoje. Crie um método que faça o cálculo da variação em % e retorne o valor. Crie um outro
// método que use o método anterior e retorne a classificação como uma string com os valores
// “Em alta”, “Em Estabilidade” e “Em queda.
var Calcula = /** @class */ (function () {
    function Calcula(media14, mediaDia) {
        this.setMedia14 = media14;
        this.setMediaDia = mediaDia;
    }
    Object.defineProperty(Calcula.prototype, "setMedia14", {
        set: function (valor) {
            this._media14 = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calcula.prototype, "getMedia14", {
        get: function () {
            return this._media14;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calcula.prototype, "setMediaDia", {
        set: function (valor) {
            this._mediaDia = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calcula.prototype, "getMediaDia", {
        get: function () {
            return this._mediaDia;
        },
        enumerable: false,
        configurable: true
    });
    Calcula.prototype.calculaVariacaoPercentual = function () {
        // (VF / VI - 1) x100
        var resultado = (this.getMedia14 / this.getMediaDia - 1) * 100;
        return resultado.toFixed(4);
    };
    Calcula.prototype.classificacao = function () {
        var cvp = parseInt(this.calculaVariacaoPercentual());
        if (cvp == this.getMedia14) {
            return 'Em estabilidade';
        }
        else if (cvp > this.getMedia14) {
            return 'Em alta';
        }
        else {
            return 'Em queda';
        }
        // console.log(typeof(cvp))
    };
    return Calcula;
}());
var c = new Calcula(12, 10);
var resultado_variacao = c.calculaVariacaoPercentual();
console.log(resultado_variacao);
console.log(c.classificacao());
