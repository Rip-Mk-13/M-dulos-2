class contaBancaria{
    constructor(saldoInicial){
        this._saldo = saldoInicial;
    }

    interpolacao(){
        return `Saldo do dia ${this._saldo}`
    }
}

const conta = new contaBancaria(1000);

console.log(conta.interpolacao);