/*
Snack2**
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

/*Creo un array di oggetti
Proprietà: 
- nome
- punti fatti
- falli subiti
*/

const teams = [
    {
        name: "Inter",
        goal: 0,
        fouls: 0,
    },
    {
        name: "Milan",
        goal: 0,
        fouls: 0,
    },
    {
        name: "Juventus",
        goal: 0,
        fouls: 0,
    },
    {
        name: "Brasil",
        goal: 0,
        fouls: 0,
    }
]

//Get random number
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Ciclo for to scroll the array
for (let i = 0; i < teams.length; i++) {
  teams[i].goal = getRandomNumber(1, 100); //from 1 to 100
  teams[i].fouls = getRandomNumber(1, 50); //from 1 to 50
};

console.log('teams');

//New array to push the teams fouls

