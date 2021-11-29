import { Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Read() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`https://61a1a2036c3b400017e69d3e.mockapi.io/clients/`)
      .then((response) => {
        setAPIData(response.data);
      })
  }, [])

  const setData = (data) => {
    let { id, nameValue, businessNameValue, identificationValue, emailValue, phoneValue, businessSizeValue, streetValue, numberValue, cepValue, stateValue, cityValue } = data;
    localStorage.setItem('id', id)
    localStorage.setItem('name', nameValue)
    localStorage.setItem('businessName', businessNameValue)
    localStorage.setItem('identification', identificationValue)
    localStorage.setItem('email', emailValue)
    localStorage.setItem('phone', phoneValue)
    localStorage.setItem('businessSize', businessSizeValue)
    localStorage.setItem('street', streetValue)
    localStorage.setItem('number', numberValue)
    localStorage.setItem('cep', cepValue)
    localStorage.setItem('state', stateValue)
    localStorage.setItem('city', cityValue)
  }

  const getData = () => {
    axios.get(`https://61a1a2036c3b400017e69d3e.mockapi.io/clients/`)
      .then((getDataApi) => {
        setAPIData(getDataApi.data);
      })
  }

  const onDelete = (id) => {
    axios.delete(`https://61a1a2036c3b400017e69d3e.mockapi.io/clients/${id}`)
      .then(() => {
        getData()
      })
  }

  return (
    <Container sx>
      <Link style={{ display: 'flex', textDecoration: 'none', justifyContent: 'end', marginBottom: 20 }} to='/'>
        <Button variant="contained">Voltar</Button>
      </Link>
      <TableContainer sx={{ boxShadow: 2 }}>
        <Table sx={{ minWidth: 900 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Nome da Empressa</TableCell>
              <TableCell>CPF/CNPJ</TableCell>
              <TableCell>Porte</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </ TableRow>
          </TableHead>
          <TableBody>
            {APIData.map((data) => {
              return (
                <TableRow key={data.id}>
                  <TableCell>{data.nameValue}</TableCell>
                  <TableCell>{data.businessNameValue}</TableCell>
                  <TableCell>{data.identificationValue}</TableCell>
                  <TableCell>{data.businessSizeValue}</TableCell>
                  <Link style={{ textDecoration: 'none' }} to='/update'>
                    <TableCell><Button onClick={() => setData(data)} variant="contained">Update</Button></TableCell>
                  </ Link>
                  <TableCell>
                    <Button onClick={() => onDelete(data.id)} variant="contained">Delete</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}