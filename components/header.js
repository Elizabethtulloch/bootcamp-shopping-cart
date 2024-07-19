import React  from "react"
import { Box, ThemeProvider, Typography, AppBar, Button, Link} from "@mui/material"


function Header(){
    return(

        <div className = "header">
           
           
        <AppBar variant = "outlined" position="static" >
        
            <toolbar style={{backgroundColor: "#C5DCE4", minHeight: '60px' }}>
                <h1 style={{top:20}}> hi </h1>
            
                <Box justifyContent="center">
                    <div className = "logo"></div>
                  
            {/* <Typography variant = "h5" style={{color:"#6e3c19", top:40 , height: '0vh'}} > <center>MyFitness</center></Typography> */}
            <Link href="/split" >
                     <Button
                        variant="contained"
                        color="primary"
                        style={{ position: 'absolute', top: 20, left: 1580,backgroundColor: '#6e3c19'}}>
                                split </Button>
                </Link>
                <Link href="/food" >
                     <Button
                        variant="contained"
                        color="primary"
                        style={{ position: 'absolute', top: 20, left: 1470,backgroundColor: '#6e3c19'}}>
                                Analysis </Button>
                </Link>
                <Link href="/analysis" >
                     <Button
                        variant="contained"
                        color="primary"
                        style={{ position: 'absolute', top: 20, left: 1390,backgroundColor: '#6e3c19'}}>
                                Food  </Button>
                </Link>
                </Box>
            </toolbar>
        </AppBar>
           
            </div>
 
    )
}
export default Header