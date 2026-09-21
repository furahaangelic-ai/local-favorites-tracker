function greetFavorite(placeName, rating) {
    console.log(placeName + ' has ' + rating + ' stars!');
}

greetFavorite('Starbucks', 5);


const nameInput = document.getElementById('name');

console.log(nameInput.value);


const practiceForm = document.getElementById('add-favorite-form');

function handleSubmit(event) {
    event.preventDefault();

    console.log('You typed: ' + nameInput.value);
}

practiceForm.addEventListener('submit', handleSubmit);