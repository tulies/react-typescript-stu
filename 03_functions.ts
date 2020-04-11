// 函数声明，可选参数只能放在后面
function add (x: number, y: number, z?: number): number {
    if(typeof z === 'number'){
        return x + y + z

    }else{
        return x + y
    }
}

let result = add(1, 2)

// 函数表达式
const add2 = function (x: number, y: number, z?: number): number {
    if(typeof z === 'number'){
        return x + y + z

    }else{
        return x + y
    }
}
 