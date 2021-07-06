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

class Calcula{
  private _media14: number;
  private _mediaDia: number;

  constructor(media14, mediaDia){
    this.setMedia14 = media14;
    this.setMediaDia = mediaDia;
  }

  set setMedia14(valor){
    this._media14 = valor;
  }

  get getMedia14() {
    return this._media14;
  }

  set setMediaDia(valor){
    this._mediaDia = valor;
  }

  get getMediaDia() {
    return this._mediaDia;
  }

  calculaVariacaoPercentual(){
    // (VF / VI - 1) x100
    let resultado: number = (this.getMedia14 / this.getMediaDia -1)*100
    return resultado.toFixed(4)
  }

  classificacao(): any{
    const cvp = parseInt(this.calculaVariacaoPercentual());

    if ( cvp == this.getMedia14){
      return 'Em estabilidade';
    } else if (cvp > this.getMedia14){
      return 'Em alta';
    } else {
      return 'Em queda';
    }
    // console.log(typeof(cvp))
  }
}

let c = new Calcula(12, 10);
let resultado_variacao = c.calculaVariacaoPercentual()
console.log(resultado_variacao);
console.log(c.classificacao())


