const seats = document.querySelectorAll('kbd');
// console.log(seats);
for (let index= 0 ; index<seats.length; index++){
    const seat = seats[index];
    seat.addEventListener("click", function(){
        const selectedSeat =document.getElementById('selected-seat');
        // console.log(selectedSeat.innerText);
        const span = document.createElement('span');
        span.innerText = 'enter a sentance';
        span.appendChild(span)

    });
}