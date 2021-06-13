'use strict';

let seatle = {mincust : 23 , maxcust : 65, avcookie : 6.3, cookesperhouer : [] , hours : [ '6am' , '7am' , '8am' ,'9am', '10am', '11am','12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
setHours : function(){
    let location = document.getElementById('locations');
    let hourslist = document.createElement('ul');
    location.appendChild(hourslist);
    for(let i = 0;i< this.hours.length;i++){
        let listItem = document.createElement('li');
        hourslist.appendChild(listItem);
        listItem.textContent =`${this.hours[i]}: ${this.cookesperhouer[i]} cookies`;
    }
},

getHours : function(){
function getRandomInclusive(min,max){
    return Math.floor(Math.random()* (max - min +1) + min);
}for(let i = 0;i< this.hours.length;i++){
    this.cookesperhouer.push(Math.floor(getRandomInclusive(this.mincust,this.maxcust)* this.avcookie));
} 
console.log(this.cookesperhouer)
}}


//render: function();

seatle.getHours();
seatle.setHours()







let Tokyo = {mincust : 3 , maxcust : 24, avcookie : 1.2, cookesperhouer : [] , hours : [ '6am' , '7am' , '8am' ,'9am', '10am', '11am','12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
setHours : function(){
    let location = document.getElementById('locations');
    let hourslist = document.createElement('ul');
    location.appendChild(hourslist);
    for(let i = 0;i< this.hours.length;i++){
        let listItem = document.createElement('li');
        hourslist.appendChild(listItem);
        listItem.textContent =`${this.hours[i]}: ${this.cookesperhouer[i]} cookies`;
    }
},

getHours : function(){
function getRandomInclusive(min,max){
    return Math.floor(Math.random()* (max - min +1) + min);
}for(let i = 0;i< this.hours.length;i++){
    this.cookesperhouer.push(Math.floor(getRandomInclusive(this.mincust,this.maxcust)* this.avcookie));
} 
console.log(this.cookesperhouer)
}}


//render: function();

Tokyo.getHours();
Tokyo.setHours()

let Dubai = {mincust : 11 , maxcust : 38, avcookie : 3.7, cookesperhouer : [] , hours : [ '6am' , '7am' , '8am' ,'9am', '10am', '11am','12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
setHours : function(){
    let location = document.getElementById('locations');
    let hourslist = document.createElement('ul');
    location.appendChild(hourslist);
    for(let i = 0;i< this.hours.length;i++){
        let listItem = document.createElement('li');
        hourslist.appendChild(listItem);
        listItem.textContent =`${this.hours[i]}: ${this.cookesperhouer[i]} cookies`;
    }
},

getHours : function(){
function getRandomInclusive(min,max){
    return Math.floor(Math.random()* (max - min +1) + min);
}for(let i = 0;i< this.hours.length;i++){
    this.cookesperhouer.push(Math.floor(getRandomInclusive(this.mincust,this.maxcust)* this.avcookie));
} 
console.log(this.cookesperhouer)
}}


//render: function();

Dubai.getHours();
Dubai.setHours()

let Paris = {mincust : 20 , maxcust : 38, avcookie : 2.3, cookesperhouer : [] , hours : [ '6am' , '7am' , '8am' ,'9am', '10am', '11am','12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
setHours : function(){
    let location = document.getElementById('locations');
    let hourslist = document.createElement('ul');
    location.appendChild(hourslist);
    for(let i = 0;i< this.hours.length;i++){
        let listItem = document.createElement('li');
        hourslist.appendChild(listItem);
        listItem.textContent =`${this.hours[i]}: ${this.cookesperhouer[i]} cookies`;
    }
},

getHours : function(){
function getRandomInclusive(min,max){
    return Math.floor(Math.random()* (max - min +1) + min);
}for(let i = 0;i< this.hours.length;i++){
    this.cookesperhouer.push(Math.floor(getRandomInclusive(this.mincust,this.maxcust)* this.avcookie));
} 
console.log(this.cookesperhouer)
}}


//render: function();

Paris.getHours();
Paris.setHours()

let Lima = {mincust : 2	 , maxcust : 16, avcookie : 4.6, cookesperhouer : [] , hours : [ '6am' , '7am' , '8am' ,'9am', '10am', '11am','12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
setHours : function(){
    let location = document.getElementById('locations');
    let hourslist = document.createElement('ul');
    location.appendChild(hourslist);
    for(let i = 0;i< this.hours.length;i++){
        let listItem = document.createElement('li');
        hourslist.appendChild(listItem);
        listItem.textContent =`${this.hours[i]}: ${this.cookesperhouer[i]} cookies`;
    }
},

getHours : function(){
function getRandomInclusive(min,max){
    return Math.floor(Math.random()* (max - min +1) + min);
}for(let i = 0;i< this.hours.length;i++){
    this.cookesperhouer.push(Math.floor(getRandomInclusive(this.mincust,this.maxcust)* this.avcookie));
} 
console.log(this.cookesperhouer)
}}


//render: function();

Lima.getHours();
Lima.setHours()