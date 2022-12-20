import React from 'react'
import ReposList from './ReposList';
import { Box ,styled} from '@mui/material';
const Container=styled(Box)`
margin-top:75px;
`; 

const Home = ({sort,setSort,searchInput}) => {
  return (
    <Container>
        <ReposList sort={sort} setSort={setSort} searchInput={searchInput}  />
    </Container>
  )
}

export default Home;