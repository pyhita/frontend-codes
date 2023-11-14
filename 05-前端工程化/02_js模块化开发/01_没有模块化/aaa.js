// 防止作用于冲突，将变量定义在function中
const mouelA = (function () {
    let name = "kante"
    console.log(name)

    return {
        name
    }
}) ()

