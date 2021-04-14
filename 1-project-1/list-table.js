let contactList = RANDOM_USERS.results.map((user) => {   //list에대해서 map을 시킴 한사람 정보로 부터 필요한 정보를 빼내겠다.
  const name = `${user.name.first} ${user.name.last}`    // first last name을 이름으로 정의 하겠다. 등등
  const email = user.email
  const phone = user.phone
  return { name, email, phone }
})
console.log(JSON.stringify(contactList))

const tbody = document.querySelector('#contact-table-body')
const tbodyText = contactList
  .map((tr) => {
    return `<tr><td>${tr.name}</td><td>${tr.email}</td><td>${tr.phone}</td></tr>`
  })
  .join('\n')
console.log(tbodyText)
tbody.innerHTML = tbodyText
