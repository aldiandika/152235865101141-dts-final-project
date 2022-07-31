import { Box, Button, Container, Grid } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokeListCard from "../components/PokeList_card";
import {
  getNewPokeList,
  getPokeList,
  isLoadingState,
  nextListState,
  pokeListState,
  prevListState,
} from "../reducers/PokeListSlice";

const PokemonList = () => {
  const pokeList = useSelector(pokeListState);
  const nextList = useSelector(nextListState);
  const prevList = useSelector(prevListState);
  const isLoading = useSelector(isLoadingState);
  const dispatch = useDispatch();

  // Get first pokemon list
  useEffect(() => {
    dispatch(getPokeList());
  }, []);

  // useEffect(() => {
  //   console.log(pokeList);
  // }, [pokeList]);

  const nextPage = () => {
    dispatch(getNewPokeList(nextList));
  };

  const prevPage = () => {
    dispatch(getNewPokeList(prevList));
  };

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
          {prevList !== null ? (
            <Button variant="text" onClick={prevPage}>
              PREV
            </Button>
          ) : (
            <Button variant="text" disabled>
              PREV
            </Button>
          )}

          {nextList !== null ? (
            <Button variant="text" onClick={nextPage}>
              NEXT
            </Button>
          ) : (
            <Button variant="text" disabled>
              NEXT
            </Button>
          )}
        </Box>
        {isLoading ? (
          <>Loading..</>
        ) : (
          <Grid container spacing={1}>
            {pokeList.map((item, index) => (
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <PokeListCard
                  key={zIndex}
                  pokeUrl={item.url}
                  pokeName={item.name}
                />
              </Grid>
            ))}
          </Grid>
        )}
        <Box
          sx={{
            maxWidth: "lg",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: 4,
            paddingY: 1,
          }}
        >
          {prevList !== null ? (
            <Button variant="text" onClick={prevPage}>
              PREV
            </Button>
          ) : (
            <Button variant="text" disabled>
              PREV
            </Button>
          )}

          {nextList !== null ? (
            <Button variant="text" onClick={nextPage}>
              NEXT
            </Button>
          ) : (
            <Button variant="text" disabled>
              NEXT
            </Button>
          )}
        </Box>
      </Container>
    </>
  );
};

export default PokemonList;
