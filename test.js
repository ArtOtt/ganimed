// Speisekarte

let menü= {
    haupt: [{name:"Margarita", price:10},{name:"Funghi", price:13}],
    neben: [{name:"Pommes",price:3},{name:"MiniPiza", price:2.50}],
    dessert: [{name:"Joghurt", price:2.50},{name:"Kuchen", price:3}],

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



