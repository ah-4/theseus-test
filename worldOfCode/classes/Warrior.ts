import Player from "./Player";

export default class Warrior extends Player {

    constructor(name: string) {
        super(name);
        this.life = 100;
        this.strength = 10;
    }
  
}