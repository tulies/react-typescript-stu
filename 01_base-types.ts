let isDone: boolean = false

let age: number = 20
let binaryNumber: number = 0b111111

let firstName: string = 'tulies'
let message: string = `Hello, ${firstName}, age is ${age}!`

let u: undefined = undefined
let n: null = null

let num: number = undefined


// any 可以为任意类型，并且ide也就没有提示了
let notSure: any = 4
notSure = '可以是一个 string'
notSure = true

notSure.myName
notSure.getName()

// 联合类型
let numberOrString: number | string = 234
numberOrString = 'abc'
// 赋值boolean就会报错了
// numberOrString = false

// 数组
let arrOfNumbers: number[] = [1, 2, 3, 4]

// 元祖，typle
let user: [string, number] = ['tulies',20]


