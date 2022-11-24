// Speisekarte


/*
let menü= {
  haupt: [{name:"Margarita", price:10},{name:"Funghi", price:13}],
  neben: [{name:"Pommes",price:3},{name:"MiniPiza", price:2.50}],
  dessert: [{name:"Joghurt", price:2.50},{name:"Kuchen", price:3}],
*/


  class Menü {
   constructor(name, price){
      this._name = name;
      this._price = price;
   }

   // Gibt Name und Preis zurück

   get name() {
      return this._name;
   }

   get price() {
      return this._price;
   }

// Preisänderung mit Validierung

    newPrice(value) {
      if (typeof value === "number"){
         this._price = value;
      } else {
         console.log("a number, pleas")
      }
   } 
  }



  //Unterklasse Pizza

  class Pizza extends Menü {
   constructor(name, price, souce){
      super(name, price);
      this._souce = souce;
   }

   //Soucen ausgabe

   get souce() {
      return this._souce;
   }
  }


const soucen = ["Majo", "Ketchup"];

const Margarita = new Pizza("Margaritha", 12.99, soucen);
const Thuna = new Pizza("Thuna", 14.99, soucen);
const Funghui = new Pizza("Funghui", 11.99, soucen);
const Bolognese = new Pizza("Bolognese", 15.99, soucen);

const pizzaTablet = [Margarita, Thuna, Funghui,Bolognese];

//Gibt was aus der Liste pizzaTablet
const arrayReader = array => {
   let sum = [];
   for(let i = 0; i < array.length; i++){
      sum.push(`${array[i].name} cost: ${array[i].price}`);
   }
   return sum;
}

console.log(arrayReader(pizzaTablet));









/*
console.log(Margarita);
console.log(Margarita.price);
Margarita.newPrice(10);
console.log(Margarita.price);
console.log(Margarita.souce);





/*
//Gibt alle Hauptspeisen zurück 
  get hauptspeisen() {
       let speisen = "";
       for (let i= 0; i< this.haupt.length;i++ ){
          speisen += `${this.haupt[i].name}: ${this.haupt[i].price} €  `;
          }
       return speisen 
  },

  //Gibt alle Nebenspeisen zurück
  get nebenspeisen() {
      let speisen = "";
      for (let i= 0; i< this.neben.length;i++ ){
         speisen += `${this.neben[i].name}: ${this.neben[i].price} €  `;
         }
      return speisen 
 },

 //Gibt alle Desserts zurück 
 get desserts() {
  let speisen = "";
  for (let i= 0; i< this.dessert.length;i++ ){
     speisen += `${this.dessert[i].name}: ${this.dessert[i].price} €  `;
     }
  return speisen 
  },

   
  
}

console.log(menü.hauptspeisen);
console.log(menü.nebenspeisen);
console.log(menü.desserts);

*/