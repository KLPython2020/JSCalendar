//let eventTitle = document.getElementById('titleInput').value;
let eventMonth = document.getElementById('month');
let eventDate = document.getElementById('date');
let eventYear = document.getElementById('year');
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
function populateMonths (){
    
    
    // let selectYear = document.createElement('select');
    // let monthButton = document.createElement('button');
    
    eventMonth.appendChild(selectMonth);
    selectMonth.setAttribute('id','monthSelect');
    
    selectMonth.setAttribute('onchange','getMonthDates(this)');
    // selectMonth.setAttribute('class','col-md-1 mb-3');
    selectMonth.setAttribute('class', 'custom-select');
    let optionElement = document.createElement('option');
    optionElement.value = 12;
    // console.log('this is the index of the ForEach: ' + index);
    optionElement.textContent = '';
    selectMonth.appendChild(optionElement);
    monthsArray.forEach((month, index)=>{
        optionElement = document.createElement('option');
        optionElement.value = index;
        console.log('this is the index of the ForEach: ' + index);
        optionElement.textContent = month;
        selectMonth.appendChild(optionElement);
    })
    
    // eventMonth.appendChild(monthButton);
    // monthButton.setAttribute('id', 'monthButton');
    // monthButton.setAttribute('class', 'btn btn-primary');
    // monthButton.setAttribute('type', 'submit');
    // monthButton.textContent = 'Next';
    // monthButton.onclick = generateMonth = () => {
    //     getEventMonth();
    // }
    
}
function getMonthDates(monthSelected){
   // selectDate.setAttribute('class','col-md-1 mb-3');
    selectDate.setAttribute('class', 'custom-select');
    selectDate.setAttribute('onchange', 'getYears(this)');
    let month = monthSelected.value;
    console.log(month+ 'this is the month value passed in');
    //selectedMonth.options[selectedMonth.selectedIndex].value;
    let counter = datesArray[month];
    eventDate.appendChild(selectDate);
    console.info(selectDate.length + ': checking the length ^^^^^^^^^');
    selectDate.length = 0;
    let optionElement = document.createElement('option');
    optionElement.value = '';
    // console.log('this is the index of the ForEach: ' + index);
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
    let currentYear = currentTime.getFullYear();
   // selectYear.setAttribute('class', 'col-md-1 mb-3');
    selectYear.setAttribute('class', 'custom-select');
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
    dateButton.classList.remove('hide');
    
    console.log('I am in the getYears functions '+ date.value);
    console.log('this is the ********: ' + selectMonth.value);
}
dateButton.onclick = generateNextStep = () => {
    if(selectYear.value != ''){
        console.log('I am ready for the time and description'); 
    }
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


