let contactList = RANDOM_USERS.results.map((user) => {
  const name = `${user.name.first} ${user.name.last}`
  const email = user.email
  const phone = user.phone
  return { name, email, phone }
})

console.log(JSON.stringify(contactList))

let CONTACT_DB = []

function create(row) {
  CONTACT_DB.push(row)
}

function read(keyObj) {
  const founds = CONTACT_DB.filter((row) => row.name === keyObj.name)
  const searchDiv = document.querySelector("#search")
  searchDiv.innerHTML = `<h5>name: ${keyObj.name} </h5>`
  const foundDiv = document.querySelector("#found")
  founds.forEach((user) => {
    console.log(user.name)
    foundDiv.innerHTML += `<h5>${user.name} ${user.email} ${user.phone} </h5>`
  })
  return founds
}

function update(keyObj, valueObj) {
  if (CONTACT_DB.filter((row) => row.name === keyObj.name)){
    const founds = row.name
  }else if (CONTACT_DB.filter((row) => row.email === keyObj.email)){
    const founds = row.email
  }else if (CONTACT_DB.filter((row) => row.phone === keyObj.phone)){
    const founds = row.phone
  }
  
  let updMember = founds && founds.length > 0 ? founds[0] : null
  if (!updMember) return
  const newDB = CONTACT_DB.filter((row) => row.name !== keyObj.name)
  updMember = { ...updMember, ...valueObj }
  CONTACT_DB = [...newDB, updMember]
}

function remove(keyObj) {
  if (CONTACT_DB.filter((row) => row.name === keyObj.name)){
    const newDB = row.name
  }else if (CONTACT_DB.filter((row) => row.email === keyObj.email)){
    const newDB = row.email
  }else if (CONTACT_DB.filter((row) => row.phone === keyObj.phone)){
    const newDB = row.phone
  }
  CONTACT_DB = [...newDB]
}

function list() {
  const tbody = document.querySelector("#contact-table-body")
  const tbodyText = CONTACT_DB.map((tr) => {
    return `<tr><td>${tr.name}</td><td>${tr.email}</td><td>${tr.phone}</td></tr>`
  }).join("\n")
  console.log(tbodyText)
  tbody.innerHTML = tbodyText
}
function listConsole() {
  CONTACT_DB.forEach((row) => {
    console.log(JSON.stringify(row))
  })
}
// Main Routine

// build CONTACT_DB
contactList.forEach((row) => {
  create(row)
})
// 3. 데이터 추가 -- 더미데이터 3명 {name, email, phone}, 모든 학생이 다름.
create({ name: "cskim", email: "cskim@hufs.ac.kr", phone: "031-330-4365" })
create({ name: "cskim", email: "cskim@hufs-gsuite.kr", phone: "010-111-1234" })
create({ name: "D.va", email: "D.vaonline@overwatch.kr", phone: "010-5898-7891" })
create({ name: "McCree", email: "JesseMeCree@overwatch.kr", phone: "010-4446-7778" })
create({ name: "Ana", email: "AnaAmari@overwatch.kr", phone: "010-111-1234" })
// 4. 데이터 추가 -- 마지막, 학생 본인 name(id, 이름), email(실제), phone(가상)
create({ name: "yousirong", email: "diziyong1523@gmail.co.kr", phone: "010-5389-7846" })
listConsole()

read({ name: "cskim" })

update({ name: "cskim" }, { phone: "010-111-1234" })

listConsole()

remove({ name: "cskim" })

listConsole()

list()
