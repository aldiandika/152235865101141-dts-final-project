import { Box } from "@mui/material";
import Snorlax from "../assets/snorlax.png";
import ImageLogo from "../assets/logo.png";
import { Link } from "react-router-dom";

const LostPage = () => {
  return (
    <Box className="lostpage-root-container">
      <Box className="lostpage-inner-container">
        <img src={Snorlax} className="img-lostpage" alt="Snorlax snoore" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          Oops! Looks Like you lost your journey.
          <Link to="/">
            <img src={ImageLogo} alt="logo" className="img-logo-lostpage" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LostPage;
