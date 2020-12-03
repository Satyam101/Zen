
class FlipTile {
    constructor(totaltime, cards) //120 28
    {
        this.cardsArray = cards;
        this.totaltime = totaltime;
        this.timeRemaining = totaltime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById("flips");


    }

    startGame() {

        this.totalClicks = 0;
        this.timeRemaining = this.totaltime;
        this.cardToCheck = null;
        this.matchedCards = [];
        this.busy = true;
        this.shuffleCards();

        setTimeout(() => {
            this.shuffleCards();
            this.countdown = this.startCountDown();
            this.busy = false;
        }, 500);
        this.hidecards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;

    }



    hidecards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    }




    flipCard(card) {
        if (this.canFlipCard(card)) {
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');

            //if statement
            if (this.cardToCheck)
                this.checkforcardMatch(card);

            else
                this.cardToCheck = card;

        }
    }
    checkforcardMatch(card) {

        if (this.getcardtype(card) === this.getcardtype(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else
            this.cardNotMatch(card, this.cardToCheck);

        this.cardToCheck = null;
    }

    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        if (this.matchedCards.length === this.cardsArray.length)
            this.Winner();

    }

    cardNotMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);

    }

    getcardtype(card) {

        return card.getElementsByClassName('card-value')[0].src;
    }

    startCountDown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if (this.timeRemaining === 0)
                this.gameOver();

        }, 1000);

    }

    gameOver() {
        clearInterval(this.countdown)
        document.getElementById('game-over-text').classList.add('visible');

    }

    Winner() {

        clearInterval(this.countdown);
        document.getElementById('victory-text').classList.add('visible');
    }



    shuffleCards() {
        for (let i = this.cardsArray.length - 1; i > 0; i--) {
            let RIndex = Math.floor(Math.random() * (i + 1));
            this.cardsArray[RIndex].style.order = i;
            this.cardsArray[i].style.order = RIndex;
        }

    }


    canFlipCard(card) {//return true;
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;

    }
}


if (document.readyState === "loading") {

    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();

}




function ready() {
    let overlays = Array.from(document.getElementsByClassName("overlay-text"));
    let cards = Array.from(document.getElementsByClassName("card"));
    let game = new FlipTile(120, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener("click", () => {
            overlay.classList.remove('visible');
            game.startGame();


        });
    });
    cards.forEach(card => {

        card.addEventListener("click", () => {
            game.flipCard(card);

        });
    });
}



