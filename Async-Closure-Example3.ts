//4 Async-Closure-Example3
(async ()=>{
    var funcs = []
    for (let i = 0; i < 5; i++) {
        var delay = function (ms) {
            return new Promise(resolve => setTimeout(resolve,i + ms))
        }
        funcs.push(async ()=>  {
            delay(1000)
            console.log(i)
            await delay(1000)
            console.log(i)
        })
    }
    await funcs[1]() // ФУНКЦИЮ ТУТ ВЫЗЫВАЕМ !!!
})()
// 1
// 1