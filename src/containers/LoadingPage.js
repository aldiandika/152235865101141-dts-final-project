import { Box } from "@mui/material";

const LoadingPage = () => {
  return (
    <Box className="root-container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Box>
  );
};

export default LoadingPage;
