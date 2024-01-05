function showReservationForm() {
    var reservationForm = document.getElementById('reservationForm');
    reservationForm.style.display = 'block';
}

function submitReservation() {
    // Add logic to handle reservation submission
    alert('Reservation submitted successfully!');
}
let currentSpecialty = 1;
    const totalSpecialties = 5;

    function changeSpecialty(direction) {
        currentSpecialty += direction;

        if (currentSpecialty > totalSpecialties) {
            currentSpecialty = 1;
        } else if (currentSpecialty < 1) {
            currentSpecialty = totalSpecialties;
        }

        updateGallery();
    }

 function updateGallery() {
    const galleryContent = document.querySelector('.gallery-content');
    galleryContent.style.transform = `translateX(${-100 * (currentSpecialty - 1)}%)`;
}

    
     function highlightNumber(number) {
        document.querySelector('.process-step:nth-child(' + number + ') .step-number').style.color = 'yellow';
    }

    function unhighlightNumber(number) {
        document.querySelector('.process-step:nth-child(' + number + ') .step-number').style.color = 'initial';
    }