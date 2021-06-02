import CardComparator from './card-comparator.js'
import selSort from './selSort.js'
import pokerTransform from './pokerTransform.js'

class FiveCards {
  constructor(cards) {
    this.fiveCards = []
    cards.forEach((card) => {
      this.fiveCards.push(card)
    })
    this.reorder()
    this.rankInfo = pokerTransform(this)
  }

  compareTo(right) {  
    if(this.fiveCards[i].compareTo(right.fiveCards[i]) !== 0){
      return this.fiveCards[i].compareTo(right.fiveCards[i])
    }
  }

  toString() {
    let allCardString = this.fiveCards.join(', ')
    return `[${allCardString}]`
  }
  reorder() {
    this.fiveCards = selSort(this.fiveCards, new CardComparator().compare)
  }
}

export default FiveCards
