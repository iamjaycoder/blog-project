import styled from 'styled-components';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';


const Create = () => {

   

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('jayvybz');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = {title, body, author}

        setIsPending(true);

     fetch('http://localhost:8000/Blogs', {
         method: 'POST',
         headers: {'Content-Type': "application/json"},
         body: JSON.stringify(blog)
         
     })
     .then(() => {
         console.log('new blog added')

         setIsPending(false);
         navigate('/welcome')
     })

        
    }

   

    return ( 
        <Container>
         <Form onSubmit={handleSubmit}>
            <Label>Blog Title:</Label>
            <Input
            required
            type='text'
            value={title}
            onChange={(e) => {
                setTitle(e.target.value)
            }}
            />
            <Label>Blog Body:</Label>
            <TextArea
            required
            value={body}
            onChange={(e) => {
                setBody(e.target.value)
            }}
            >
            </TextArea>
            <Label>Blog Author:</Label>
            <Select
            value={author}
            onChange={(e) => {
                setAuthor(e.target.value);
            }}
            >
                <Option value='jayvybz'>jayvybz</Option>
                <Option value='oyetola'>oyetola</Option>
            </Select>
            {!isPending && <Button>Add Blog</Button>}
            {isPending && <Button>Adding Blog...</Button>}
         
         </Form>
        
        </Container>
     );
}
 
export default Create;

const Container = styled.div`
width: 100%;
height: 100%;
`;
const Form = styled.form`
width: 50%;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;
`;
const Label = styled.label`
font-weight: bold;
`;
const Input = styled.input`
height: 30px;
margin-bottom: 20px;
`;
const TextArea = styled.textarea`
margin-bottom: 20px;
`;
const Select = styled.select`
height: 35px;
margin-bottom: 20px;

`;
const Option = styled.option`

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