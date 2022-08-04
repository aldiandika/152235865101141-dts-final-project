import { Box, Card } from "@mui/material";
import TypeTag from "./Type_tag";

const PokeAbility = ({ pokeAbi }) => {
  return (
    <>
      {pokeAbi === undefined || pokeAbi.length === 0 ? (
        <>
          <Box
            sx={{
              width: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              fontWeight: "bold",
              color: "#56525C",
            }}
          >
            Loading . . .
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              width: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Abilities
          </Box>

          <Card
            sx={{
              minWidth: "12em",
              minHeight: "3em",
              marginTop: 1,
              padding: 2,
              boxShadow: 3,
              borderRadius: "12px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              {pokeAbi.map((item, id) => (
                <>
                  <TypeTag key={id} title={item.ability.name} color="grey" />
                </>
              ))}
            </Box>
          </Card>
        </>
      )}
    </>
  );
};

export default PokeAbility;
