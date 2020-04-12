class Animal {
    // 私有的，子类以及实例均无法访问
    // private name: string
    // 受保护的，仅子类和自己可以访问
    // protected name: string
    // 只读
    // readonly name: string
    public name: string

    static categoies: string[] = ['mammal', 'bird']
    static isAnimal(a){
        return a instanceof Animal
    }
    constructor(name: string){
        this.name = name
    }
    run() {
        return `${this.name} is running`
    }
}

const snake = new Animal('tulies')
console.log(snake.run())

// 可以安装ts-node 进行预览看console.log的结果

// 继承
class Dog extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}

const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run())
console.log(xiaobao.bark())


class Cat extends Animal {
    constructor(name) {
        super(name)
        console.log(this.name)
    }
    run() {
        return 'Meow'+ super.run()
    }
}
const maomao = new Cat('maomao');
console.log(maomao.run())

console.log(Animal.categoies)
console.log(Animal.isAnimal(maomao))