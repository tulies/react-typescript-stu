// 定义对象类型，interface
// 约束 object 的 shape
interface Person{
    readonly id: number
    name: string
    age?: number
}

let tulies: Person = {
    id: 1234,
    name: 'tulies',
    age: 20
}
// id是只读属性，赋值会报错
// tulies.id= 1111