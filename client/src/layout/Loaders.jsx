import { Grid2,Skeleton } from "@mui/material"


const Loaders = () => {
  return (
    <div>
     <Grid2 container sx={{ height: "100vh",width:"100vw", }}>
          <Grid2 xs={4} sx={{ height: "100%",width:"33.33%",display:{xs:"none",sm:"block"}  }}>
            <Skeleton variant="rectangular" height={"100vh"} />
          </Grid2>

          <Grid2 xs={12} sm={8} md={5} sx={{ height: "100%",width:"33.33%" }}>
          <Skeleton variant="rectangular" height={100} />
          <Skeleton variant="rectangular" height={100} />
          <Skeleton variant="rectangular" height={100} />
          <Skeleton variant="rectangular" height={100} />
          <Skeleton variant="rectangular" height={100} />
          <Skeleton variant="rectangular" height={100} />
          <Skeleton variant="rectangular" height={100} />
          <Skeleton variant="rectangular" height={100} />


          </Grid2>

          <Grid2 md={4} xs={4} sx={{ height: "100%",width:"33.33%",display:{xs:"none",md:"block"},
        padding:"2rem",
        bgcolor:"rgba(0,0,0,0.85"}}>
                       <Skeleton variant="rectangular" height={"100vh"} />

          </Grid2>
        </Grid2>
    </div>
  )
}

export default Loaders
