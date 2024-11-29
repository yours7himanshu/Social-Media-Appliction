import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { CameraAlt as Camera } from "@mui/icons-material"; // Corrected import
import { VisuallyHiddenInput } from "../components/StyledComponents";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from "../utils/validators";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useStrongPassword();

  const avatar = useFileHandler("single");

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLogin(true);

    try {
      console.log("hello");
    } catch (error) {
      console.log("some error occurred", error);
    } finally {
      setIsLogin(false);
    }
  };

  const handleSignUp = (e)=>{
    e.preventDefault();
  }
  const toggleLogin = () => setIsLogin((prev) => !prev);

  return (
    <div>
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5" color="initial">
                Login
              </Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={handleLogin}
              >
                <TextField
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />

                <TextField
                  fullWidth
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  type="password"
                  value={password.value}
                  onChange={password.changeHandler}
                />

                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  fullWidth
                  variant="contained"
                  disabled={loading}
                  color="primary"
                  type="submit"
                >
                  {loading ? "Logging..." : "Login"}
                </Button>

                <Typography
                  textAlign={"center"}
                  marginTop={"1rem"}
                  color="initial"
                >
                  OR
                </Typography>
                <Button fullWidth variant="text" onClick={toggleLogin}>
                  Sign Up Instead
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5" color="initial">
                Sign Up
              </Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={handleSignUp}
              >
                <Stack
                  position={"relative"}
                  width={"10rem"}
                  margin={"auto"}
                  alignItems={"center"}
                >
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      color: "white",

                      bgcolor: "rgba(0,0,0,0.5)",
                      ":hover": {
                        bgcolor: "rgba(0,0,0,0.7)",
                      },
                    }}
                    component="label"
                  >
                    <>
                      <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                      <Camera />
                    </>
                  </IconButton>
                </Stack>

                <TextField
                  fullWidth
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  value={name.value}
                  onChange={name.changeHandler}
                />

                <TextField
                  fullWidth
                  label="Bio"
                  margin="normal"
                  variant="outlined"
                  value={bio.value}
                  onChange={bio.changeHandler}
                />

                <TextField
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />

                {username.error && (
                  <Typography color="error" variant="caption">
                    {username.error}
                  </Typography>
                )}

                <TextField
                  fullWidth
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  type="password"
                  value={password.value}
                  onChange={password.changeHandler}
                />

                {password.error && (
                  <Typography color="error" variant="caption">
                    {password.error}
                  </Typography>
                )}

                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  fullWidth
                  variant="contained"
                  disabled={loading}
                  color="primary"
                  type="submit"
                >
                  {loading ? "Registering..." : "Register"}
                </Button>

                <Typography
                  textAlign={"center"}
                  marginTop={"1rem"}
                  color="initial"
                >
                  OR
                </Typography>
                <Button
                  fullWidth
                  variant="text"
                  onClick={toggleLogin}
                  type="submit"
                >
                  Login Instead
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
}

export default Login;
