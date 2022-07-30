import { Box, Button, TextField } from "@mui/material";

const LoginPage = () => {
  return (
    <>
      <Box className="root-container">
        <div>Let Start Discover</div>
        <TextField label="email" />
        <TextField label="password" />

        <Button>Login</Button>
      </Box>
    </>
  );
};

export default LoginPage;
