function hi() {
    console.log("Hi")
}
let y = 3
console.log("Before")
setTimeout(hi, 2000)
//setTimeout(console.log("I'm here"), 500)  //at run time gives error becuase the first parameter must be a function
setTimeout(() => { console.log("I'm here and I work") }, 500)  // the firtst parameter is a function so it is legit -> So arrow function are legit
setTimeout((x) => { console.log(`I'm here, Mr. ${x}`) }, 500)  // return 'I'm here, Mr. undefined' because the value is not specified
setTimeout((x) => { console.log(`I'm here, Mr. ${x}`) }, 500, 'Boss') // the third parameter are the args
setTimeout((x) => {
    console.log(`I'm here, Mr. ${x}`)
    y++;
}, 500, 'Boss') //y is increased in this point but the print is not increased because it's executed before this
console.log("After")
console.log(y)
//result is Before; after; hi
//becase hi is executed after 2000 seconds