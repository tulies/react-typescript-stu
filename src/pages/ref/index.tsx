import React, {useState, useEffect, useRef} from 'react'

const Effect: React.FC = (props)=>{
    // 每次render都是新的state。
    const [like, setLike] = useState(0)
    // ref会记住上一次的引用，
    const likeRef = useRef(0)
    useEffect(() => {
        console.log('document title effect is running')
        document.title = `点击了${like}次`
    }, [like])


    // 每次render的时候自动获得焦点
    const domRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if (domRef && domRef.current) {
          domRef.current.focus()
        }
    })

    const handleAlertClick = () =>{
        setTimeout(() => {
            // alert('you clicked on ' + like)
            alert('you clicked on ' + likeRef.current)
          }, 3000)
    }
    return (
    <>
        <h2>演示useRef的使用</h2>
        <div>useRef</div>
        <br/>
        <br/>
        <div>
            <button onClick={()=>{setLike(like+1); likeRef.current++; console.log(likeRef)}}> {like} 👍 </button>
            <button onClick={handleAlertClick}> alert like </button>
        </div>
        <div>
            <input type="text" ref={domRef} />
        </div>
    </>
    ) 
}
export default Effect