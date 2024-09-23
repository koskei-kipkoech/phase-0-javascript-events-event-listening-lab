function addingEventListener() {
    const input = document.getElementById("button")
    function clickAlert(){
        alert("I was clisked")
    }
    input.addEventListener("click",clickAlert);
}
addingEventListener();

