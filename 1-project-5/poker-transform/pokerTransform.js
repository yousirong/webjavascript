const CardComparator = require('./card-comparator')
const FiveCards = require('./fivecards')
const selSort = require('./selSort')
const FiveCardsComparator = require('./fivecards-comparator')
const Card = require('../../1-project-4/sort-with-comparator/card')

let [A, K, Q, J] = [1, 13, 12, 11]
let cardList = [
  [
    [1, A],
    [2, 2],
    [3, 3],
    [4, 4],
    [1, 6],
  ],
  [
    [1, A],
    [2, 2],
    [3, 3],
    [4, 5],
    [1, 6],
  ],
  [
    [1, A],
    [2, 5],
    [3, 7],
    [4, Q],
    [1, K],
  ],
  [
    [1, A],
    [2, A],
    [3, 2],
    [4, 3],
    [1, 4],
  ],
  [
    [1, 6],
    [2, 8],
    [3, J],
    [4, K],
    [1, K],
  ],
  [
    [1, 7],
    [2, 8],
    [3, J],
    [4, K],
    [1, K],
  ],
  [
    [1, A],
    [2, A],
    [3, 2],
    [4, 2],
    [1, 3],
  ],
  [
    [1, Q],
    [2, Q],
    [3, J],
    [4, K],
    [1, K],
  ],
  [
    [1, 9],
    [1, Q],
    [2, Q],
    [4, K],
    [1, K],
  ],
  [
    [1, A],
    [2, A],
    [3, A],
    [4, 2],
    [1, 3],
  ],
  [
    [1, Q],
    [2, J],
    [3, K],
    [4, K],
    [1, K],
  ],
  [
    [1, 8],
    [2, Q],
    [3, K],
    [4, K],
    [1, K],
  ],
  [
    [1, A],
    [2, A],
    [3, A],
    [4, 2],
    [1, 2],
  ],
  [
    [1, Q],
    [2, Q],
    [3, K],
    [4, K],
    [1, K],
  ],
  [
    [1, J],
    [2, J],
    [3, K],
    [4, K],
    [1, K],
  ],
  [
    [1, A],
    [2, A],
    [3, A],
    [4, A],
    [1, 2],
  ],
  [
    [1, Q],
    [2, K],
    [3, K],
    [4, K],
    [1, K],
  ],
  [
    [1, A],
    [2, K],
    [3, K],
    [4, K],
    [1, K],
  ],
  [
    [1, A],
    [2, 2],
    [3, 3],
    [4, 4],
    [1, 5],
  ],
  [
    [1, A],
    [1, 2],
    [1, 3],
    [1, 5],
    [1, 6],
  ],
  [
    [1, A],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
  ],
  [
    [3, 10],
    [3, J],
    [3, Q],
    [3, K],
    [3, A],
  ],
]

cardList = cardList.map((list5) => list5.map((ca) => new Card(ca[0], ca[1])))
console.log(`cardList=${JSON.stringify(cardList)}`)

cardList = cardList.map((card5) => new FiveCards(card5))
function printFiveCardsList(fcList) {
  fcList.forEach((fc, i) => {
    console.log(`${i + 1} ${fc}`)
  })
}
printFiveCardsList(cardList)

function getPairs(fcList) {
  if (fcList.length < 2) return []
  else {
    if (fcList[0] === fcList[1]) return [fcList[0]].concat(getPairs(fcList.slice(2, fcList.length)))
    else return getPairs(fcList.slice(1, fcList.length))
  }
}

let rankList = cardList.map((fc) =>
  fc.fiveCards.map((ca) => (ca.rank === Card.ACE ? Card.KING + 1 : ca.rank))
)
console.log(`rankList=${JSON.stringify(rankList)}`)

let pairList = rankList.map(getPairs)
console.log(`pairList=${JSON.stringify(pairList)}`)

function getPairTransform(fcList) {
  let pairList = getPairs(fcList)
  if (pairList.length === 0) {
    return [1, ...fcList] // no pair
  } else if (pairList.length === 1) {
    return [2, ...pairList, ...fcList.filter((r) => !pairList.includes(r))]
  } else if (pairList.length === 2) {
    // two pair or 4 cards
    if (pairList[0] !== pairList[1]) {
      // two pair
      return [3, ...pairList, ...fcList.filter((r) => !pairList.includes(r))]
    } else {
      // 4 cards
      return [8, pairList[0], ...fcList.filter((r) => !pairList.includes(r))]
    }
  }
  return [1, ...fcList] // no pair
}
let pairTransformList = rankList.map(getPairTransform)
console.log(`pairTransformList=${JSON.stringify(pairTransformList)}`)

const isStraight = (list5) =>
  list5.reduce(
    (prev, curr, i) => (i === list5.length - 1 ? prev : prev && list5[i] === list5[i + 1] + 1),
    true
  )

function changeAceToOne(fcList) {
  let resList = [...fcList]
  let aceIndex = resList.indexOf(14) // has Ace
  if (aceIndex !== -1) {
    resList[aceIndex] = 1
    resList.sort((x, y) => y - x)
  }
  return resList
}
function getStraightScore(fcList) {
  // return 0 if not straight
  // return fcList[0] if straight
  // return newList[0] if has Ace and changed to 1 is straight
  let straight = isStraight(fcList)
  if (straight) return fcList[0]

  let aceIndex = fcList.indexOf(14) // has Ace
  if (aceIndex !== -1) {
    let newList = changeAceToOne(fcList)
    if (isStraight(newList)) return newList[0]
  }
  return 0
}
let straightScoreList = rankList.map(getStraightScore)
console.log(`straightScoreList=${JSON.stringify(straightScoreList)}`)

function getStraightTransform(fcList) {
  let topVal = getStraightScore(fcList)
  return topVal ? [5, topVal] : []
}
let straightTransformList = rankList.map(getStraightTransform)
console.log(`straightTransformList=${JSON.stringify(straightTransformList)}`)
