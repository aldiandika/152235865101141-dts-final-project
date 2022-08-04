import { Box, Typography } from "@mui/material";

const NameAndTypeComp = ({
  poke_ID,
  pokeName,
}) => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "100vw",
          paddingLeft: 2
        }}
      >
        <Box
          sx={{
            width: "95%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5em",
              fontWeight: 600,
              color: "white",
              textTransform: "capitalize"
            }}
          >
            {pokeName}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.2em",
              fontWeight: 600,
              color: "white",
              textTransform: "capitalize"
            }}
          >
            #{poke_ID}
          </Typography>
        </Box>



      </Box>

    </>
  )
}

export default NameAndTypeComp;