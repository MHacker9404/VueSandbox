new Vue( {
    el: '#app',
    data: {
        myHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.myHealth = this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            let myDamage = this.calculateDamage( 3, 10 );
            this.turns.unshift( {
                isPlayer: true,
                text: `Player hits monster for ${ myDamage } damage`
            } );
            this.monsterHealth -= myDamage;
            if ( this.checkWin() ) {
                return;
            }

            this.monsterAttacks();
        },
        specialAttack: function () {
            let myDamage = this.calculateDamage( 10, 20 );
            this.turns.unshift( {
                isPlayer: true,
                text: `Player special hits monster for ${ myDamage } damage`
            } );
            this.monsterHealth -= myDamage;
            if ( this.checkWin() ) {
                return;
            }

            this.monsterAttacks();
        },
        heal: function () {
            if ( this.myHealth <= 90 ) {
                this.myHealth += 10;
            }
            else {
                this.myHealth = 100;
            }
            this.turns.unshift( {
                isPlayer: true,
                text: `Player heals for 10`
            } );

            this.monsterAttacks();
        },
        giveUp: function () {
            this.gameIsRunning = false;
        },
        calculateDamage: function ( min, max ) {
            const damage = Math.max( Math.floor( ( Math.random() * max ) + 1 ), min );
            return damage;
        },
        checkWin: function () {
            if ( this.monsterHealth <= 0 ) {
                if ( confirm( 'You won! New game?' ) ) {
                    this.startGame();
                }
                else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            else if ( this.myHealth <= 0 ) {
                if ( confirm( 'You lost! New game?' ) ) {
                    this.startGame();
                }
                else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
        monsterAttacks: function () {
            let monsterDamage = this.calculateDamage( 5, 12 );
            this.turns.unshift( {
                isPlayer: false,
                text: `Monster hits player for ${ monsterDamage } damage`
            } );
            this.myHealth -= monsterDamage;
            this.checkWin();
        }
    }
} );