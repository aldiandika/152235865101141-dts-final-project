import { Box } from "@mui/material";
import Snorlax from "../assets/snorlax.png";

const LostPage = () => {
  return (
    <Box className="lostpage-root-container">
      <Box className="lostpage-inner-container">
        <img src={Snorlax} className="img-lostpage" alt="Snorlax snoore" />
        Oops! Looks Like you lost your journey
      </Box>
    </Box>
  );
};

export default LostPage;
