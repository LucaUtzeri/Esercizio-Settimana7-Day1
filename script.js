class Utente {
  constructor(firstName, lastName, age, location) {
    this.name = firstName;
    this.surname = lastName;
    this.age = age;
    this.location = location;
  }
  static ageDiff(utente1, utente2) {
    if (utente1.age > utente2.age) {
      console.log(utente1.name + " è piu grande");
    } else if (utente2.age > utente1.age) {
      console.log(utente2.name + " è piu grande");
    } else {
      console.log(utente1.name + " e " + utente2.name + "sono coetanei");
    }
  }
}

const newUtente = new Utente("Mario", "Rossi", 48, "Roma");
console.log(newUtente);
const newUtente2 = new Utente("Gennaro", "Bruno", 23, "Venezia");
console.log(newUtente2);
const newUtente3 = new Utente("Luigi", "Verdi", 87, "Genova");
console.log(newUtente3);

Utente.ageDiff(newUtente2, newUtente);
