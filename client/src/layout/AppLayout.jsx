import Header from "./Header";
import Title from "../shared/Title";
import { Grid2 } from "@mui/material";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <Title />
        <Header />
        <Grid2 container sx={{ height: "100vh",width:"100vw", }}>
          <Grid2 xs={4} sx={{ height: "100%",width:"33.33%",display:{xs:"none",sm:"block"}  }}>
            First
          </Grid2>

          <Grid2 xs={12} sm={8} md={5} sx={{ height: "100%",width:"33.33%" }}>
            <WrappedComponent {...props} />
          </Grid2>

          <Grid2 md={4} xs={4} sx={{ height: "100%",width:"33.33%",display:{xs:"none",md:"block"},
        padding:"2rem",
        bgcolor:"rgba(0,0,0,0.85"}}>
            Third
          </Grid2>
        </Grid2>

        <div>Footer</div>
      </div>
    );
  };
};

export default AppLayout;
