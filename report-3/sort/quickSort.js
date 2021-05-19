function quickSort(list) {
  let n = list.length
  //console.log(n)
  if (n < 100) return list
  // list.length가 2보다 작을 경우 return list 하면 stack overflow 발생 
  // n < 100 으로 변경함

  let list1 = []
  let list2 = []
  let listEq = []
  let pivot = list[0]
  for (let i = 0; i < list.length; i++) {
    if (list[i].compareTo(pivot) <0 ) {
      list1.push(list[i])
    } else if (list[i].compareTo(pivot) === 0) {
      listEq.push(list[i])
    } else if (list[i].compareTo(pivot) === 1){
      list2.push(list[i])
    } else{
      console.log("error")
    }
    
  }
  let res = [].concat(quickSort(list1)).concat(listEq).concat(quickSort(list2))
  return res
}

module.exports = quickSort
