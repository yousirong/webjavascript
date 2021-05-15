const Comparable = require('./comparable')

class Card extends Comparable {
  static ACE = 1  // A =1 
  static JACK = 11 // J = 11
  static QUEEN = 12 // Q = 12 
  static KING = 13 // K =13

  static CLUB = 1  // CL = 1   CL-A 제일 큼
  static DIAMOND = 2 // DI = 2
  static HEART = 3 // HE = 3
  static SPADE = 4 // SP = 4

  constructor(s, r) {
    super()
    this.suit = s
    this.rank = r
  }

  toString() {
    let image
    switch (this.suit) {
      case Card.CLUB:
        image = 'CL-'  //1 
        break
      case Card.DIAMOND:
        image = 'DI-'  // 2
        break
      case Card.HEART:
        image = 'HE-'  // 3
        break
      case Card.SPADE:
        image = 'SP-'  // 4
        break
    }
    switch (this.rank) {
      case Card.ACE:
        image += 'A '  //1 
        break
      case Card.JACK:
        image += 'J '  //11
        break
      case Card.QUEEN: 
        image += 'Q '  //12
        break
      case Card.KING:
        image += 'K '  // 13
        break
      case 10:
        image += '10'   //10
        break
      default:
        image = image + this.rank + ' '
    }
    return image
  }

  compareTo(right) {
    const lrank = this.rank === Card.ACE ? Card.KING + 1 : this.rank
    const rrank = right.rank === Card.ACE ? Card.KING + 1 : right.rank

    return lrank - rrank
  }
  static compare(left, right) {
    const lrank = left.rank === Card.ACE ? Card.KING + 1 : left.rank
    const rrank = right.rank === Card.ACE ? Card.KING + 1 : right.rank

    return lrank - rrank
  }
}

module.exports = Card
