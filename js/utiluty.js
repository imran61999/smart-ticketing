const allKbd = document.getElementsByClassName("kbd");
console.log(allKbd);
let count= 0;
let availableSeat= 37;
let totalPrice = 0;
let totalTicket= 0;
let grandTotal= 0;
let couponApplied = false;

for(const kbd of allKbd){
    kbd.addEventListener("click", function (e){
        totalTicket++;
        console.log(totalTicket);
       if(totalTicket<5)
       {
         
        e.target.classList.add("selected");

        console.log(e.target.innerText);
        count =count+1;
        availableSeat=availableSeat-1;
        const price = 550;
        const seatClass = 'Economy';
        const selectedSeat = e.target.innerText;

        totalPrice = totalPrice + price;

        setInnerText('avail-count',availableSeat);
        setInnerText('booked',count);
        setInnerText('total',totalPrice);


        const selectedSeatContainer = document.getElementById('selected-seat');

        const li = document.createElement('li');

        const p1 = document.createElement('p');
        p1.innerText=selectedSeat;
        const p2 = document.createElement('p');
        p2.innerText = seatClass;
        const p3 = document.createElement('p');
        p3.innerText = price;

        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);

        selectedSeatContainer.appendChild(li);
       }
        else{
            alert("You can buy only four tickets");
        }
        
    })
}

function setInnerText(id, value){
    document.getElementById(id).innerText= value;
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


// to hide input field after enter coupon
const couponInput = document.getElementById('couponInput');
const applyButtonLabel = document.querySelector('.input');
function hideApplyButtonLabel() {
    applyButtonLabel.style.display = 'none';
}
document.getElementById('applyButton').addEventListener('click', function() {
    if (couponInput.value.trim() !== '') {
        const couponDiscount = 0.20; // 20% discount for coupon
        grandTotal = totalPrice * (1 - couponDiscount); 
        setInnerText("grandTotalId", grandTotal); // Update grand total
        hideApplyButtonLabel(); 
        couponApplied = true; // Set the flag to true since a coupon is applied
    } else {
        // If no coupon applied, grand total is equal to total price
        grandTotal = totalPrice;
        setInnerText("grandTotalId", grandTotal); // Update grand total
        hideApplyButtonLabel(); // Hide the apply button label
        couponApplied = false; // Set the flag to false since no coupon is applied
    }
});

