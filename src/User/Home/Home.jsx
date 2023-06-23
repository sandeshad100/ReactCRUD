import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom"

export default function Home() {

  const navigate = useNavigate();
  const [blogs, setBlogs] = React.useState([]);
  const [loading,setLoading] = React.useState(true);
  const getBlogs = async () => {
    const res = await axios.get(
      "https://64924de4428c3d2035d00605.mockapi.io/blog"
    );
    console.log(res);
    setBlogs(res.data);
    setLoading(false);
  };

 

  React.useEffect(() => {
    getBlogs();
  }, []);
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>

 
  {(loading )? (
    
    <Box sx={{display:'flex', justifyContent:'center', gap:'10px', alignItems:'center', height:'100vh',width:'100vw'}}>
      <Box><CircularProgress/></Box>
    </Box>
  ):(
    blogs.map((data) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={data.id}>
           <img src={data.image} alt="" sx={{width:'18rem', maxHeight:'50px'}}/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={()=> navigate(`/blog/${data.id}`)}>Learn More</Button>
            
            </CardActions>
          </Card>
        );
      })
  )}
 


      {blogs.map((data) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={data.id}>
           
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={()=> navigate(`/blog/${data.id}`)}>Learn More</Button>
            
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
}
