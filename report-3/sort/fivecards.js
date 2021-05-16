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
// ------------------------------추가한 부분-----------------------------
// 3. [0]번 카드만 비교 --> [0]번이 같으면 [1] 비교, [1]도 같으면 [2] 비교...
  compareTo(right) {  
      if(this.fiveCards[i].compareTo(right.fiveCards[i]) !== 0){
        return this.fiveCards[i].compareTo(right.fiveCards[i])
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
