

// import 函数，在代码中执行，某些条件成立的时候在进行导入
let flag = true

if (flag) {
    var promise = import("./index.js")
    promise.then(res => {
        console.log(res.formatDate())
    })
}

