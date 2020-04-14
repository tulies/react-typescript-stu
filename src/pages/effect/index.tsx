import React, {useState, useEffect} from 'react'

const Effect: React.FC = (props)=>{
    const [positions, setPositions] = useState({x:0,y:0})

    // 依赖positions.x是否改变，来决定是否 重新remove和add
    // return的函数，类似componentDidMount()
    useEffect(() => {
        console.log('add effect',positions.x)
        const updateMouse = (e: MouseEvent)=>{
            console.log('inner')
            setPositions({x:e.clientX, y:e.clientY})
        }
        document.addEventListener('click',updateMouse)
        return () => {
            console.log('remove effect',positions.x)
            // 组件移除的时候回被执行
            document.removeEventListener('click', updateMouse)
        }
    }, [positions.x])

    console.log('before render', positions.x)
    return (
        <>
            <h2>演示useEffect的使用</h2>
            <div>类似componentDidMount、shouldComponentUpdate</div>
            <br/>
            <br/>
            <br/>
            <div>鼠标点击位置：X:{positions.x}，Y:{positions.y}</div>
        </>
    ) 
}
export default Effect