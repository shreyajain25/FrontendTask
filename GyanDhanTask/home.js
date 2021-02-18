let afterLoad = localStorage.getItem('msg');

function loadSpinner(){
    // Load Spinner
    let spin = document.getElementById("spin");
    let msg = document.getElementById("msg");
    (() => {
        setTimeout(() => {
            spin.style.visibility = "hidden";
            if(afterLoad == "null" || afterLoad === null || afterLoad === ""){
                document.getElementById("msg").innerHTML = "Your Message has been sent to the Caterer";
            }else{
                document.getElementById("msg").innerHTML = afterLoad;
                localStorage.removeItem('msg');
            }
            msg.style.visibility = "visible";
        }, 5 * 1000);
    })();
    
}

function setName(){
    let x = document.getElementById("name");
    localStorage.setItem('name', x.value);
}
function setNumber(){
    let x = document.getElementById("noOfPeople");
    localStorage.setItem('noOfPeople', x.value);
}
function setDate(){
    let x = document.getElementById("date");
    localStorage.setItem('date', x.value);
}
function setMessage(){}


(() => {
    let name = localStorage.getItem('name');
    let noOfPeople = localStorage.getItem('noOfPeople');
    let date = localStorage.getItem('date');

    if(name){
        localStorage.removeItem('name');
        afterLoad = `${name}! Your Message has been sent to the Caterer`;
        if(noOfPeople){
            localStorage.removeItem('noOfPeople');
            afterLoad = `${name}! Your Message has been sent to the Caterer for ${noOfPeople}`;
            if(date){
                localStorage.removeItem('date');
                afterLoad = `${name}! Your Message has been sent to the Caterer for ${noOfPeople} for booking on ${date}`;
            }
        }
    }else if(noOfPeople){
        localStorage.removeItem('noOfPeople');
        afterLoad = `Your Message has been sent to the Caterer for ${noOfPeople}`;
        if(date){
            afterLoad = `Your Message has been sent to the Caterer for ${noOfPeople} for booking on ${date}`;
        }
    }else if(date){
        localStorage.removeItem('date');
        afterLoad = `Your Message has been sent to the Caterer for booking on ${date}`;
    }

    localStorage.setItem('msg', afterLoad);

})();