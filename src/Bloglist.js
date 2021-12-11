import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Bloglist = ({blogs}) => {
    return ( 
        <Container>
            {blogs.map((blog) => (
             <Div key={blog.id}>
                 <Link to={`/blogs/${blog.id}`}>
                 <Title>{blog.title}</Title>
                 <Para>Written By {blog.author}</Para>
                 </Link>
             </Div>
         ))}
          
        </Container>
     );
}
 
export default Bloglist;

const Container = styled.div`

`;
const Div = styled.div`
margin: 6%;
box-shadow: 2.5px 5px 8px 0.5px grey;

a {
    text-decoration: none;
}
`;
const Title = styled.div`
font-weight: bold;
font-size: 21px;
color: gray;
`;
const Para = styled.div`
color: crimson;
font-weight: bold;
`;