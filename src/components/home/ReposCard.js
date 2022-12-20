import React from "react";
import { Card, Box, Typography, styled } from "@mui/material";

const StyledCard = styled(Card)`
  width: 200px;
  height: auto;
  margin: 20px;
`;
const Image = styled("img")({
  width: "auto",
  height: 100,
});

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;
const SubContainer = styled(Box)``;

const ReposCard = ({ item }) => {
  return (
    <StyledCard>
      <Box
        textAlign="center"
        style={{ padding: "25px 15px", marginBottom: "10px" }}
      >
        <Box>
        <Image alt="Movie Poster" src={item.owner.avatar_url} />
        </Box>
        <SubContainer>
          <Text style={{ fontWeight: 600, color: "#212121" }}>
           User : {item.owner.login}
          </Text>
          <Text style={{ color: "green",fontWeight: 600 }}>Repo Name : {item.name}</Text>
          <Text style={{ color: "green" }}>Description : {item.description}</Text>
          <Text style={{ color: "#212121", opacity: ".6" }}>
            Last Updated Date : {item.updated_at}
          </Text>
          <Text style={{ color: "#212121", opacity: ".6" }}>
            Created Date : {item.created_at}
          </Text>
          
          <Text style={{ color: "#212121", opacity: ".6" }}>
            Stars : {item.stargazers_count}
          </Text>
          <Text style={{ color: "#212121", opacity: ".6" }}>
            Watchers Count : {item.watchers_count}
          </Text>
          <Text style={{ color: "#212121", opacity: ".6" }}>
            Language : {item.language}
          </Text>
        </SubContainer>
      </Box>
    </StyledCard>
  );
};

export default ReposCard;
