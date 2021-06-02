const Card = require('./card')

function getPairs(list5) {
  //list5 -- list of five ranks
  if (list5.length < 2) return []
  else {
    if (list5[0] === list5[1]) return [list5[0]].concat(getPairs(list5.slice(2, list5.length)))
    else return getPairs(list5.slice(1, list5.length))
  }
}
function getPairTransform(fcList) {
  //fclist -- list of fiveCards ranks
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

// function getPairTransform(fcList) {
//   //fclist -- list of fiveCards ranks
//   let pairList = getPairs(fcList)
//   if (pairList.length === 0) {
//     a = [1, ...fcList] // no pair
//     if (a.length == 6){
//       return a
//     }else{
//       return []
//     }
//   } else if (pairList.length === 1) {
//     a = [2, ...pairList, ...fcList.filter((r) => !pairList.includes(r))]
//     if(a.length == 5){
//       return a
//     }else{
//       return []
//     }
//   } else if (pairList.length === 2) {
//     // two pair or 4 cards
//     if (pairList[0] !== pairList[1]) {
//       // two pair
//       a = [3, ...pairList, ...fcList.filter((r) => !pairList.includes(r))]
//       if (a.length == 4){
//         return a
//       }else{
//         return []
//       }
//     } else if(pairList[0] === pairList[1]){
//       // 4 cards
//       a = [8, pairList[0], ...fcList.filter((r) => !pairList.includes(r))]
//       if(a.length == 3){
//         return a
//       }else{
//         return []
//       }
//     }
//   }
//   return [1, ...fcList] // no pair
// }

function changeAceToOne(fcList) {
  //fclist -- list of fiveCards ranks
  let resList = [...fcList]
  let aceIndex = resList.indexOf(14) // has Ace
  if (aceIndex !== -1) {
    resList[aceIndex] = 1
    resList.sort((x, y) => y - x)
  }
  return resList
}

const isStraight = (list5) =>   //get straight
  list5.reduce(
    (prev, curr, i) => (i === list5.length - 1 ? prev : prev && list5[i] === list5[i + 1] + 1),
    true
  )

function getStraightScore(fcList) {   //get straight
  //fclist -- list of fiveCards ranks

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

function getStraightTransform(fcList) {  // get straight
  //fclist -- list of fiveCards ranks
  let topVal = getStraightScore(fcList)
  return topVal ? [5, topVal] : []  // [0] -> []변경
}

function getTriple(list5) {   // get Triple
  if (list5.length < 3) 
  return []
  else {
    if (list5[0] == list5[1] && list5[1]== list5[2] && list5[0] == list5[2]) {
      return [list5[0]].concat(getTriple(list5.slice(3, list5.length)))
    }
    else {
      return getTriple(list5.slice(1, list5.length))
    }
  }
}
function getTripleTransform(fcList) {   // Triple
  //fclist -- list of fiveCards ranks
  let triList = getTriple(fcList)
  //console.log(triList)
  tmp = [...fcList.filter((r) => !triList.includes(r))]
  if(triList.length ==1 && (tmp[0] != tmp[1])){
    a = [4, ...triList, ...fcList.filter((r) => !triList.includes(r))]
  }else{
    return[]
  }
  if (a.length == 4){
    return a
  }else{
    return []
  }
}

function getfullhouseTransform(fcList){
  let tripleList = getTriple(fcList)
  tmp = [...fcList.filter((r) => !tripleList.includes(r))]
  // console.log(tmp)
  let pairList = getPairs(tmp)
  if (pairList.length != 0){
  if(pairList[0] != tripleList[0] && tripleList.length!=0){
    a = [7,...tripleList, ...pairList]
    }else{
      return []
    }
  }else{
    return[]
  }
  if (a.length == 3){
    return a
  }else{
    return []
  }
}

function isflush(list5, flushlist){  // Flush 판별
  if(list5.length<1){
    return[]
  }else{
    let j = 0
    for(let i =0; i<5; i++){
      if(flushlist[0] == flushlist[i]){
        j++
      }
    }
    if (j == 5){
      return[...list5]
    }else{
      return[]
    }
  }
  
  
}
function getFlushTransform(fiveCards, fclist) {   // Flush 얻는 함수
  let flushlist = fiveCards.fiveCards.map((ca) => (ca.suit))
  let i = isflush(fclist,flushlist)
  let p = getStraightScore(i)
  //console.log(i)
  if (i.length != 0 && p == 0){
    
    //console.log(p)
    return[6, ...i]
  }else{
    return[]
  }
  
}
function getstraightFlushTransform(fiveCards, fclist) {   // 스트레이트 Flush 얻는 함수
  let flushlist = fiveCards.fiveCards.map((ca) => (ca.suit))
  let i = isflush(fclist,flushlist)
  let p = getStraightScore(i)
  //console.log(i)
  if (i.length != 0 && p != 0){
    console.log(p)
    return[9, p]   // 41 ['CL-A ', 'CL-5 ', 'CL-4 ', 'CL-3 ', 'CL-2 '] -- [9,14]
                      //42 ['HE-A ', 'HE-K ', 'HE-Q ', 'HE-J ', 'HE-10'] -- [9,14] 현재 이상태 인데 내림차순구현 ㄱ
  }else{
    return[]
  }
  
}

function pokerTransform(fiveCards) {
  //fiveCards -- A FiveCards Instance
  let fclist = fiveCards.fiveCards.map((ca) => (ca.rank === Card.ACE ? Card.KING + 1 : ca.rank))
  let fllist = fiveCards.fiveCards.map((ca) => (ca.suit,ca.rank))
  //fclist -- list of fiveCards ranks
  let pokerRankList = getPairTransform(fclist)  // 숫자pair
  let tripleList = getTripleTransform(fclist)   // 숫자triple 
  let straightList = getStraightTransform(fclist) // 스트레이트  
  let fullhouseList = getfullhouseTransform(fclist) // 풀하우스  
  let flushlist = getFlushTransform(fiveCards,fclist) // 플러쉬 
  let straightflushlist = getstraightFlushTransform(fiveCards,fclist)  // 스트레이트 플러쉬 
  pokerRankList = tripleList[0] > pokerRankList[0] ? tripleList : pokerRankList 
  pokerRankList = straightList[0] > pokerRankList[0] ? straightList : pokerRankList
  pokerRankList = fullhouseList[0] > pokerRankList[0] ? fullhouseList : pokerRankList
  pokerRankList = flushlist[0] > pokerRankList[0] ? flushlist : pokerRankList
  pokerRankList = straightflushlist[0] > pokerRankList[0] ? straightflushlist : pokerRankList
  
  return pokerRankList
}

module.exports = pokerTransform
