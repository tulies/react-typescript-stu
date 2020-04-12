// 泛型
// 定义函数、接口、类型可以用到

function echo<T>(arg: T): T {
    return arg
}

const result1 = echo<number>(1123)

  
function swap<T, U>(tuple: [T, U]): [U,T] {
    return [tuple[1], tuple[0]]
}
const result2 = swap([123, 'abc'])


///////////////
interface IWithLength {
    length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length)
    return arg
}
const str = echoWithLength('str')
const obj = echoWithLength({length: 10, width: 10})
const arr2 = echoWithLength([1, 2, 3])
// error
// echoWithLength(12)



/////////// class类使用泛型
class Queue<T> {
    private data = [];
    push(item: T){
        return this.data.push(item)
    }
    pop(): T {
        return this.data.shift()
    }
}

const queue1 = new Queue<number>()
queue1.push(1)
console.log(queue1.pop().toFixed())

const queue2 = new Queue<string>()
queue2.push('abc')
console.log(queue2.pop().length)

//////////interface 接口中使用泛型
interface KeyPair<T, U> {
    key: T,
    value: U
}

let kp1: KeyPair<number, string> = {key:123, value: 'abc'}
let kp2: KeyPair<string, number> = {key:'abc', value: 123}


//////// 函数，泛型描述

interface IPlus<T> {
    (a: T, b: T): T
}

function plus(a: number, b: number): number{
    return a + b
}

function connect(a: string, b: string): string{
    return a + b
}
const aaa: IPlus<number> = plus
const bbb: IPlus<string> = connect
