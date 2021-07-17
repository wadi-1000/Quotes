export class Quote {
    showQuote: boolean;
    constructor(public id:number, public author:string, public quote:string, public submitDate: Date) {
       this.showQuote=false;
    }
}
