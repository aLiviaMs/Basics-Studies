function calculateTip(event) {
    event.preventDefault();
    var bill = document.getElementById('bill').value;
    var serviceQual = document.getElementById('serviceQual').value;
    var numPeople = document.getElementById('people').value;

    if(bill == '' | serviceQual == 0 | numPeople == 0){
        alert("Please, fill all fields");
    } else if(bill < 0 | numPeople < 1){
        alert("One or more values are invalid. Please fill the fields again.")
    }

    if(numPeople == 1) {
        document.getElementById('totalTip').style.opacity = "100";
        document.getElementById('eachP').style.display = "none";
    } else if(numPeople <= 0 || bill <= 0 || serviceQual.value == 0){
        document.getElementById('totalTip').style.opacity = "0";
        document.getElementById('eachP').style.display = "none";
    } else {
        document.getElementById('totalTip').style.opacity = "100";
        document.getElementById('eachP').style.display = "inline-block";
    }

    var total = (bill * serviceQual) / numPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
}

document.getElementById('totalTip').style.opacity = "0";
document.getElementById('eachP').style.display = "none";
document.getElementById('tipsForm').addEventListener('submit', calculateTip);
