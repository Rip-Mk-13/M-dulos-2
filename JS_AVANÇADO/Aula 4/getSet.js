class contaBancaria{
    constructor(valor) {
        this._saldo = valor;
    }

    get saldo() {
        return(this.saldo)
    }

    set saldo(novoValor) {
        if(novoValor <= 0) {
            console.error("O saldo não pode ser negativo ou nulo!")
        } else {
            this._saldo = this._saldo + novoValor
        }
    }
}

const conta = new contaBancaria(-1000);

let conta1 = this._saldo;

console.log(conta._saldo)

console.log(conta1)