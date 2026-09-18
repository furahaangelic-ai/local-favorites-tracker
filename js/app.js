let today = new Date().toLocaleDateString();

let myFavorite = {
    name: 'Starbucks on University Drive',
    category: 'coffee',
    rating: 5,
    notes: 'Great study spot with fast wifi',
    dateAdded: today
};

let displayText = myFavorite.name + ' - Rating: ' + myFavorite.rating + '/5';

console.log(myFavorite);
console.log(displayText);

console.log(typeof myFavorite.name);
console.log(typeof myFavorite.category);
console.log(typeof myFavorite.rating);
console.log(typeof myFavorite.notes);
console.log(typeof myFavorite.dateAdded);