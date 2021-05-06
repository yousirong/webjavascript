class PhoneBook {
  constructor(pbName) {
    this.phoneBookName = pbName
    
    this.phone = PhoneBook.initDB(pbName)
    this.phoneBookDB = []
    
  }
  
  create(row) {
    this.phoneBookDB.push(row)
    PhoneBook.saveDB(this.phoneBookName, this.phoneBookDB)
  }

  read(keyObj) {
    //const founds = this.phoneBookDB.filter((row) => row.name === keyObj.name)
    const founds = this.phoneBookDB.filter((row) => row.name === keyObj.name)
    const searchDiv = document.querySelector('#search')
    searchDiv.innerHTML = `<h5>name: ${keyObj.name} </h5>`
    const foundDiv = document.querySelector('#found')
    founds.forEach((user) => {
    console.log(user.name)
    foundDiv.innerHTML += `<h5>${user.name} ${user.email} ${user.phone} </h5>`
    })
    return founds
  }

  update(keyObj, valueObj) {
    const founds = this.phoneBookDB.filter((row) => row.name === keyObj.name || 
  row.phone === keyObj.phone || row.email === keyObj.email)
    let updMember = founds && founds.length > 0 ? founds[0] : null
    if (!updMember) return
    const newDB = this.phoneBookDB.filter((row) => row.name !== keyObj.name)
    updMember = { ...updMember, ...valueObj }
    console.log(updMember)
    this.phoneBookDB = [...newDB, updMember]
    PhoneBook.saveDB(this.phoneBookName, this.phoneBookDB)
  }

  remove(keyObj) {
    const newDB = this.phoneBookDB.filter((row) => row.name !== keyObj.name)
    this.phoneBookDB = [...newDB]
    const newDB1 = this.phoneBookDB.filter((row) => row.email !== keyObj.email)
    this.phoneBookDB = [...newDB1]
    const newDB2 = this.phoneBookDB.filter((row) => row.phone !== keyObj.phone)
    this.phoneBookDB = [...newDB2]
    PhoneBook.saveDB(this.phoneBookName, this.phoneBookDB)
  }
  clear(){
    localStorage.clear()
  }
  list() {
    return this.phoneBookDB
  }

  // Utility Functions, Defined as static
  static saveDB(phoneBookName, phoneBookDB) {
    localStorage.setItem(phoneBookName, JSON.stringify(phoneBookDB))
  }

  static restoreDB(phoneBookName) {
    let db = localStorage.getItem(phoneBookName)
    return db ? JSON.parse(db) : null
  }
  
  static initDB(phoneBookName) {
    let PHONEBOOK_DB = PhoneBook.restoreDB(phoneBookName)
    console.log(`${phoneBookName}=`, JSON.stringify(PHONEBOOK_DB))
    if (PHONEBOOK_DB === null) {
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
      contactList.forEach((row) => {
        PHONEBOOK_DB.create(row)
      })
      listConsole(PHONEBOOK_DB)
    }
    // return PHONEBOOK_DB
    return PHONEBOOK_DB
}
}
