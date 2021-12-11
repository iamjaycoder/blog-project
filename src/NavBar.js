import styled from 'styled-components';
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <Container>
            <Title>Jay's Blog</Title>
            <Space/>
           
                <Nav to='/welcome'>
                    Home
                </Nav>
                <Nav to='/create'>
                    New Blog
                </Nav>
               
        </Container>
      );
}
 
export default NavBar;

const Container = styled.div`
width: 100%;
height: 80px;
display: flex;
align-items: center;
`;
const Title = styled.div`
margin: 6%;
font-weight: bold;
font-size: 30px;
color: crimson;
`;
// const Navigation = styled.div`

// display: flex;
// margin: 6%;
// background: blue;
// `;
const Nav = styled(Link)`
margin: 6%;
color: grey;
text-decoration: none;

: hover {
    color: crimson;
}
`;
const Space = styled.div`
flex: 1;
`;