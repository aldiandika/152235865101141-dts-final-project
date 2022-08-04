import { Box, Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { PokeListGen, isLoadingState } from "../reducers/PokeListSlice";
import PokeListCard from "../components/PokeList_card";

const PokeListGenComponent = () => {
  const pokeListGenState = useSelector(PokeListGen);
  const isLoading = useSelector(isLoadingState);

  return (
    <>
      <Container maxWidth="lg">
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
            {pokeListGenState.map((item) => (
              <Grid item key={item.name} xs={6} sm={6} md={3} lg={3}>
                <PokeListCard
                  pokeUrl={`https://pokeapi.co/api/v2/pokemon/${item.name}`}
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

export default PokeListGenComponent;
