import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NotFound = () => {

    return (
 <Container>
 <h2>Sorry, page not found</h2>
 <Link to='/welcome'>Back to homepage</Link>
 </Container>

    );
};
export default NotFound;

const Container = styled.div`

`;
