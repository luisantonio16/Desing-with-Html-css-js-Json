import datos from './data.json' assert {type: 'json'};

let daylybtn = document.querySelector('#daily');
let weeklybtn = document.querySelector('#weekly');
let monthlybtn = document.querySelector('#monthly');

let cardSecond = document.querySelector('.card-second');

let daylyarrays = datos.map(item => item.timeframes.daily);
let weeklyarrays = datos.map(item => item.timeframes.weekly);
let monthlyarrays = datos.map(item => item.timeframes.monthly);


let background = [
    'hsl(246, 80%, 60%)',
    'hsl(15, 100%, 70%)',
     'hsl(195, 74%, 62%)',
     'hsl(348, 100%, 68%)',
     'hsl(145, 58%, 55%)',
     'hsl(264, 64%, 52%)',
    ' hsl(43, 84%, 65%)',
]

daylybtn.addEventListener('click', ()=>{
    drawElmnt(daylyarrays)
});


weeklybtn.addEventListener('click', ()=>{
    drawElmnt(weeklyarrays)
});


monthlybtn.addEventListener('click', ()=>{
    drawElmnt(monthlyarrays)
});

function drawElmnt(array){
    cardSecond.innerHTML ='';
    array.forEach(( element, index)=>{

       let tilte =  datos[index].title
       let titleimg = tilte.toLowerCase();

        cardSecond.innerHTML +=`
        <div class="card">
          <div class="card-background" style ="background-color:${background[index]};">
          <img class="card-image" src="./Image/icon-${titleimg}.svg" alt="./Image/icon-work.svg">
          </div>
            <div class="card-details">
                <div class="card-activity">
                 <p class="card-title">${tilte}</p>
                 <img class="image" src="./Image/icon-ellipsis.svg" alt="Image">
                </div>
             <div class="card-hours">
                 <p class="card-hour">${element.current}Hrs</p>
                <p class="card-previous">${element.previous}Hrs</p>
              </div>
           </div>
        </div>        
        `                  
    })

}

drawElmnt(weeklyarrays);
