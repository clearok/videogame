class Player {
    // class properties (attributes)
    constructor(name, health, energy, armor) {
      this.name = name;
      this.health = health;
      this.energy = energy;
      this.armor = armor;

      this.setup();
    }

    setup () {
      //setup the private variables
      this._hp = this.health;
      this._en = this.energy / 2;
      this._maxEn = this.energy;
      this._maxHp = this.health;
    }
    
    // getter
    get numHp () {
         
    }

    // setter 
    set numHp () {
        
    }

    // getter (Terrils part)
    get numEn () {
      return this._en;
    }

    // setter (Terrils part)
    set numEn ( number ) {
      this._en = ( number > this._maxEn ) ? this._maxEn : number;
    }
  }
  
  
//   A private health variable hp. Make sure it's private!
//   A private maxHealth variable maxHp. Again, make sure it's private.
//   A private energy variable en. Again, make sure it's private.
//   A private maxEnergy variable maxEn. You know the drill by now.
  
  
//   Your Player instances will be constructed as new Player(name,health,energy,armor)
  
  
//   A private health variable hp. Make sure it's private!
//   A private maxHealth variable maxHp. Again, make sure it's private.
//   A private energy variable en. Again, make sure it's private.
//   A private maxEnergy variable maxEn. You know the drill by now.