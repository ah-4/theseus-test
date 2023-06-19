// Constants
const MAX_RANDOM_ATTACK: number = 10;
const HEAL_BOUNDS = { min: 5, max: 15 };
const GAINED_EXPERIENCE_ON_KILL: number = 80;
const REQUIRED_EXPERIENCE_TO_LEVEL_UP: number = 100;

export default class Player {
    // Default attributes
    private _life: number = 0;
    private _strength: number = 0;
    private _experience: number = 0;
    private _weapons: string[] = [];
    private _level: number = 0;
    private _name: string = "Player";

    // Initial life (initialized when life is set for first time)
    private _initialLife: number = -1;

    /**
     * Constructor
     * @param name the player name
     */
    constructor(name: string) {
        this._name = name;
    }

    /**
     * Setters
     */
    protected set life(life: number) {
        // Sets initial life if not already set
        if (this._initialLife === -1) this._initialLife = life;

        this._life = life;
        if(this._life < 0) this._life = 0;
    }

    protected set strength(strength: number) {
        this._strength = strength;
    }

    /**
     * Getters
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Attacks a player (strength + random value between 0 and 10)
     * @param player the player to attack
     */
    public attack(player: Player) {
        // If player is dead, show message and return
        if (this.isDead) {
            this._showDeadMessage();
            return;
        }

        // Handling impossible attacks
        if (player.isDead) {
            console.log(`You can't attack ${player.name} because they're dead!`);
            return;
        }

        const rdmAttackForce = Math.floor(Math.random() * (MAX_RANDOM_ATTACK + 1));
        player._life -= this._strength + rdmAttackForce;

        // If player is dead, give experience to the other player
        if (player._life <= 0) {
            this._experience += GAINED_EXPERIENCE_ON_KILL;
            console.log(`${player.name} is dead! They was killed by ${this._name}!`);
            if (this._experience >= REQUIRED_EXPERIENCE_TO_LEVEL_UP) {
                this._level += 1;
                this._experience -= REQUIRED_EXPERIENCE_TO_LEVEL_UP;
            }
        }
    }

    /**
     * Display every player attributes
     */
    public status() {
        console.log(`${this._name} has:\n${this._life} life points.\n${this._strength} strength.\n${this._experience} experience.\n${this._weapons} weapons.\n${this._level} level.\n`);
    }

    /**
     * Heals the player (random value between 5 and 15)
     */
    public heal() {
        // If player is dead, show message and return
        if (this.isDead) {
            this._showDeadMessage();
            return;
        }

        const rdmHeal = Math.floor(Math.random() * (HEAL_BOUNDS.max - HEAL_BOUNDS.min + 1)) + HEAL_BOUNDS.min;
        this._life += rdmHeal;
        if (this._life > this._initialLife) this._life = this._initialLife;
    }

    public get isDead(): boolean {
        return this._life <= 0;
    }

    /**
     * Shows a message if player is dead
     */
    private _showDeadMessage() {
        console.log(`${this._name} is dead and can't perform action no more.`);
    }
    
}
