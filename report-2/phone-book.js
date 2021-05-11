class PhoneBook {
  constructor(pbName) {
    this.phoneBookName = pbName
    this.phone = PhoneBook.initDB(pbName)  // initDB 데이터 초기화 파라미터 사용 
    this.phone = []                  
    
  }
  
  create(row) {
    this.phone.push(row)
    PhoneBook.saveDB(this.phoneBookName, this.phone)
  }

  read(keyObj) {
    const founds = this.phone.filter((row) => row.name === keyObj.name)
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
    const founds = this.phone.filter((row) => row.name === keyObj.name || 
    row.phone === keyObj.phone || row.email === keyObj.email)
    let updMember = founds && founds.length > 0 ? founds[0] : null
    if (!updMember) return
    const newDB = this.phone.filter((row) => row.name !== keyObj.name) 
    const newDB1 = this.phone.filter((row) => row.phone !== keyObj.phone)
    const newDB2 = this.phone.filter((row) => row.email !== keyObj.email)
    /*
    console.log(newDB)
    console.log(newDB1)
    console.log(newDB2)
    */
    // 3개의 DB를 만들고 app.js에서 name으로 phone을 바꾸는 update명령을 사용했을 경우
    // 기존 DB에서 그 데이터는 빼고 형성하기 때문에 
    // row.name !== keyObj.name인 newDB안에 있는 데이터의 길이가 제일 작아지므로 
    // DB의 length가 제일 작은것으로 DB을 업데이트 하는 방식을 사용함.
    const len = Math.min(newDB.length, newDB1.length, newDB2.length)
    updMember = { ...updMember, ...valueObj }
    console.log(updMember)
    if (newDB.length === len){ // filer함수에서 row가 name일 경우 
      console.log("*****************")    // Console에서 출력하게되고 어떤 DB를 사용하는지 
      this.phone = [...newDB, updMember]  // 확인용
    }else if (newDB1.length === len){ // filer함수에서 row가 name일 경우
      console.log("*****************")
      this.phone = [...newDB1, updMember]   // newDB1를 사용
    }else if (newDB2.length === len){  // filer함수에서 row가 name일 경우
      console.log("*****************")
      this.phone = [...newDB2, updMember]  // newDB2를 사용
    }
    PhoneBook.saveDB(this.phoneBookName, this.phone)
  }

  remove(keyObj) {
    // name을 사용해서 DB에서 데이터를 지울경우 
    const newDB = this.phone.filter((row) => row.name !== keyObj.name)
    this.phone = [...newDB]
    // email을 사용해서 DB에서 데이터를 지울경우
    const newDB1 = this.phone.filter((row) => row.email !== keyObj.email)
    this.phone = [...newDB1]
    // phone을 사용해서 DB에서 데이터를 지울경우
    const newDB2 = this.phone.filter((row) => row.phone !== keyObj.phone)
    this.phone = [...newDB2]
    PhoneBook.saveDB(this.phoneBookName, this.phone)
  }
  clear(){
    localStorage.clear()
  }
  list() {
    return this.phone
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
    return PHONEBOOK_DB
}
}
