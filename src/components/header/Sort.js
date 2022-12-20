import  React from 'react';
import {InputLabel,MenuItem,FormControl,Select,Box,styled} from  '@mui/material'

const Wapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;

  & > div {
    margin-right: 40px;
    font-size: 16px;
    align-item: center;
  }
  `

const  Sort=({sort,setSort})=> {
  

  const handleChange = (event) => {
    setSort(event.target.value);
    
  };
 
  return (
    <Wapper>
      <FormControl sx={{ m: 1, minWidth: 80 }} >
        <InputLabel id="demo-simple-select-autowidth-label" style={{color:"white"}}>Sort</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={sort}
          onChange={handleChange}
          autoWidth
          label="sort"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"stars"}> Stars</MenuItem>
          <MenuItem value={"repo"}> Repo Name</MenuItem>created_at
          <MenuItem value={"created_at"}> Created Date</MenuItem>
          <MenuItem value={"updated_at"}> Updated Date</MenuItem>
          <MenuItem value={"watchers_count"}>watchers count</MenuItem>
          
        </Select>
      </FormControl>
    </Wapper>
  );
}
export default  Sort;