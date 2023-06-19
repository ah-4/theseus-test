import Player from "./Player";

export default class Mage extends Player {

    constructor(name: string) {
        super(name);
        this.life = 100;
        this.strength = 20;
    }

}