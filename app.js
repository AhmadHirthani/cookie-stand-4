'use strict';

const hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let parentElement = document.getElementById('salesData');
function getRandomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  agvCookie: 6.3,
  cookiesPerHour: [],
  total: 0,
  getCustomer: function() {
    for(let i = 0; i < hours.length; i++) {
       console.log(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

      let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

      this.cookiesPerHour.push(cookies);

      this.total += cookies;
    }

     console.log(this.cookiesPerHour);
     console.log(this.total)
  },
  render: function() {
    let h2 = document.createElement('h2');
    parentElement.appendChild(h2);
    h2.textContent = this.name;

    let ul = document.createElement('ul');
    parentElement.appendChild(ul);

    for(let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    let total = document.createElement('li');
      ul.appendChild(total);
      total.textContent = `Total: ${this.total} cookies`;
}};

seattle.getCustomer();
seattle.render();



let Tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  agvCookie: 1.2,
  cookiesPerHour: [],
  total: 0,
  getCustomer: function() {
    for(let i = 0; i < hours.length; i++) {
       console.log(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

      let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

      this.cookiesPerHour.push(cookies);

      this.total += cookies;
    }

     console.log(this.cookiesPerHour);
     console.log(this.total)
  },
  render: function() {
    let h2 = document.createElement('h2');
    parentElement.appendChild(h2);
    h2.textContent = this.name;

    let ul = document.createElement('ul');
    parentElement.appendChild(ul);

    for(let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    let total = document.createElement('li');
      ul.appendChild(total);
      total.textContent = `Total: ${this.total} cookies`;
}};

Tokyo.getCustomer();
Tokyo.render();



let Dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  agvCookie: 3.7,
  cookiesPerHour: [],
  total: 0,
  getCustomer: function() {
    for(let i = 0; i < hours.length; i++) {
       console.log(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

      let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

      this.cookiesPerHour.push(cookies);

      this.total += cookies;
    }

     console.log(this.cookiesPerHour);
     console.log(this.total)
  },
  render: function() {
    let h2 = document.createElement('h2');
    parentElement.appendChild(h2);
    h2.textContent = this.name;

    let ul = document.createElement('ul');
    parentElement.appendChild(ul);

    for(let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    let total = document.createElement('li');
      ul.appendChild(total);
      total.textContent = `Total: ${this.total} cookies`;
}};

Dubai.getCustomer();
Dubai.render();




let paris = {
  name: 'paris',
  minCust: 20,
  maxCust: 38,
  agvCookie: 2.3,
  cookiesPerHour: [],
  total: 0,
  getCustomer: function() {
    for(let i = 0; i < hours.length; i++) {
       console.log(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

      let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

      this.cookiesPerHour.push(cookies);

      this.total += cookies;
    }

     console.log(this.cookiesPerHour);
     console.log(this.total)
  },
  render: function() {
    let h2 = document.createElement('h2');
    parentElement.appendChild(h2);
    h2.textContent = this.name;

    let ul = document.createElement('ul');
    parentElement.appendChild(ul);

    for(let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    let total = document.createElement('li');
      ul.appendChild(total);
      total.textContent = `Total: ${this.total} cookies`;
}};

paris.getCustomer();
paris.render();



let Lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  agvCookie: 4.6,
  cookiesPerHour: [],
  total: 0,
  getCustomer: function() {
    for(let i = 0; i < hours.length; i++) {
       console.log(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

      let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

      this.cookiesPerHour.push(cookies);

      this.total += cookies;
    }

     console.log(this.cookiesPerHour);
     console.log(this.total)
  },
  render: function() {
    let h2 = document.createElement('h2');
    parentElement.appendChild(h2);
    h2.textContent = this.name;

    let ul = document.createElement('ul');
    parentElement.appendChild(ul);

    for(let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    let total = document.createElement('li');
      ul.appendChild(total);
      total.textContent = `Total: ${this.total} cookies`;
}};

Lima.getCustomer();
Lima.render();