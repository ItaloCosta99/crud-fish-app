import { Button, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Container sx={{ width: 300 }}>
      <Stack direction='row' alignItems='center' justifyContent='space-between' spacing={0}>
        <Link style={{ textDecoration: 'none' }} to='/create'>
          <Button variant="contained">Adicionar</Button>
        </Link>
        <Link style={{ textDecoration: 'none' }} to='/read'>
          <Button variant="contained">Visualizar</Button>
        </Link>
      </Stack>
    </Container>
  );
}