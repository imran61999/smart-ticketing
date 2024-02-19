
const allKbd = document.getElementsByClassName("kbd");
console.log(allKbd);
let count = 0;
let availableSeat = 37;
let totalPrice = 0;
let totalTicket = 0;
let grandTotal = 0;
let couponApplied = false;

for (const kbd of allKbd) {
    kbd.addEventListener("click", function (e) {
        totalTicket++;
        console.log(totalTicket);
        if (totalTicket < 5) {

            e.target.classList.add("selected");

            console.log(e.target.innerText);
            count = count + 1;
            availableSeat = availableSeat - 1;
            const price = 550;
            const seatClass = 'Economy';
            const selectedSeat = e.target.innerText;

            totalPrice = totalPrice + price;

            setInnerText('avail-count', availableSeat);
            setInnerText('booked', count);
            setInnerText('total', totalPrice);


            const selectedSeatContainer = document.getElementById('selected-seat');

            const li = document.createElement('li');

            const p1 = document.createElement('p');
            p1.innerText = selectedSeat;
            const p2 = document.createElement('p');
            p2.innerText = seatClass;
            const p3 = document.createElement('p');
            p3.innerText = price;

            li.appendChild(p1);
            li.appendChild(p2);
            li.appendChild(p3);

            selectedSeatContainer.appendChild(li);
        } else {
            alert("You can buy only four tickets");
        }

    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function handleNext() {
    const modal = document.getElementById('my_modal_5');
    if (modal) {
        modal.showModal();
    }
}

document.getElementById('nextButton').addEventListener('click', handleNext);

function handleCloseModal() {
    const modal = document.getElementById('my_modal_5');
    if (modal) {
        modal.close();
    }
}
document.getElementById('closeModalButton').addEventListener('click', handleCloseModal);


function applyCoupon(couponCode) {
    let couponDiscount = 0;
    if (couponCode === 'NEW15') {
        couponDiscount = 0.15; 
    } else if (couponCode === 'Couple 20') {
        couponDiscount = 0.20;
    } else {
        
        couponDiscount = 0;
    }
    grandTotal = totalPrice * (1 - couponDiscount); 
    setInnerText("grandTotalId", grandTotal);
}

document.getElementById('applyButton').addEventListener('click', function () {
    const couponInput = document.getElementById('couponInput').value.trim();
    if (couponInput === 'NEW15' || couponInput === 'Couple 20') {
        applyCoupon(couponInput);
        couponApplied = true; 
    } else {
        
        grandTotal = totalPrice;
        setInnerText("grandTotalId", grandTotal); 
        alert('Invalid coupon code. Please enter either NEW15 or Couple20.');
    }
    hideApplyButtonLabel(); 
});

function hideApplyButtonLabel() {
    document.querySelector('.input').style.display = 'none';
}
