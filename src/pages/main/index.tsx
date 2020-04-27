import React from 'react'
import Hello from '../../components/Hello'
import DogShow from '../../components/ClassHoc/DogShow'
import withLoader from '../../components/ClassHoc/withLoader';
const Main: React.FC = (props)=>{
    const WrapperDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
    return (
        <>
            <h2 >下面这个是Hello组件，React.FC组件</h2>
            <Hello message="hello, 我是Hello组件！" ></Hello>
            <hr/>
            <h2 >下面这个是HOC组件，class形式的</h2>
            <WrapperDogShow></WrapperDogShow>
        </>
    )
}
export default Main