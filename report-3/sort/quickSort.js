function quickSort(list) {
  let n = list.length
  //console.log(n)
  if (n < 100) return list
  
  //console.log(list)
  // let list1 = new Array(0);
  // let list2 = new Array(0);
  // let listEq = new Array(0);

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
