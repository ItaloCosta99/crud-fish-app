import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios';
import { useState } from 'react';

export default function Form() {
  const [nameValue, setNameValue] = useState('');
  const [businessValue, setBusinessValue] = useState('');
  const [idenficationValue, setIdenficationValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [streetValue, setStreetValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [cepValue, setCepValue] = useState('');
  const [stateValue, setStateValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [sizeValue, setSizeValue] = useState('');

  const handleSumbit = (e) => {
    e.preventDefault()
    axios({
      method: 'post',
      url: 'https://61a1a2036c3b400017e69d3e.mockapi.io/clients',
      data: {
        name: nameValue,
        businessName: businessValue,
        identification: idenficationValue,
        email: emailValue,
        phone: phoneValue,
        address: { 
          street: streetValue,
          number: numberValue,
          cep: cepValue,
          state: stateValue,
          city: cityValue,
          businessSize: sizeValue
        }
      }
    })
    setNameValue('')
    setBusinessValue('')
    setIdenficationValue('')
    setEmailValue('')
    setPhoneValue('')
    setStreetValue('')
    setNumberValue('')
    setCepValue('')
    setStateValue('')
    setCityValue('')
    setSizeValue('')
  }

  return (
    <Container component="form" sx={{ border: 1, borderRadius: 4, p: 2, textAlign: 'center', boxShadow: 2, width: 800}}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField autoFocus={true} fullWidth={true} label="Nome" variant="standard" value={nameValue} onChange={(e) => setNameValue(e.target.value)} />
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth={true} label="Nome da Empresa" variant="standard" value={businessValue} onChange={(e) => setBusinessValue(e.target.value)} />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="size-select-label">Porte</InputLabel>
            <Select
              labelId="size-select-label"
              id="size-select"
              value={sizeValue}
              label="Porte"
              onChange={(e) => setSizeValue(e.target.value)}
            >
              <MenuItem value="small">Pequeno</MenuItem>
              <MenuItem value="medium">Médio</MenuItem>
              <MenuItem value="big">Grande</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth={true} label="CPF/CNPJ" variant="standard" value={idenficationValue} onChange={(e) => setIdenficationValue(e.target.value)} />
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth={true} label="E-mail" variant="standard" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth={true} label="Telefone" variant="standard" value={phoneValue} onChange={(e) => setPhoneValue(e.target.value)} />
        </Grid>
      </Grid>
      <h2 sx={{ fontStyle: 'normal' }}>Endereço</h2>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField fullWidth={true} label="Logradouro" variant="standard" value={streetValue} onChange={(e) => setStreetValue(e.target.value)} />
        </Grid>
        <Grid item xs={3}>
          <TextField fullWidth={true} label="CEP" variant="standard" value={cepValue} onChange={(e) => setCepValue(e.target.value)} />
        </Grid>
        <Grid item xs={3}>
          <TextField fullWidth={true} label="Número" variant="standard" value={numberValue} onChange={(e) => setNumberValue(e.target.value)} />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="state-select-label">Estado</InputLabel>
            <Select
              labelId="state-select-label"
              id="state-select"
              value={stateValue}
              label="Estado"
              onChange={(e) => setStateValue(e.target.value)}
            >
              <MenuItem value="TesteEstado">Exemplo</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="city-select-label">Cidade</InputLabel>
            <Select
              labelId="city-select-label"
              id="city-select"
              value={cityValue}
              label="Cidade"
              onChange={(e) => setCityValue(e.target.value)}
            >
              <MenuItem value="TesteCidade">Exemplo</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Button onClick={handleSumbit} type="submit" sx={{marginTop: 2}}>Cadastrar</Button>
    </Container>
  );
}