import React from 'react'
import ReposList from './ReposList';
import { Box ,styled} from '@mui/material';
const Container=styled(Box)`
margin-top:75px;
`; 

const Home = ({sort,setSort}) => {
  return (
    <Container>
        <ReposList sort={sort} setSort={setSort}  />
    </Container>
  )
}

export default Home;