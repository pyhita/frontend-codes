// 1 导入方式一：
// import {fname, age, sayHello} from "./bar.js";

// 2 导入方式二：
// import {fname as name, age, sayHello} from "./bar.js";

// 3 导入方式三：
import * as foo from "./bar.js"

console.log(foo.name, foo.age)
foo.sayHello()



