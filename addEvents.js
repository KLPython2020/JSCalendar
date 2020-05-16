//let eventTitle = document.getElementById('titleInput').value;
let eventMonth = document.getElementById('month');
let eventDate = document.getElementById('date');
let eventYear = document.getElementById('year');
let eventHours = document.getElementById('hours');
let eventMinutes = document.getElementById('mintues');
let eventAmPm = document.getElementById('amPm');
let eventTime = document.getElementById('eventTime');
let titleButton = document.getElementById('titleButton');
let dateButton = document.getElementById('dateButton');
const monthsArray = ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const datesArray = [31,28,31,30,31,30,31,31,30,31,30,31];
let eventObject = {
    "date": 15,
    "title": "this is the title",
    "time": "7pm",
    "details": "these are the details for the event."
}
let count = 0;
let currentTime = new Date();
let selectDate = document.createElement('select');
let selectMonth = document.createElement('select');
let selectYear = document.createElement('select');
let selectHours = document.createElement('select');
let selectMinutes = document.createElement('select');
let selectAmPm = document.createElement('select');
// let selectTime = 
function populateMonths(){
    titleButton.classList.add('hide');
    let monthLabel = document.createElement('label');
    monthLabel.textContent = 'What month will your event be held?';
    eventMonth.appendChild(monthLabel);
    eventMonth.appendChild(selectMonth);
    selectMonth.setAttribute('id','monthSelect');
    selectMonth.setAttribute('onchange','getMonthDates(this)');
    selectMonth.setAttribute('class', 'custom-select');
    let optionElement = document.createElement('option');
    optionElement.value = 12;
    optionElement.textContent = '';
    selectMonth.appendChild(optionElement);
    monthsArray.forEach((month, index)=>{
        optionElement = document.createElement('option');
        optionElement.value = index;
        console.log('this is the index of the ForEach: ' + index);
        optionElement.textContent = month;
        selectMonth.appendChild(optionElement);
    })  
}
function getMonthDates(monthSelected){
    let dateLabel = document.createElement('label');
    dateLabel.textContent = 'What day will your event be held?';
    eventDate.appendChild(dateLabel);
    selectDate.setAttribute('class', 'custom-select');
    selectDate.setAttribute('onchange', 'getYears(this)');
    let month = monthSelected.value;
    console.log(month+ 'this is the month value passed in');
    let counter = datesArray[month];
    eventDate.appendChild(selectDate);
    console.info(selectDate.length + ': checking the length ^^^^^^^^^');
    selectDate.length = 0;
    let optionElement = document.createElement('option');
    optionElement.value = '';
    optionElement.textContent = '';
    selectDate.appendChild(optionElement);
    for(let i = 1; i <= counter; i++){
        optionElement = document.createElement('option');
        optionElement.value = i;
        optionElement.textContent = i;
        selectDate.appendChild(optionElement);
    }
    console.log('This is your month value:::::::' + month);
}
function getYears(date){
    let yearLabel = document.createElement('label');
    yearLabel.textContent = 'What year will your event be held?';
    eventYear.appendChild(yearLabel);
    let currentYear = currentTime.getFullYear();
    selectYear.setAttribute('class', 'custom-select');
    selectYear.setAttribute('onchange', 'revealNext(this)');
    eventYear.appendChild(selectYear);
    selectYear.length = 0;
    let optionElement = document.createElement('option');
    optionElement.value = '';
    selectYear.appendChild(optionElement);
    for(let i = currentYear; i < (currentYear + 3); i++){
        optionElement = document.createElement('option');
        optionElement.value = i;
        optionElement.textContent = i;
        selectYear.appendChild(optionElement);
    }
    console.log('I am in the getYears functions '+ date.value);
    console.log('this is the ********: ' + selectMonth.value);
}
function revealNext(year){
    dateButton.classList.remove('hide');
}
dateButton.onclick = generateNextStep = () => {
    if(selectYear.value != ''){
        console.log('I am ready for the time and description'); 
        getTime();
    }
}
function getTime(){
    let hours = 12;
    let minutes = 59;
    let timeLabel = document.createElement('div');
    timeLabel.setAttribute('class','row');
    timeLabel.innerHTML = `<label>What time will your event start?</label>`;
    eventTime.prepend(timeLabel);
    eventHours.appendChild(selectHours);
    eventMinutes.appendChild(selectMinutes);
    eventAmPm.appendChild(selectAmPm);
    selectHours.setAttribute('class','custom-select');
    selectHours.setAttribute('id', 'hourSelected');
    selectMinutes.setAttribute('class','custom-select');
    selectMinutes.setAttribute('id', 'minuteSelected');
    selectAmPm.setAttribute('class','custom-select');
    selectAmPm.setAttribute('id', 'ampmSelected');
    let hourSelected = document.getElementById('hourSelected');
    let minuteSelected = document.getElementById('minuteSelected');
    let ampmSelected = document.getElementById('ampmSelected');
    for(let i = 1; i <= hours; i++){
        let optionElement = document.createElement('option');
        if(i === 1){
            optionElement.value = '';
            optionElement.textContent = 'hours'
            selectHours.appendChild(optionElement);
        }
        optionElement = document.createElement('option');
        optionElement.value = i;
        optionElement.textContent = i;
        selectHours.appendChild(optionElement);
    }
    for(let i = 0; i <= minutes; i++){
        let optionElement = document.createElement('option');
        if(i === 0){
            optionElement.value = '';
            optionElement.textContent = 'minutes';
            selectMinutes.appendChild(optionElement);
        }
        optionElement = document.createElement('option');
        optionElement.value = i;
        optionElement.textContent = (i < 10 ? `0${i}` : i);
        selectMinutes.appendChild(optionElement);
    }
    for(let i = 0; i < 2; i++){
        let optionElement = document.createElement('option');
        if(i === 0){
            optionElement.value = '';
            optionElement.textContent = 'AM or PM'
            selectAmPm.appendChild(optionElement);
        }
        optionElement = document.createElement('option');
        optionElement.value = i;
        i === 0 ? optionElement.textContent = 'AM' : optionElement.textContent = 'PM';
        selectAmPm.appendChild(optionElement);
    }
    console.log(`this is a test:::::: ${hourSelected.value}:${minuteSelected}${ampmSelected}`);
}
function time (){

}
titleButton.onclick = generateNextStep = () => {
    let eventTitle = document.getElementById('titleInput').value;
    let warning = document.getElementById('titleWarn');
    if(eventTitle != null && eventTitle != "" && count <= 0){
        if(!warning.classList.contains('hide')){
            warning.classList.add('hide');
        }
        console.log('this is the title input field:' + eventTitle);
        console.log('this works!!!!!!!');
        populateMonths();
        count++;
    }
    else{
        warning.classList.remove('hide');
    }      
}


