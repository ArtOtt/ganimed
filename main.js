let menü = {

 food: { 
  pizza1: {name:"Pizza Margatha",Preis:12.99,Zutaten:"Tomaten Zwiebeln...", souce:["ketchup","mayo"]},
  pizza2: {name:"Pizza fungi",Preis:10.99,Zutaten:"Tuzgiu Zwijpiebeln...", souce:["ketchup","mayo"]},
},

//Gibt Alle Speisen aus menü.food
get foodList() {
  let one = "";
  for (let speiseKarte in this.food) {
     one +=`${this.food[speiseKarte].name}: ${this.food[speiseKarte].Preis} Zutaten:${this.food[speiseKarte].Zutaten}`;
  } 
  return one
}
}


console.log(menü.foodList);
//Speisekarte;


