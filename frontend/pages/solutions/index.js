import Link from "next/link";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { PATHS } from "../../utils/constants";

export default function Home() {
  return (
    <Container>
      <h1> React Solutions </h1>
      <Grid container spacing={2}>
        {PATHS.map((path, i) => (
          <Grid item xs={12} sm={3} md={6}>
            <Box
              sx={{
                borderRadius: 4,
                bgcolor: "background.default",
                display: "grid",
              }}
            >
              <Paper elevation={3} p={4} key={i}>
                <Card>
                  <CardContent>
                    <Typography variant="h5">{path}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button href={`/solutions/${path}`}>{path}</Button>
                  </CardActions>
                </Card>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
