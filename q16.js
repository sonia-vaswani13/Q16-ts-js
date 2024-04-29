//Q16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
var frndsArr = ["Adv Haya", "Adv Bushra", "Adv Sidra", "Adv zareena"];
var canNOTAttend = "Adv Bushra";
//• Add one new guest to the beginning of your array.
var newGuest = "Adv Sonia";
frndsArr[frndsArr.indexOf(canNOTAttend)] = newGuest;
console.log(frndsArr);
frndsArr.map(function (item) { return console.log("Dear ".concat(item, ", I found a Bigger Dinner table")); });
//• Add one new guest to the middle of your array. 
var guestBegin = "Adv Shanti devi";
frndsArr.unshift(guestBegin);
console.log(frndsArr);
var middleGuest = "Adv sineha";
var middleIndex = frndsArr.length / 2;
frndsArr.splice(middleIndex, 0, middleGuest);
console.log(frndsArr);
//• Use append() to add one new guest to the end of your list.
frndsArr.push("Dr gungun vaswani");
console.log(frndsArr);
//• Print a new set of invitation messages, one for each person in your list.
frndsArr.map(function (item) { return (console.log("Dear ".concat(item, ", You are Cordinally Invited to a Dinner"))); });
