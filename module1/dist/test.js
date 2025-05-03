"use strict";
const greetFriends = (...friends) => {
    friends.forEach((friend) => console.log(`hi ${friend}`));
};
greetFriends('habib', 'nissan', 'ridoy');
