export class RentModel {
  veicolo: string;
  numeroNoleggi: number;

  constructor(veicolo: string, numeroNoleggi: number) {
    this.veicolo = veicolo;
    this.numeroNoleggi = numeroNoleggi;
  }
}