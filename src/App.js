import styled from "styled-components";
import './App.css';

function App() {
  return (
    <div className="App">
    
    
      <Container> 
        <Nav>
          <Login>
            Login
          </Login>
        </Nav>
        <Title>
          <h1>HVG </h1> 
          <h2>store</h2>
        </Title>

        <Main>
          <AddingItems>
            + ADD ITEM
          </AddingItems>
          <Item>
            <Top>
            <ItemName>Kaju</ItemName>
            <In>In</In>
            <Out>Out</Out>
            </Top>
            <Bottom>
              <Delete>
                Delete
              </Delete>
            </Bottom>

          </Item>
        </Main>
      </Container>
    
    </div>
  );
}

const Container=styled.section`
  box-sizing: border-box;
  width:100vw;
 
`;

const Title=styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  justify-content: center;
  margin-top:-30px;
  h1{
    color:red;
    letter-spacing:1.5px;
    font-size:29px;
    
  }
  h2{
    font-size:25px;
    padding:5px 20px;
  }
`;

const Nav=styled.nav`
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  width:100vw;
  height:40px;
`;

const Login=styled.div`
   background-color: rgba(0, 0, 0, 0.6);
    padding:8px 16px;
    text-decoration:uppercase;
    letter-spacing:1.5px;
    border:1px solid #f9f9f9;
    border-radius:4px;
    transition:all 0.2s ease 0s;
    margin:10px 15px 0 0;
    height:36px;
    &:hover{
        background-color:#f9f9f9;
        color:#000;
        cursor:pointer;
        border-color:transparent;
    }
`;

const Main=styled.section`
  border:1px solid #f9f9f9;
  width:60vw;
  margin-left:20vw;
  height:200px;
  @media (max-width:768px){
    width:100vw;
    margin-left:0;
  }

`;
const AddingItems=styled.div`
  color:#f9f9f9;
  width:100%;
  height:40px;
  background-color: #109056;
  font-weight:bold;
  font-size:24px;
  text-align: center;
  padding:5px 0;
  border:1px solid transparent;
  border-radius: 7px;
  &:hover{
    background-color: #109956;
    cursor:pointer;
  }

`;

const Item=styled.div`
  width:100%;
  height:80px;
  background-color: white;
  color:black;
  margin-top:15px;
  display:flex;
  flex-direction: column;
`;

const Top=styled.div`
  width:100%;
  height:40px;
  display: flex;
  flex-direction: row;
  gap:5px;
  justify-content:space-around;
`;

const ItemName=styled.div``;
const In=styled.div``;
const Out=styled.div``;
const Bottom=styled.div``;
const Delete=styled.div``;








export default App;
