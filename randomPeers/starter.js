
let users = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 6 }, // Added a second time to test the case of an odd number of players
]

/**
 * Returns a random pair of users (2 or 3 users if the number of users is odd)
 * @param {Array} users the list of users
 */
function randomPeer(users) {
    // Pair list
    let pairs = [];
    // Copy of the list of users
    let usersCopy = [...users];

    // While there are at least 2 users
    while (usersCopy.length >= 2) {

        // Random selection of 2 indices then sorting ascending
        let randoms = [Math.floor(Math.random() * usersCopy.length), Math.floor(Math.random() * usersCopy.length)];
        if (randoms[0] == randoms[1]) continue;
        randoms.sort((a, b) => a - b);

        // Creation of the pair
        let user1 = usersCopy[randoms[0]];
        let user2 = usersCopy[randoms[1]];

        // Remove the users from the list in order to avoid key conflicts
        usersCopy.splice(randoms[1], 1);
        usersCopy.splice(randoms[0], 1);

        // Add the pair to the list
        pairs.push([user1, user2]);
    }

    // If there is only one user left, add it to a random pair
    if (usersCopy.length == 1) {
        // If there is no pair, create one
        if (pairs.length == 0) pairs.push([]);

        pairs[Math.floor(Math.random() * pairs.length)].push(usersCopy[0]);
    }

    // Return the list of pairs
    return pairs;
}

console.log(randomPeer(users))

/******* Users random peer ******/
// Creation of random pairs of users
// If the number of players is odd, there will be one group of 3 players.
/**
 * Exemple result expected :
 */
/* 
[
    [ { id: 5 }, { id: 1 } ],
    [ { id: 3 }, { id: 7 } ],
    [ { id: 6 }, { id: 8 } ],
    [ { id: 4 }, { id: 2 } ]
]
*/