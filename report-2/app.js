// Project 2 -- Use Local Storage(localStore)
// report-1에서 update 부분을 좀더 업그레이드 했습니다.

let contactList = RANDOM_USERS.results.map((user) => {
  const name = `${user.name.first} ${user.name.last}`
  const email = user.email
  const phone = user.phone
  return { name, email, phone }
})
function listConsole(row) {
  contactList.forEach((row) => {
    console.log(JSON.stringify(row))
  })
}
function listHTML(phoneBook) {
  const tbody = document.querySelector('#contact-table-body')
  const tbodyText = phoneBook
    .list()
    .map((tr) => {
      return `<tr><td>${tr.name}</td><td>${tr.email}</td><td>${tr.phone}</td></tr>`
    })
    .join('\n')
  console.log(tbodyText)
  tbody.innerHTML = tbodyText
}

// Main Routine
let PHONE_BOOK = new PhoneBook('phoneBookDB')  // CONTACT_DB -> PHONEBOOK_DB
console.log(PHONE_BOOK)   // 처음 DB 데이터 확인용
listConsole(PHONE_BOOK)
console.log('After Initial Create')
contactList.forEach((row) => {
  PHONE_BOOK.create(row)
})
listConsole(PHONE_BOOK)
PHONE_BOOK.create({ name: 'cskim', email: 'cskim@hufs.ac.kr', phone: '031-330-4365' })
PHONE_BOOK.create({ name: 'cskim', email: 'cskim@hufs-gsuite.kr', phone: '010-111-1234' })
// 3. 데이터 추가 -- 더미데이터 3명 {name, email, phone}, 모든 학생이 다름.
PHONE_BOOK.create({ name: "D.va", email: "D.vaonline@overwatch.kr", phone: "010-5898-7891" })
PHONE_BOOK.create({ name: "McCree", email: "JesseMeCree@overwatch.kr", phone: "010-4446-7778" })
PHONE_BOOK.create({ name: "Ana", email: "AnaAmari@overwatch.kr", phone: "010-111-1234" })
// 4. 데이터 추가 -- 마지막, 학생 본인 name(id, 이름), email(실제), phone(가상)
PHONE_BOOK.create({ name: "yousirong", email: "diziyong1523@gmail.co.kr", phone: "010-5389-7846" })

console.log('After add 2 cskim ')
listConsole(PHONE_BOOK)

PHONE_BOOK.read({ name: 'cskim' })
listConsole(PHONE_BOOK)

/* cskim의 이름을 가진 데이터에서 phone의 value값을 010-555-5555으로 바꿉니다. */
PHONE_BOOK.update({ name: 'cskim' }, { phone: '010-555-5555' })
console.log('After Update cskim')
listConsole(PHONE_BOOK)

/* yousirong의 이름을 가진 데이터에서 phone의 value값을 010-7777-7777으로 바꿉니다.*/
PHONE_BOOK.update({ name: 'yousirong' }, { phone: '010-7777-7777' })
console.log('After Update yousirong')
listConsole(PHONE_BOOK)

// PHONE_BOOK.localStorage.clear()    /* localStorage의 내용들을 모두 비우는 함수 */
/* Phone데이터에서 010-7777-7777을 가진 데이터를 찾아 name을 yousi로 바꿉니다. */
PHONE_BOOK.update({ phone: '010-7777-7777' }, { name: 'yousi' })
console.log('After Update yousi')
listConsole(PHONE_BOOK)

/* email데이터에서 diziyong1523@gmail.co.kr을 가진 데이터를 찾아 name을 yousicom로 바꿉니다.*/
PHONE_BOOK.update({ email: "diziyong1523@gmail.co.kr" }, { name: 'yousicom' })
console.log('After Update yousid')
listConsole(PHONE_BOOK)

/* name데이터에서 cskim을 찾아서 데이터를 DB에서 지웁니다. */
//remove({ name: 'cskim' })
//console.log('After Remove cskim')
//listConsole()

/* phone데이터에서 010-7777-7777을 찾아 데이터를 DB에서 지웁니다.*/
// remove({ phone: '010-7777-7777' })
// console.log('After Remove yousirong')
// listConsole()

/* email데이터에서 diziyong1523@gmail.co.kr을 찾아 데이터를 DB에서 지웁니다.*/
/* remove({  email: "diziyong1523@gmail.co.kr" }) */
// console.log('After Remove yousirong email')
// listConsole()

listHTML(PHONE_BOOK)

