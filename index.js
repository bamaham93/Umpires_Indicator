class Ind{

    constructor(){
        this.balls = 0;
        this.strikes = 0;
        this.outs = 0;
        this.inning = 1;
        this.side = "Top";
    }
    addBall(){
        ++this.balls
        this.checks()
        this.refresh()
    }
    addStrike(){
        ++this.strikes
        this.checks()
        this.refresh()
    }
    addOut(){
        ++this.outs
        this.checks()
        this.refresh()
    }
    checkEndOfSide(){
        if (this.outs=3) {
            this.incrementSide()
        }
    }
    checkOut(){
        if (this.strikes >= 3){
            this.addOut()
            this.newAtBat()
            this.refresh()
            return true
        }
    }
    checkWalk(){
        if (this.balls >= 4){
            this.newAtBat()
            this.refresh()
        }
    }
    incrementSide(){
        if (this.side == "Top") {
            this.side = "Bottom";
            this.refresh()
        }
        else if (this.side == "Bottom"){
            this.side = "Top";
            ++this.inning
            this.refresh()
        }
    }
    newAtBat(){
        this.strikes = 0;
        this.balls = 0;
        this.refresh
    }
    checks(){
        this.checkOut()
        this.checkWalk()
        this.checkEndOfSide
    }
    refresh(){
        document.getElementById("balls-data").innerHTML = ind.balls;
        document.getElementById("strikes-data").innerHTML = ind.strikes
        document.getElementById("outs-data").innerHTML = ind.outs
        document.getElementById("inning-data").innerHTML = ind.inning
        document.getElementById("side-data").innerHTML = ind.side
    }
};

let ind = new Ind;
ind.refresh()