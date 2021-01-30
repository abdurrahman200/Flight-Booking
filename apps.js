'use strict'
// Ticket calculation
function ticketHandler(ticket, isPlus) {
    const ticketCount = getInputValue(ticket);
    let ticketNewCount = ticketCount;
    if (isPlus == true && ticketCount < 10) {
        ticketNewCount = ticketCount + 1;
    }
    if (isPlus == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket + '-count').value = ticketNewCount;
    let ticketTotal = 0;
    if (ticket == 'first') {
        ticketTotal = ticketNewCount * 150;
    }
    if (ticket == 'economy') {
        ticketTotal = ticketNewCount * 100;
    }
    // document.getElementById(ticket + '-price').innerText = '$' + ticketTotal;
    calculateTotal();
}
function calculateTotal() {
    const firstCount = getInputValue('first');
    const economyCount = getInputValue('economy');
    const subtotal = firstCount * 150 + economyCount * 100;
    document.getElementById('sub-total').innerText = '$' + subtotal;
    const charge = Math.round(subtotal * 0.1);
    document.getElementById('charge-amount').innerText = '$' + charge;
    const totals = subtotal + charge;
    document.getElementById('totals').innerText = '$' + totals;
}
function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = Number(ticketInput.value);
    return ticketCount;
}

// Click Button to show

document.getElementById('button').addEventListener('click', function () {
    document.getElementById('remove').style.display = 'none';
    document.getElementById('show').style.display = 'block';

})

function buttonHandler(){

    const flightFromInput = document.getElementById('flightfrom').value;
    document.getElementById('user-flying-from').innerText = flightFromInput;

    const flyingToInput = document.getElementById('flyingto').value;
    document.getElementById('user-flying-to').innerText = flyingToInput;
    
    const departureInput = document.getElementById('departure').value;
    document.getElementById('user-departure-date').innerText = departureInput;

    const returnInput = document.getElementById('return').value;
    document.getElementById('user-return-date').innerText = returnInput;
}









