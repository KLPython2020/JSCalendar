//let eventTitle = document.getElementById('titleInput').value;
let eventMonth = document.getElementById('month');
let eventDate = document.getElementById('date');
let eventYear = document.getElementById('year');
let monthButton = document.getElementById('monthButton');
const monthsArray = ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const datesArray = [31,28,31,30,31,30,31,31,30,31,30,31];

function populateMonths (){
    let selectMonth = document.createElement('select');
    eventMonth.appendChild(selectMonth);
    selectMonth.setAttribute('class','col-md-2 mb-3');
    selectMonth.setAttribute('class', 'custom-select');
    monthsArray.forEach((month, index)=>{
        let optionElement = document.createElement('option');
        optionElement.value = index;
        console.log('this is the index of the ForEach: ' + index);
        optionElement.textContent = month;
        selectMonth.appendChild(optionElement);
    })
}
monthButton.onclick = generateNextStep = () => {
    let eventTitle = document.getElementById('titleInput').value;
    if(eventTitle != null && eventTitle != ""){
        console.log('this is the title input field:' + eventTitle);
        console.log('this works!!!!!!!');
        populateMonths();
    }
        
    
}
