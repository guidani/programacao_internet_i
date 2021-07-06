// rendimentos = salário base + comissões
// Vendas até 5 mil NÃO gera comissão
// Vendas acima de 5mil e menores de 10mil geram comissão de 5% para a DIFERENÇA
// Acima de 10mil até 30mil gera comissão de 10% para a DIFERENÇA
// Acima de 30 mil comissão de 20% sobre o que ultrapassar

class Commission{
  private _nomeVendedor: string;
  private _vendasMes: number;
  public salarioFixo: number = 1100;

  public percComissaoNivel1: number = 5;
  public rangeMinimoComissaoNivel1: number = 5000;
  public rangeMaximoComissaoNivel1: number = 10000;

  public percComissaoNivel2: number = 10;
  public rangeMinimoComissaoNivel2: number = 10000;
  public rangeMaximoComissaoNivel2: number = 30000;

  public percComissaoNivel3: number = 20;
  public rangeMinimoComissaoNivel3: number = 30000;

  
  public valComissaoNivel1: number = 0;
  public valComissaoNivel2: number = 0;
  public valComissaoNivel3: number = 0;

  constructor(nome, valor){
    this.setNomeVendedor = nome;
    this.setVendasMes = valor;
  }

	public get getNomeVendedor(): string {
		return this._nomeVendedor;
	}

	public set setNomeVendedor(value: string) {
		this._nomeVendedor = value;
	}

	public get getVendasMes(): number {
		return this._vendasMes;
	}

	public set setVendasMes(value: number) {
		this._vendasMes = value;
	}

  comissaoNivel3(valor: number): number{
    let comissao: number = valor*(this.percComissaoNivel3/100);
    return comissao;
  }

  comissaoNivel2(valor: number): number{
    let comissao: number = valor * (this.percComissaoNivel2/100);
    return comissao
  }

  comissaoNivel1(valor: number): number{
    let comissao: number = valor * (this.percComissaoNivel1/100);
    return comissao;
  }

  totalComissao(valor: number):void {
    let acc_comissao: number = 0;
    let diferenca: number = 0;

    // Para vendas até 10 mil - Nivel 1
    if ( valor >= this.rangeMinimoComissaoNivel1 && valor < this.rangeMaximoComissaoNivel1){
      diferenca = valor - this.rangeMinimoComissaoNivel1
      this.valComissaoNivel1 = this.comissaoNivel1(diferenca)
      acc_comissao = acc_comissao + this.valComissaoNivel1;
    }
    // Para vendas entre 10 mil e 30 mil - Nivel 2
    else if ( valor >= this.rangeMinimoComissaoNivel2 && valor < this.rangeMaximoComissaoNivel2){
      diferenca = valor - this.rangeMinimoComissaoNivel2
      this.valComissaoNivel1 = this.comissaoNivel1(this.rangeMinimoComissaoNivel1)
      this.valComissaoNivel2 = this.comissaoNivel2(diferenca)
      acc_comissao = this.valComissaoNivel2 + this.valComissaoNivel1
    }
    // Para vendas acima de 30 mil - Nivel 3
    else if (valor >= this.rangeMinimoComissaoNivel3) {
      diferenca = valor - this.rangeMinimoComissaoNivel3
      this.valComissaoNivel1 = this.comissaoNivel1(this.rangeMinimoComissaoNivel1)
      this.valComissaoNivel2 = this.comissaoNivel2(this.rangeMaximoComissaoNivel2 - this.rangeMinimoComissaoNivel2)
      this.valComissaoNivel3 = this.comissaoNivel3(diferenca)
      acc_comissao = this.valComissaoNivel3 + this.valComissaoNivel2 + this.valComissaoNivel1
    }

    let totalSalario: number = this.salarioFixo + this.valComissaoNivel1 + this.valComissaoNivel2 + this.valComissaoNivel3;

    console.log(`Total de vendas e comissão do vendedor: ${this._nomeVendedor}`);
    console.log(`Total comissão nível 1 = R$${this.valComissaoNivel1.toFixed(2)}`);
    console.log(`Total comissão nível 2 = R$${this.valComissaoNivel2.toFixed(2)}`);
    console.log(`Total comissão nível 3 = R$${this.valComissaoNivel3.toFixed(2)}`);
    console.log(`Total salário = R$${totalSalario.toFixed(2)}` );
  }
}

let c = new Commission('Guilherme', 10001)
console.log(c.totalComissao(c.getVendasMes));
