import styled from 'styled-components';
//import {useState, useEffect} from 'react';
import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Blog = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/Blogs')
  
    
    return ( 
        <Container>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
         {blogs && <Bloglist blogs={blogs}/>}
        
        </Container>
     );
}
 
export default Blog;

const Container = styled.div`

`;
