import { GewinnbarePreise } from "./gewinnbarer-hase";
export class GewinnSpiel {
  constructor(
    private teilnehmerListe: string[],
    private gewinnbarePreise: GewinnbarePreise[],
  ) {}


  public gewinnspielDurchfuehren(): Map<string, string> {

    const gewinnerZuPreisenMap = new Map<string, string>();
    const zufaelligeTeilnehmerReihenfolge = new Array<string>();

    while (this.teilnehmerListe.length > 0) {
      const zufälligeZahl = Math.random();
      const auswahlIndex = Math.floor(
        zufälligeZahl * this.teilnehmerListe.length,
      );
      const ausgesuchterTeilnehmer = this.teilnehmerListe[auswahlIndex];
      zufaelligeTeilnehmerReihenfolge.push(ausgesuchterTeilnehmer); 
      this.teilnehmerListe.pop();
    }
    while (this.gewinnbarePreise.length > 0 && zufaelligeTeilnehmerReihenfolge.length > 0) {
      const preis = this.gewinnbarePreise[0];
      const gewinner = zufaelligeTeilnehmerReihenfolge.shift();
      gewinnerZuPreisenMap.set(gewinner, preis.name);
      if (preis.verbleibendeMenge  > 0) {
        this.gewinnbarePreise.shift();
      } else {
        this.gewinnbarePreise[0].verbleibendeMengeZuNeueMenge --;
      }
    }
    return gewinnerZuPreisenMap;
  }
}
