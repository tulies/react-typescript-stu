// 接口，使用implements去实现
interface Radio {
    switchRadio(): void
}

class Car implements Radio {
    switchRadio(): void {
        console.log('我是 Car 中的radio')
    }
}

class Phone implements Radio {
    switchRadio(): void {
        console.log('我是 Phone 中的radio')
     }
}