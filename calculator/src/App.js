import styled from "styled-components";
import Button from "./components/Button";



export default function App() {
  return (
    <Wrapper>
      <Container>
        <Button />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`  

display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;

`
const Container = styled.div`  


height: 650px;
background-color: black;
border-radius: 10px;
`



