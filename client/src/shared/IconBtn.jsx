import { Tooltip,IconButton } from "@mui/material";

const IconBtn = ({title,icon,onClick})=>{
    return (
      <Tooltip title={title} >
      <IconButton color="inherit" size="large" onClick={onClick}>
         {icon}
        </IconButton>
      </Tooltip>
    )
    }

    export default IconBtn;