import { Box } from "@mui/material";
import LoginOrRegister from "../components/LoginOrRegister";

const LoginPage = () => {
  return (
    <>
      <Box className="root-container">
        <LoginOrRegister loginOrRegister={"login"} />
      </Box>
    </>
  );
};

export default LoginPage;
