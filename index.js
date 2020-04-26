let monthContainer = document.getElementById('month-container');
let yearContainer = document.getElementById('year-container');
let days = document.getElementById('days');
let dates = document.getElementById('dates');
let leftArrow = document.getElementById('left-arrow-container');
let rightArrow = document.getElementById('right-arrow-container');
let datesRow = document.querySelector('.dateCells');
let datesEvents = document.getElementById('datesEvents');
// let selectedDate = datesRow.querySelector('td.active');
const currentTime = new Date();
const month = currentTime.getMonth();
// console.log(monthsOfTheYear[0][0]);
const year = currentTime.getFullYear();
const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
const monthsOfTheYear = [
    ['January',31],
    ['February',28],
    ['March', 31],
    ['April', 30],
    ['May', 31],
    ['June', 30],
    ['July', 31],
    ['August', 31],
    ['September', 30],
    ['October', 31],
    ['November', 30],
    ['December', 31]
];
yearContainer.innerHTML = `<h3>${year}</h3>`;
monthContainer.innerHTML = `<h3>${monthsOfTheYear[month][0]}</h3>`;
daysPopulation();
firstDayOFTheMonth(month);
function daysPopulation (){
    const daysArray = Object.values(daysOfTheWeek);
    // console.log(daysArray.length)
    for (const day of daysArray){
        days.insertCell(-1).innerHTML = `${day}`;
    }
}
// find the first day of the month
function firstDayOFTheMonth (month){
    // console.log('this is the month being passed in the first day func: ' + month);
    let newFormat = '2020-' + (month > 9 ? (month + 1) : (month === 9 ? month + 1 : '0' + (month+1))) + '-02';
    console.log('this is month < 10 : ' + newFormat);
    const newDate = new Date(newFormat);
    // console.log('this is the newDate: ' + newDate);
    const newDay = newDate.getDay();
    // console.log('this is the first day: ' + newDay);  
    // console.log(daysOfTheWeek[newDay]); 
    return newDay;
}
let eventsPop = (month) => {
    let datesArray = [];
    //fetch function
    fetch('events.json').then(
        function(u){ return u.json();}
        ).then(
        function(json){
        data_function(json); //calling and passing json to another function data_function
        }
    )
    //another functions
    function data_function(data){
        
        // alert(data);
        console.log(data[month].dates); 
        
        let amountOfEvents = data[month].dates.length;
        console.log('amount of events in this month: ' + amountOfEvents);
        if (amountOfEvents > 0){
            for( let date in data[month].dates){
                datesArray.push(data[month].dates[date]); 
            }    
        }
        console.log(datesArray);
        populateDates(datesArray, month)
    }
    return datesArray;
}
console.log(eventsPop(month));
function populateEvents(arr, month){
    console.log(arr, "\n", month);
    }
// dates population
function populateDates (events, month){
    console.log('this is the month passed in to populateDates func: ***** ' + month);
    const rowCount = 5;
    const cellCount = 7;
    let dateCount = 1;
    const totalDates = monthsOfTheYear[month][1];
    const startDay =  firstDayOFTheMonth(month);
    console.log('this is the start day: ' + startDay);
    monthContainer.innerHTML = `<h3>${monthsOfTheYear[month][0]}<h3>`;
    console.log(events);
    console.log('is this working');
    renderInfo(events);
    function renderInfo(data){
        let eventDates = [];
        
        console.log(data);
        
        for(let date in data){
            
            eventDates.push(data[date].date);
        }
        let eventDetails = eventDates.map(function(date, index, title, time, details){
            return {
                key: index,
                // value: val
                date: eventDates[index],
                title: data[index].title,
                time: data[index].time,
                details: data[index].details,
                pic: data[index].pic
            }
        })
        console.log(eventDates);
        console.log(eventDetails);
        for (let i = 1; i <= rowCount; i++){ 
            let kCells = 0;
            let row = dates.insertRow(-1);
            // let datesClass = 'dateCells' + month;
            row.setAttribute('class', 'dateCells table-hover');
            dates.appendChild(row);
            if (i === 1){
                for (let j = 0; j < startDay; j++){
                    row.insertCell(-1).innerHTML = '';
                    kCells++;
                }
            }
            while(kCells < cellCount && dateCount <= totalDates){            
                let event = row.insertCell(-1);
                let cellId = 'eventDetails-'+`${dateCount}`;
                if(eventDates.includes(dateCount)){
                  event.setAttribute('id', `${cellId}`)
                  // add the class active
                    event.className = 'active';
                    event.innerHTML = dateCount;
                    let targetCell = document.getElementById(`${cellId}`);
                    if(targetCell){
                        targetCell.onclick = testing = ()=>{
                          console.info(eventDetails.length);
                          console.log(targetCell.innerText);
                          moreDetails(targetCell.innerText, eventDetails);
                        }
                    }
                    kCells++;
                    dateCount++; 
                }
                else {
                    event.innerHTML = dateCount;
                    kCells++;
                    dateCount++;
                }   
            }
        }   
    }
}
function moreDetails(id, data){
    id = parseInt(id);
    datesEvents.innerHTML = '';
    console.log(data[0].pic)
    for(let i = 0; i < data.length; i++){
        if(data[i].date === id){
            datesEvents.innerHTML += 
            `<div class="card mt-5" style="width: 18rem;">
                <img src="img/${data[i].pic}" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">${data[i].title}</h5>
                        <h6 class="text-muted"> Event time is at ${data[i].time}</h6>
                        <p class="card-text">${data[i].details}</p>
                        <a href="#" class="btn btn-primary">Click to sign up</a>
                    </div>
                </div>`;
        }
    }
}

// calendar pagination
let hold = month;
function deleteExistingRows (){
    console.log(dates.rows.length);
    rowCount = dates.rows.length;
    if(rowCount >=5){
        for(let i = rowCount-1; i > -1; i--){
            dates.deleteRow(i);
        }
    }
}
leftArrow.onclick = calLeftPagination = () => {
    deleteExistingRows();
    console.log('this is hold before if statement: ' + hold);
    if (hold > 0){
        --hold;
        console.log('this is hold within if statement: ' + hold);
        eventsPop(hold);
    }
    else if (hold === 0){
        console.log('this is hold in else statement: ' + hold);
        hold = 11;
        eventsPop(hold);
    }    
}
rightArrow.onclick = calRightPagination = () => {
    console.log('this is hold before if statement: ' + hold);
    deleteExistingRows();
    if (hold < 11){
        hold++;
        console.log('this is hold in if statement: ' + hold);
        eventsPop(hold);      
    }
    else if (hold === 11){

        console.log('this is hold in else if statement: ' + hold)
        hold = 0;
        eventsPop(hold);
        
    }
}
let selectedDate = document.querySelectorAll('active');
console.log(selectedDate);
// selectedDate.onclick = renderInfo = () => {
//     console.log(selectedDate.innerHTML);
// }
