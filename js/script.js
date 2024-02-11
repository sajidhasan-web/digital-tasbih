const alhamdulillahIncreament = document.getElementById(
  "alhamdulillahIncreament"
);
const alhamdulillahDecreament = document.getElementById(
  "alhamdulillahDecreament"
);
const alhamdulillahDisplay = document.getElementById("alhamdulillahDisplay");

const subhanAllahIncreament = document.getElementById("subhanAllahIncreament");
const subhanAllahdecreament = document.getElementById("subhanAllahdecreament");
const subhanAllahDisplay = document.getElementById("subhanAllahDisplay");

const allahuakberIncreament = document.getElementById('allahuakberIncreament')
const allahuakberDecreament = document.getElementById('allahuakberDecreament')
const allahuakberDisplay = document.getElementById('allahuakberDisplay')

let alhamdulillahInitialValue = 0;

let subhanAllahInitialValue = 0;
let allahuakberInitialValue = 0;
 
// alhamdulliah Increament button

alhamdulillahIncreament.addEventListener("click", function () {
  if (alhamdulillahInitialValue == 33) {
    return alert("Alhamdulillah! Go next");
  }
  alhamdulillahInitialValue += 1;
  alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
});

// alhamdulliah decreament button

alhamdulillahDecreament.addEventListener("click", function () {
  
    if(alhamdulillahInitialValue == 0){
        return alert('Negative value is not supported!')
    }
  alhamdulillahInitialValue -= 1
  alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
});

// subhanAllah Increament button

subhanAllahIncreament.addEventListener("click", function () {
  if (subhanAllahInitialValue == 33) {
    return alert("Subhan Allah! Go next");
  }
  subhanAllahInitialValue += 1;
  subhanAllahDisplay.innerText = subhanAllahInitialValue;
});


// subhanAllah decreament button

subhanAllahdecreament.addEventListener("click", function () { 
    if(subhanAllahInitialValue == 0){
        return alert('Negative value is not supported!')
    }
  subhanAllahInitialValue -= 1
  subhanAllahDisplay.innerText = subhanAllahInitialValue;
});

// allahuakber Increament button

allahuakberIncreament.addEventListener("click", function () {
    if (allahuakberInitialValue== 33) {
      return alert("You are Done!");
    }
    allahuakberInitialValue += 1;
   allahuakberDisplay.innerText = allahuakberInitialValue;
  });


// allahuakber Decreament button
allahuakberDecreament.addEventListener("click", function () { 
    if(allahuakberInitialValue == 0){
        return alert('Negative value is not supported!')
    }
  allahuakberInitialValue -= 1
  allahuakberDisplay.innerText = allahuakberInitialValue;
});

// reset btn

const restBtn = document.getElementById('reset').addEventListener('click', function(){
    alhamdulillahInitialValue = 0;
    subhanAllahInitialValue = 0;
    allahuakberInitialValue = 0;
    allahuakberDisplay.innerText = 0
    subhanAllahDisplay.innerText = 0
    alhamdulillahDisplay.innerText= 0
})
