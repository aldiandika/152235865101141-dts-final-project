import { Container, Grid } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokeListCard from "../components/PokeList_card";
import {
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

  useEffect(() => {
    console.log(pokeList);
  }, [pokeList]);

  return (
    <>
      <Container maxWidth="md">
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
      </Container>
    </>
  );
};

export default PokemonList;
