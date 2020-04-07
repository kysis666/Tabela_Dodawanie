import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';
// Import Routes
import routes from './routes.js';

// Import main app component
import App from '../app.f7.html';

var app = new Framework7({
  root: '#app', // App root element
  component: App, // App main component
  id: 'io.framework7.myapp', // App bundle ID
  name: 'My App', // App name
  theme: 'auto', // Automatic theme detection


  // App routes
  routes: routes,


  // Input settings
  input: {
    scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
    scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});



/////////////////////////////////////////////////////////////////////////////////////
$$(document).on('page:init', '.page[data-name="kalkulator"]', function()
{    
  //DODAWANIE
  $$('#dod').on('click',()=>
  {    
    var x = document.getElementById("x").value; 
    var x = parseInt(x); 
    var y = document.getElementById("y").value; 
    var y = parseInt(y);
     
    var wynik = x+y;
    document.getElementById("wypisz").innerHTML="<h2>Dodawanie:<br>"+wynik;
  });

  //ODEJMOWANIE
  $$('#ode').on('click',()=>
  {    
    var x = document.getElementById("x").value; 
    var x = parseInt(x); 
    var y = document.getElementById("y").value; 
    var y = parseInt(y); 

    var wynik = x-y;
    document.getElementById("wypisz").innerHTML="<h2>Odejmowanie:<br>"+wynik;
  });

  //MNOŻENIE
  $$('#mno').on('click',()=> 
  {    
    var x = document.getElementById("x").value; 
    var x = parseInt(x); 
    var y = document.getElementById("y").value; 
    var y = parseInt(y); 

    var wynik = x*y;
    document.getElementById("wypisz").innerHTML="<h2>Mnozenie:<br>"+wynik;
  });

  //DZIELENIE
  $$('#dzi').on('click',()=> 
  { 
    var x = document.getElementById("x").value; 
    var x = parseInt(x); 
    var y = document.getElementById("y").value; 
    var y = parseInt(y); 

    var wynik = x/y;
    document.getElementById("wypisz").innerHTML="<h2>Dzielenie:<br>"+wynik;
  });   
})










/*
$$(document).on('page:init', '.page[data-name="tabela"]', function()
{
  let a = 0;
  let b = 0;

  $$('#dod').on('click', () => 
  {                     
    let numerek = a+1;
    a++;
    b++;
    let kol = a*12;
    let kol1 = "*12="
    let kol2 = a
    var table = document.getElementById("myTable");
    var row = table.insertRow(b);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "12";
    cell2.innerHTML = numerek;
    cell3.innerHTML = kol2+kol1+kol;
  }); 
})
*/


$$(document).on('page:init', '.page[data-name="tabela"]', function()
{
  var x = 0;
  var y = 0;

  $$('#dod').on('click', () =>
  { 

    var roww2 = x+1;

    x++;
    y++;

    var row1 = x*12;
    var row3 = "x12="
    var row2 = y;

    var table = document.getElementById("table");
    var row = table.insertRow(y);
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = "12";
    cell2.innerHTML = roww2;
    cell3.innerHTML = row2 + row3 + row1;
  });
})