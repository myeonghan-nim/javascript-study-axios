// unsynchronization(non-blocking)
console.log('start')

setTimeout(() => {console.log('wake up')}, 3000)

console.log('end')

console.log('start')

sleep3s()

console.log('end')