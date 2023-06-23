import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import React from "react";
import axios from "axios";

const AdminBlogs = () => {
  const [blogs, setBlogs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
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

  const handleDelete =  async (id) => {
const res =  await axios.delete(`https://64924de4428c3d2035d00605.mockapi.io/blog/${id}`);
console.log(res);
alert("Deleted");


 getBlogs();
  }
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Box>
            <CircularProgress />
          </Box>
        </Box>
      ) : (
        blogs.map((data) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={data.id}>
              <img
                src={data.image}
                alt=""
                sx={{ width: "18rem", maxHeight: "50px" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={()=>handleDelete(data.id)}
                >
                  Edit
                </Button>
                <Button variant="error">Delete</Button>
              </CardActions>
            </Card>
          );
        })
      )}

   
    </Box>
  );
};

export default AdminBlogs;
