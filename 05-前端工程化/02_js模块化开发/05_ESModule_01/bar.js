// 导出方式三：定义的同时导出
export var name = "kante"
export var age = 3223

export function sayHello() {
    console.log("hello ...")
}

// 导出方式一：
// export {
//     name,
//     age,
//     sayHello
// }

// 导出方式二：别名
export {
    name as fname
}