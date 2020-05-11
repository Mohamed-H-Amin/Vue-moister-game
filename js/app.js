new Vue({
    el: app,
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns:[],
    },
    methods:{
        StartGame: function(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gameIsRunning = true;
            this.turns = [];
        },
        attack: function(){
            var damage = this.calculateDamage(3,10);
            this.monsterHealth -= damage;
            this.playerHealth -= damage;
            this.turns.unshift({
                text: 'Attack Action'
            });
            this.checkWing();
        },
        specialAttack: function(){
            this.monsterHealth -= this.calculateDamage(5,15);
            this.playerHealth -= this.calculateDamage(3,10);
            this.turns.unshift({
                text: 'specialAttack Action'
            });
            this.checkWing();
        },
        heal: function(){
            if(this.playerHealth <= 90){
                this.playerHealth += 10;
            } else this.playerHealth = 100;
            this.turns.unshift({
                text: 'Heal by 10 Action'
            });
        },
        GiveUp: function(){
            this.gameIsRunning = false;
        },
        // helping functions
        calculateDamage: function(min , max){
            var damage = Math.max( Math.floor(Math.random()*max) + 1 , min);
            return damage;
        },
        checkWing: function(){
            if( this.monsterHealth <= 0){
                if(confirm("You Are Won !!! , New Game?")){
                    this.StartGame();
                } else {this.gameIsRunning = true;}
            } else if( this.playerHealth <= 0){
                if(confirm("Monster Is Won !!! , New Game?")){
                    this.StartGame();
                } else {this.gameIsRunning = true; }
            }
        },
    },
    watch: {

    }
});