class Generator {
  constructor(cost, costMult) {
    this.amount = 0

    this.cost = cost
    this.baseCost = cost
    this.costMult = costMult
  }

  buy() {
    if (game.points >= this.cost) {
      this.amount += 1
      game.points -= this.cost
      this.cost = this.baseCost * this.costMult ** this.amount
    }
  }

  buyMax() {
    // hooooo boy here we go
    function affordGeometricSeries(res, start, mult, have) { // idc if its bad for performace to define a function every time you buy max
      let realStart = start * Math.pow(mult, have)           // credit to break_infinity.js for function
      return Math.floor(Math.log10(res / realStart * (mult - 1) + 1) / Math.log10(mult))
    }

    let canBuy = affordGeometricSeries(game.points, this.baseCost, this.costMult, this.amount)
    let multThing = (Math.pow(this.costMult, 0 - (canBuy - 1)) * (Math.pow(this.costMult, canBuy - 1) - 1) / (this.costMult - 1)) + 1
    let cost = Math.floor(this.baseCost * Math.pow(this.costMult, this.amount + canBuy - 1) * multThing)

    if (canBuy >= 1) {
      game.points -= cost
      this.amount += canBuy
      this.cost = this.baseCost * this.costMult ** this.amount
      // penis
    }
  }
}
