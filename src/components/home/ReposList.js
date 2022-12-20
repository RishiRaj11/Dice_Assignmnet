import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import ReposCard from "./ReposCard";
import axios from "axios";
const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const ReposList = ({ sort, setSort, searchInput }) => {
  console.log(sort);
  const [repos, setRepos] = useState([]);
  const [...sortByStars] = repos;
  const [...sortByWatchers] = repos;
  const [...sortByName] = repos;
  const [...sortByCreatedDate] = repos;
  const [...sortByUpdatedDate] = repos;

  sortByName.sort(function (a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA > nameB) {
      return 1;
    }
    if (nameA < nameB) {
      return -1;
    }

    return 0;
  });

  sortByStars.sort(function (a, b) {
    return Number(a.stargazers_count) - Number(b.stargazers_count);
  });
  sortByWatchers.sort(function (a, b) {
    return Number(a.watchers_count) - Number(b.watchers_count);
  });
  sortByCreatedDate.sort(function (a, b) {
    return new Date(a.created_at) - new Date(b.created_at);
  });
  sortByUpdatedDate.sort(function (a, b) {
    return new Date(a.created_at) - new Date(b.created_at);
  });

  useEffect(() => {
    axios.get("https://api.github.com/users/RishiRaj11/repos").then((data) => {
      //console.log(data.data);
      setRepos(data.data);
    });
  }, []);
  //console.log(searchInput);
  return (
    <>
      <Container>
        {sort ? (
          <>
            {sort === "stars" &&
              sortByStars.map((item) => (
                <ReposCard item={item} key={item._id} />
              ))}
            {sort === "watchers_count" &&
              sortByWatchers.map((item) => (
                <ReposCard item={item} key={item._id} />
              ))}
            {sort === "created_at" &&
              sortByCreatedDate.map((item) => (
                <ReposCard item={item} key={item._id} />
              ))}
            {sort === "updated_at" &&
              sortByUpdatedDate.map((item) => (
                <ReposCard item={item} key={item._id} />
              ))}
            {sort === "repo" &&
              sortByName.map((item) => (
                <ReposCard item={item} key={item._id} />
              ))}
          </>
        ) : (
          <>
            {repos
              .filter((val) => {
                if (searchInput === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchInput.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((item) => (
                <ReposCard item={item} key={item._id} />
              ))}
          </>
        )}
      </Container>
    </>
  );
};

export default ReposList;
