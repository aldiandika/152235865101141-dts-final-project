import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import _ from "lodash";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

const PokemonCatchPage = () => {
  const navigate = useNavigate();
  const param = useParams();
  const pokeID = param.id;
  const [query, setQueryParam] = useSearchParams();
  let pokeName = query.get("name");

  // Catch state=> 0: default, 1:catching, 2:success, 3:fail
  const [catchState, setCatchState] = useState(0);

  const [pokeAlias, setPokeAlias] = useState();
  const [nameError, setNameError] = useState("");

  const catchPoke = () => {
    // Catching
    // console.log("catching");
    setCatchState(1);

    setTimeout(() => {
      let catchRate = Math.random() <= 0.5 ? true : false;
      // console.log(catchRate);

      // Check if success
      if (catchRate) {
        setCatchState(2);
      } else {
        setCatchState(3);
      }
      // setCatchState(2);
    }, 1000);
  };

  const handleChange = (e) => {
    setPokeAlias(e.target.value);
    setNameError("");
  };

  const giveName = (nameAlias) => {
    const rawListMyPoke = JSON.parse(localStorage.getItem("my_poke"));

    const pokeInfo = {
      pokeID: pokeID,
      pokeName: pokeName,
      pokeAlias: nameAlias,
    };

    let named = _.filter(rawListMyPoke, { pokeAlias: nameAlias });

    if (nameAlias === undefined) {
      setNameError("Sorry, name can't be empty.");
    } else {
      if (named.length > 0) {
        setNameError("You already give this name, didn't you remember ?");
      } else {
        // console.log(rawListMyPoke);
        let tempList = [];

        if (rawListMyPoke) {
          rawListMyPoke.forEach((element) => {
            tempList.push(element);
          });
        }

        tempList.push(pokeInfo);
        // console.log(tempList);
        localStorage.setItem("my_poke", JSON.stringify(tempList));

        setTimeout(() => {
          // Go to pokemon detail page
          navigate(`/detail/${pokeID}`);
        }, 1000);
      }
    }
  };

  const catchAgain = () => {
    window.location.reload(false);
  };

  return (
    <>
      {/* Default */}
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "#56525C",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          width={{ xs: "100%", sm: "100%", md: "50", lg: "50%" }}
          height="100%"
          sx={{
            backgroundColor: "ivory",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {catchState === 0 ? (
            <Box
              sx={{
                paddingTop: 8,
                fontSize: "1.5em",
                fontWeight: 900,
                color: "#56525C",
              }}
            >
              A wild {pokeName} appeared !!
            </Box>
          ) : (
            <>
              {catchState === 1 ? (
                <Box
                  sx={{
                    paddingTop: 8,
                    fontSize: "1.5em",
                    fontWeight: 900,
                    color: "#56525C",
                  }}
                >
                  Catching {pokeName} !!
                </Box>
              ) : (
                <>
                  {catchState === 2 ? (
                    <Box
                      sx={{
                        paddingTop: 8,
                        fontSize: "1.5em",
                        fontWeight: 900,
                        color: "green",
                      }}
                    >
                      Yeah, {pokeName} Catched !!
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        paddingTop: 8,
                        fontSize: "1.5em",
                        fontWeight: 900,
                        color: "#C03028",
                      }}
                    >
                      No, {pokeName} run away !!
                    </Box>
                  )}
                </>
              )}
            </>
          )}

          {/* Image */}
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`}
            alt="Pokemon"
            width="300px"
          />

          {catchState === 0 ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: 8,
              }}
            >
              <Button
                variant="contained"
                onClick={catchPoke}
                sx={{
                  flex: 2,
                  marginX: 4,
                  padding: 2,
                  backgroundColor: "green",
                  fontWeight: 900,
                  fontSize: "1.2em",
                  borderRadius: "2em",
                }}
              >
                Catch
              </Button>
              <Button
                variant="contained"
                onClick={() => navigate(`/detail/${pokeID}`)}
                sx={{
                  flex: 2,
                  marginX: 4,
                  padding: 2,
                  backgroundColor: "#C03028",
                  fontWeight: 900,
                  fontSize: "1.2em",
                  borderRadius: "2em",
                }}
              >
                Run
              </Button>
            </Box>
          ) : (
            <>
              {catchState === 1 ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: 8,
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={catchPoke}
                    sx={{
                      flex: 2,
                      marginX: 4,
                      padding: 2,
                      backgroundColor: "green",
                      fontWeight: 900,
                      fontSize: "1.2em",
                      borderRadius: "2em",
                    }}
                  >
                    Catch
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => navigate(`/detail/${pokeID}`)}
                    sx={{
                      flex: 2,
                      marginX: 4,
                      padding: 2,
                      backgroundColor: "#C03028",
                      fontWeight: 900,
                      fontSize: "1.2em",
                      borderRadius: "2em",
                    }}
                  >
                    Run
                  </Button>
                </Box>
              ) : (
                <>
                  {catchState === 2 ? (
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "Column",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingBottom: 8,
                      }}
                    >
                      Give Your Pokemon a name !!
                      <br />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          fontSize: "0.8em",
                          color: "red",
                        }}
                      >
                        {nameError}
                      </Box>
                      <br />
                      <Box
                        sx={{
                          width: "80%",
                          margin: 1.5,
                          display: "flex",
                          flexDirection: "Column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <TextField
                          fullWidth
                          required
                          label="Your Pokemon Name"
                          variant="outlined"
                          onChange={handleChange}
                        />
                        <br />
                        <Button
                          variant="contained"
                          onClick={() => {
                            giveName(pokeAlias);
                          }}
                          sx={{
                            flex: 2,
                            marginX: 4,
                            padding: 2,
                            backgroundColor: "#56525C",
                            fontWeight: 900,
                            fontSize: "0.8em",
                            borderRadius: "2em",
                          }}
                        >
                          Give Name
                        </Button>

                        <Box
                          sx={{
                            paddingY: 2,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            fontSize: "0.8em",
                          }}
                        >
                          You can check them in My Pokemon menu.
                        </Box>
                      </Box>
                    </Box>
                  ) : (
                    <>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          paddingBottom: 8,
                        }}
                      >
                        <Button
                          variant="contained"
                          onClick={catchAgain}
                          sx={{
                            flexBasis: "12em",
                            marginX: 4,
                            padding: 2,
                            backgroundColor: "green",
                            fontWeight: 900,
                            fontSize: ".7em",
                            borderRadius: "2em",
                          }}
                        >
                          Catch Again
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => navigate(`/detail/${pokeID}`)}
                          sx={{
                            width: "12em",
                            marginX: 4,
                            padding: 2,
                            backgroundColor: "#C03028",
                            fontWeight: 900,
                            fontSize: ".7em",
                            borderRadius: "2em",
                          }}
                        >
                          Run
                        </Button>
                      </Box>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default PokemonCatchPage;
