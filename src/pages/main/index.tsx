import React from 'react'
import Hello from '../../components/Hello'

const Main: React.FC = (props)=>{

    return (
        <>
            <h2 >Main Index</h2>
            <Hello message="hello, 我是Hello组件！" ></Hello>
        </>
    )

}
export default Main