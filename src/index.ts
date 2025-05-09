import { GewinnSpiel } from "./absneakender-hase.js";
import { GewinnbarePreise } from "./gewinnbarer-hase.js";

export class Verlosung {
  public main() {
    const alleTeilnehmer = [
      "@Gangsta2007",
      "@LockeDerBoss",
      "@MiiMiiSeinBruder",
      "@AlphaKevin",
      "@RedSoldier499",
      "@Louisa12",
      "@Drachenlord",
      "@Tanzverbot",
      "@tiger10ab",
      "@kaesekrokette99",
      "@fortnite4ever",
      "@ColdplayFan",
      "@Sören2013",
      "@MichiJackson",
      "@Ronaldo7",
      "@SonGoku2011",
      "@NarutoBoy2000",
      "@Diggah69",
      "@roflomat",
      "@waifu_weeb",
      "@derp",
      "@MaxPower9000",
      "@MikrowellenPizza2006",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
    ];

    const allePreise = [
      new GewinnbarePreise("iPhone 16 Pro", 1),
      new GewinnbarePreise("Trip nach Dubi", 1),
      new GewinnbarePreise("Stepper nach Isti", 1),
      new GewinnbarePreise("10 kg Haribo", 2),
      new GewinnbarePreise("PlayStation 5 Slim", 3),
      new GewinnbarePreise("gebrauchte Sneaker", 5),
    ];

    const gewinnerUndPreise  = new GewinnSpiel(
      alleTeilnehmer,
      allePreise
    ).gewinnspielDurchfuehren();

    for (const [teilnehmer, preis] of gewinnerUndPreise.entries()) {
      console.log(`${teilnehmer} gewinnt ${preis}`);
    }
  }
}

new Verlosung().main();
