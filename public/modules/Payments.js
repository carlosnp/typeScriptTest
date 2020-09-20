export class Payments {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} tenia un monto de  ${this.amount}$ para ${this.details}`;
    }
}
