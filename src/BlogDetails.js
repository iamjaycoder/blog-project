import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
import {useNavigate} from 'react-router-dom';

const BlogDetails = () => {
    const navigate = useNavigate();


    const {id} = useParams();

    const {data: blog, isPending, error} = useFetch('http://localhost:8000/Blogs/' + id);

    const handleClick = () => {
        fetch('http://localhost:8000/Blogs/' + blog.id, {
            method: 'DELETE'
        })
        .then(() => {
            navigate('/welcome')
        })
    }

    return ( 
        <Container>
           {isPending && <div>Loading...</div>}
           {error && <div>{error}</div>}
           {blog && (
               <article>
                   <Title>{blog.title}</Title>
                   <Para>Written By {blog.author}</Para>
                   <Div>{blog.body}</Div>
                   <Button onClick={handleClick}>Delete Blog</Button>
               </article>
           )}
        </Container>
     );
}
 
export default BlogDetails;

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
text-align: center;
`;
const Title = styled.div`
font-weight: bold;
font-size: 21px;
color: grey;
margin-bottom: 10px;
`;
const Para = styled.div`
font-weight: bold;
color: crimson;
margin-bottom: 20px;
`;
const Div = styled.div`
font-family: roboto;

`;

const Button = styled.button`
width: 30%;
margin: auto;
background: crimson;
color: white;
outline: none;
border-radius: 5px;
border: none;
height: 30px;
cursor: pointer;
`;
