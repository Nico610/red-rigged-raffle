export class GewinnbarePreise {

  constructor(
    private DerName: string,
    private DieverbleibendeMenge : number,
  ) {}

  public get name(): string {
    return this.DerName;
  }

  public get verbleibendeMenge (): number {
    return this.DieverbleibendeMenge ;
  }

  public set verbleibendeMengeZuNeueMenge (neueMenge : number) {
    this.DieverbleibendeMenge  = neueMenge ;
  }
}
