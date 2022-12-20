import React,{useState} from "react";
import { Box, AppBar, Toolbar } from "@mui/material";
import CasinoIcon from '@mui/icons-material/Casino';
import Search from "./Search";
import Sort from './Sort';

const Header = ({sort,setSort,searchFunction}) => {
 
  return (
    <AppBar style={{ backgroundColor: " rgb(29, 69, 107)" }}>
      <Toolbar>
        <Box style={{ display: "flex" }}>
          <CasinoIcon style={{ fontSize: "30px", textAlign: "center" , paddingTop:"5px" }} />
          <Box style={{ fontSize: "30px", textAlign: "center" }}>Dice</Box>
        </Box>
        <Search searchFunction={searchFunction} />
        <Sort sort={sort} setSort={setSort}  style={{float:"right"}} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
