const isAdult = (age) => age >= 18;
const canDrink = (age) => age >=16; 

const isSenior = (age) => age >= 70;


export { isAdult, canDrink, isSenior as default };