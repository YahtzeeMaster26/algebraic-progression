class Game {
  constructor() {
    // currencies
    this.points = 0

    // gens
    this.generators = [
      new Generator(15, 1.1) // autoclicker
    ]



    // time
    this.time = Date.now()
  }
}



let game 
let vueApp

function init() {
  // loading
  game = new Game()

  // vue stuff
  vueApp = new Vue({
    el: '#vueApp',
    data: {
      game: game,
      toNotation: x => x.toFixed(1)
    }
  })

  // game loop
  setInterval(() => {
    // time stuff
    const newTime = Date.now()
    const timeMult = (newTime - game.time) / 1000
    game.time = newTime

    // proeductshione
    game.points += game.generators[0].amount * 1 * timeMult
  }, 100)

  // pretend i did some other stuff too
}

init()
