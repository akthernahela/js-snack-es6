/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bikes = [
    {
        name: 'Mountain bike',
        weight: 16,
    },
    {
        name: 'City bike',
        weight: 12,
    },
    {
        name: 'Gravel bike',
        weight: 10,
    },
    {
        name: 'Fat bike',
        weight: 20,
    },
]

//Variabile per il peso minore
let lightWeight = bikes[0].weight;
//Trova la bici che pesa meno di tutte nella array
for (let i = 0; i < bikes.length; i++){
    if (bikes[i].weight < lightWeight) {
        lightWeight = bikes[i].weight;
    }
}

console.log("Light weight bike:", lightWeight);

