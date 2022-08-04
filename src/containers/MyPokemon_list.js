import { Box, Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { isLoadingState, myPokeListState } from "../reducers/PokeListSlice";
import PokeListCard from "../components/PokeList_card";
import { useEffect } from "react";

const MyPokemonList = () => {
  const myPokeList = useSelector(myPokeListState);
  const isLoading = useSelector(isLoadingState);

  useEffect(() => {
    console.log(myPokeList);
  });
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: 4,
            paddingY: 1,
          }}
        >
          {isLoading ? (
            <Box
              sx={{
                height: "90vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </Box>
          ) : (
            <Grid container spacing={1}>
              {myPokeList.map((item, index) => (
                <Grid item key={item.name} xs={6} sm={6} md={3} lg={3}>
                  <PokeListCard
                    pokeUrl={`https://pokeapi.co/api/v2/pokemon/${item.pokeID}`}
                    pokeName={item.pokeName}
                    pokeAlias={item.pokeAlias}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Container>
    </>
  );
};

export default MyPokemonList;
