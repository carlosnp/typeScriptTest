export class Invoice {
    // client:string;
    // details:string;
    // amount:number;
    constructor(
    // Solo lectura
    client, 
    // Solo se puede modificar o imprimir dentro de la funcion
    details, 
    // La misma de siempre(puede hacer lo que sea)
    amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} tiene ${this.amount}$ para ${this.details}`;
    }
}
