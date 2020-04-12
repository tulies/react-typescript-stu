/**
 * 枚举
 */

// 前面加上const，就表示常量枚举，可以提升性能
enum Direction {
    UP = 2,
    DOWN,
    LEFT,
    RIGHT
}

console.log(Direction.DOWN)
console.log(Direction[3])
