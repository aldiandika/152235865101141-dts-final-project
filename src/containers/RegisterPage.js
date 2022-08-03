import { Box } from "@mui/material";
import LoginOrRegister from "../components/LoginOrRegister";

const RegisterPage = () => {
  return (
    <>
      <Box className="root-container">
        <LoginOrRegister loginOrRegister={"register"} />
      </Box>
    </>
  );
};

export default RegisterPage;
