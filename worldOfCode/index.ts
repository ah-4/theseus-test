/**
 * README :
 * Complete the code below to simulate a fight between two players.
 * Complete the classes so that the code below works
 */


import Warrior from "./classes/Warrior"
import Mage  from "./classes/Mage"
import Player from "./classes/Player"

// Initialisation game
const player1 = new Warrior("John Doe")
const player2 = new Mage("Sarah Doe")
const players = [player1, player2]

/**
 * At the start, John begins with 120 life points and Sarah with 100. 
 * Sarah has a strength of 20 while John has a strength of 10. 
 * 
 */

// Round 1
/**
 * Each attack inflicts damage on its opponent equivalent to the strength plus a random value
 * This random value is a number between 0 and 10.
 */
player1.attack(player2)
player2.attack(player1)
// show all attributes
player1.status()
player2.status()

// Round 2
/**
 * Each player can heal and regain life points. 
 * The recovered value is a number between 5 and 15 life points
 * It is not possible to exceed the initial life bar value.
 */
player1.attack(player2)
player2.heal()
// show all attributes
player1.status()
player2.status()

// Round 3
/**
 * Each player can heal and regain life points. 
 * The recovered value is a number between 5 and 15 life points
 * It is not possible to exceed the initial life bar value.
 */
player1.attack(player2)
player2.attack(player1)
// show all attributes
player1.status()
player2.status()

// Round 4
/**
 * When the health attribute of one of the players reaches or falls below 0, they die.
 * The other player then gains 80 experience points.
 * If their total experience reaches more than 100, they level up, and their experience resets to zero plus the remaining sum.
 */
player1.attack(player2)
player2.attack(player1)
// show all attributes
player1.status()
player2.status()

// Round x (until one of the two players dies)

function performAttackOrHeal(attacker: Player, victim: Player) {
    if (Math.floor(Math.random() * 2) === 0) {
        attacker.attack(victim)
    } else {
        attacker.heal()
    }
}

let round = 5;
while (!player1.isDead && !player2.isDead) {
    console.log("Round " + round++);
    
    performAttackOrHeal(player1, player2);
    performAttackOrHeal(player2, player1);
    for(let p of players) {
        p.status()
    }
}