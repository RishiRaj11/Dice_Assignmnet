
import {InputBase,Box,styled} from  "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SerachContainer= styled(Box)`
background:#fff;
width:38%;
border-radius:2px;
margin-left:10px;
display:flex;
`
const InputBox=styled(InputBase)`
width:100%;
margin-left:20px;
`
const SearchIconWrapper=styled(Box)`
color:gray;
padding-right:5px;
padding-top:4px;
`
const Search=({searchFunction})=>{
    return(
        <SerachContainer>
            <InputBox  placeholder="Search Movies..." onChange={(e)=>{searchFunction(e.target.value)}}  />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            
        </SerachContainer>

    )
}
export default Search;