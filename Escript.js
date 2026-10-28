const player = {
    name: "wiko",
    score: 100,
    showScore() {
        return `${this.name} has ${this.score} points`;
    }
}
const showPlayerScore = player.showScore.bind(player);
console.log(showPlayerScore());