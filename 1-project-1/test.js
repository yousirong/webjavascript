const res = {"results":[{"gender":"male","name":{"title":"Mr","first":"Phillip","last":"Barnes"},"location":{"street":{"number":5763,"name":"Saddle Dr"},"city":"Shelby","state":"North Dakota","country":"United States","postcode":39842,"coordinates":{"latitude":"-88.6757","longitude":"-115.2035"},"timezone":{"offset":"-3:30","description":"Newfoundland"}},"email":"phillip.barnes@example.com","login":{"uuid":"c059bda5-8bc0-4088-83d0-2c97e15fb5c2","username":"ticklishbird256","password":"cigar","salt":"FTXbcGHs","md5":"cee1b87479344e2c763550d8cd77e450","sha1":"a47d44fcdb05fba31a30967edcc4eeb697d466ab","sha256":"000042a532da66118d10b067973eb071ece090e6120c8ea668b8a6add25ca4b1"},"dob":{"date":"1988-01-16T12:25:33.179Z","age":33},"registered":{"date":"2012-02-14T08:51:57.759Z","age":9},"phone":"(913)-973-7174","cell":"(952)-925-8669","id":{"name":"SSN","value":"055-20-5811"},"picture":{"large":"https://randomuser.me/api/portraits/men/48.jpg","medium":"https://randomuser.me/api/portraits/med/men/48.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/48.jpg"},"nat":"US"},{"gender":"male","name":{"title":"Mr","first":"Marvin","last":"Pearson"},"location":{"street":{"number":228,"name":"Daisy Dr"},"city":"College Station","state":"Nevada","country":"United States","postcode":11330,"coordinates":{"latitude":"51.4602","longitude":"-27.5460"},"timezone":{"offset":"-7:00","description":"Mountain Time (US & Canada)"}},"email":"marvin.pearson@example.com","login":{"uuid":"f84f49ca-af18-4841-8d23-63aa302280d9","username":"heavygorilla885","password":"maximus","salt":"YKwgB72z","md5":"16b3b2fc1712270c4ae100a3deeea116","sha1":"526cbcb5685dd348b8fccda1bcb89b8fd3b324a8","sha256":"69856cd76bdb9bde4a857486caa8a5687a0ccd8536884beb928959e88d0d8e34"},"dob":{"date":"1992-09-01T04:51:28.096Z","age":29},"registered":{"date":"2014-02-09T20:49:17.075Z","age":7},"phone":"(196)-467-8671","cell":"(128)-350-1610","id":{"name":"SSN","value":"485-02-8860"},"picture":{"large":"https://randomuser.me/api/portraits/men/12.jpg","medium":"https://randomuser.me/api/portraits/med/men/12.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/12.jpg"},"nat":"US"}],"info":{"seed":"33dfda305461981a","results":2,"page":1,"version":"1.3"}}
console.log(res)
const resStr = JSON.stringify(res)
console.log(resStr)

const res1 = JSON.parse(resStr)
console.log(res1)
console.log(res == res1)
