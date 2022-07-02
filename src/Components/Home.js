import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const Home = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <div className="home_container">
      <ul>
        <li>
          {pokemons ? (
            pokemons?.map((pokemon) => (
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image="#" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {pokemon.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    View details
                  </Button>
                </CardActions>
              </Card>
            ))
          ) : (
            <p>No pokemon found</p>
          )}
        </li>
      </ul>

      <Pagination count={10} color="primary" />
    </div>
  );
};

export default Home;
