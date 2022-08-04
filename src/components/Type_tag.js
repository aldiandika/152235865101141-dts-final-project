import { Box, Typography } from "@mui/material";

const TypeTag = ({ title, color }) => {
  return (
    <>
      <Box
        sx={{
          margin: 0.5,
          padding: 1,
        }}
      >
        <div
          style={{
            width: "auto",
            borderRadius: "12px",
            padding: "0.4em",
            backgroundColor: color,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.7em",
                fontWeight: 900,
                textTransform: "capitalize",
                color: "white",
              }}
            >
              {title}
            </Typography>
          </Box>
        </div>
      </Box>
    </>
  );
};
export default TypeTag;
