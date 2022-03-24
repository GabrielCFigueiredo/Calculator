import { useState } from "react"
import styled from "styled-components"


export default function Button() {

    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(0)
    const [operator, setOperator] = useState()

    const AddNum = (e) => {

    if(num === 0 ){
        setNum(e.target.value)
    }else{
        setNum(num + e.target.value)
    }

    }
    const Clear = () => {

        setNum(0)

    }

    const Porcentage = () => {
        setNum(num /100)
    }

    const hendleOperation = (e) => {

        setOperator(e.target.value)
        setNum2(num)
        setNum(0)

    }

    const OperatorHendle = () => {
        if(num > 0) {
            setNum(-num)
        }else{
            setNum(Math.abs(num))
        }
    }

    const Calculator = () => {
        
        if(operator === "/"){
            setNum(num2 / num)
        }
        if(operator === "+"){
            setNum(parseFloat(num2)  + parseFloat(num))
        }
        if(operator === "-"){
            setNum(num2 - num)
        }
        if(operator === "X"){
            setNum(num2 * num)
        }
    }

    

    

    return (
        <Wrapper>
            <Result>{num}</Result>
            <WrapperButton>
            <BtnWhite onClick={Clear} >AC</BtnWhite>
            <BtnWhite onClick={OperatorHendle} >+/-</BtnWhite>
            <BtnWhite onClick={Porcentage}>%</BtnWhite>
            <BtnOperdor onClick={hendleOperation}value={"/"}>/</BtnOperdor>
            <Btn onClick={AddNum} value={7}>7</Btn>
            <Btn onClick={AddNum} value={8}>8</Btn>
            <Btn onClick={AddNum} value={9}>9</Btn>
            <BtnOperdor onClick={hendleOperation}value={"X"}>X</BtnOperdor>
            <Btn onClick={AddNum} value={4}>4</Btn>
            <Btn onClick={AddNum} value={5}>5</Btn>
            <Btn onClick={AddNum} value={6}>6</Btn>
            <BtnOperdor onClick={hendleOperation}value={"-"}>-</BtnOperdor>
            <Btn onClick={AddNum} value={1}>1</Btn>
            <Btn onClick={AddNum} value={2}>2</Btn>
            <Btn onClick={AddNum} value={3}>3</Btn>
            <BtnOperdor onClick={hendleOperation}value={"+"}>+</BtnOperdor>
            <Btn onClick={AddNum} value={0}>0</Btn>
            <Btn onClick={AddNum} value={","}>,</Btn>
            <Btn onClick={AddNum} value={"."}>.</Btn>
            <BtnOperdor onClick={Calculator}>=</BtnOperdor>
            </WrapperButton>
           
        </Wrapper>
    )
    
}

const Wrapper = styled.div `  

display:flex;
flex-direction: column;
`

const WrapperButton =  styled.div `  

display: grid;
grid-template-columns: 80px 80px 80px 80px;
gap: 16px;
place-items: center;
padding: 10px;
`
const Btn = styled.button `  

border: 1px solid gray;
border-radius: 100%;
height: 3em;
width: 3em;
font-size: 28px;
background-color: gray;
`
const BtnOperdor = styled.button `  

border: 1px solid gray;
border-radius: 100%;
height: 3em;
width: 3em;
font-size: 28px;
background-color: orange;
`
const BtnWhite = styled.button `  

border: 1px solid gray;
border-radius: 100%;
height: 3em;
width: 3em;
font-size: 28px;
background-color: white;
`
const Result = styled.h1 ` 

display: flex;
justify-content: right;
color: white;
margin-right: 1em;
font-size: 50px;

`