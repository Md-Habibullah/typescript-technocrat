const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`hi ${friend}`))
}

greetFriends('habib', 'nissan', 'ridoy')