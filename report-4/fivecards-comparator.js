const Comparator = require('./comparator')

function listComp(xl, yl, comp) {
  if (xl.length === 0 && yl.length === 0) return 0
  else if (xl.length === 0) return -1
  else if (yl.length === 0) return 1
  else {
    let [xh, ...xtail] = xl
    let [yh, ...ytail] = yl
    if (xh === yh) return listComp(xtail, ytail, comp)
    else return comp(xh, yh)
  }
}
class FiveCardsComparator extends Comparator {
  constructor() {
    super()
  }
  compare(fc1, fc2) {
    return listComp(fc1.rankInfo, fc2.rankInfo, (y, x) => x - y)  // (x, y) 을 (y, x)으로 변경해서 내림차순 출력
  }
}

module.exports = FiveCardsComparator
