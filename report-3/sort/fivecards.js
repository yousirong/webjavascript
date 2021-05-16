const Comparable = require('./comparable')
const Card = require('./card')
const selSort = require('./selSort')

class FiveCards extends Comparable {
  constructor(cards) {
    super()
    this.fiveCards = []
    cards.forEach((card) => {
      this.fiveCards.push(card)
    })
    this.reorder()
  }
// -------------------------------이부분 고쳐야돔.....................
  compareTo(right) {
    for(let i = 0; i<this.fiveCards.length; i++){
      if(this.fiveCards[i].compareTo(right.fiveCards[i]) !== 0){
        return this.fiveCards[i].compareTo(right.fiveCards[i])
      }
    }
  }
  // compareTo(right){
  //   return this.fiveCards[0].compareTo(right.fiveCards[0])
  // }
  toString() {
    let allCardString = this.fiveCards.join(', ')
    return `[${allCardString}]`
  }
  reorder() {
    this.fiveCards = selSort(this.fiveCards)
  }
}

module.exports = FiveCards
