import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios';
import { useState } from 'react';

export function Form() {
  const [nameValue, setNameValue] = useState('');
  const [businessNameValue, setBusinessNameValue] = useState('');
  const [identificationValue, setIdentificationValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [streetValue, setStreetValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [cepValue, setCepValue] = useState('');
  const [stateValue, setStateValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [businessSizeValue, setBusinessSizeValue] = useState('');

  const handleSubmit = () => {
    axios.post(`https://61a1a2036c3b400017e69d3e.mockapi.io/clients/`, {
      nameValue,
      businessNameValue,
      identificationValue,
      emailValue,
      phoneValue,
      businessSizeValue,
      streetValue,
      numberValue,
      cepValue,
      stateValue,
      cityValue
    })
    setNameValue('')
    setBusinessNameValue('')
    setIdentificationValue('')
    setEmailValue('')
    setPhoneValue('')
    setStreetValue('')
    setNumberValue('')
    setCepValue('')
    setStateValue('')
    setCityValue('')
    setBusinessSizeValue('')
  }

  /* const handleSumbit = (e) => {
    e.preventDefault()
    axios({
      method: 'post',
      url: 'https://61a1a2036c3b400017e69d3e.mockapi.io/clients',
      data: {
        name: nameValue,
        businessName: businessValue,
        identification: identificationValue,
        email: emailValue,
        phone: phoneValue,
        businessSize: sizeValue,
        street: streetValue,
        number: numberValue,
        cep: cepValue,
        state: stateValue,
        city: cityValue,
      }
    })
    setNameValue('')
    setBusinessValue('')
    setIdentificationValue('')
    setEmailValue('')
    setPhoneValue('')
    setStreetValue('')
    setNumberValue('')
    setCepValue('')
    setStateValue('')
    setCityValue('')
    setSizeValue('')
  } */

  return (
    <Container component="form" sx={{ border: 1, borderRadius: 4, p: 2, boxShadow: 2, width: 800 }}>
      <h1 sx={{ fontSize: 12 }}>Cadastrar</h1>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField autoFocus={true} fullWidth={true} label="Nome" variant="standard" value={nameValue} onChange={(e) => setNameValue(e.target.value)} />
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth={true} label="Nome da Empresa" variant="standard" value={businessNameValue} onChange={(e) => setBusinessNameValue(e.target.value)} />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="size-select-label">Porte</InputLabel>
            <Select
              labelId="size-select-label"
              id="size-select"
              value={businessSizeValue}
              label="Porte"
              onChange={(e) => setBusinessSizeValue(e.target.value)}
            >
              <MenuItem value="small">Pequeno</MenuItem>
              <MenuItem value="medium">Médio</MenuItem>
              <MenuItem value="big">Grande</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth={true} label="CPF/CNPJ" variant="standard" value={identificationValue} onChange={(e) => setIdentificationValue(e.target.value)} />
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
              <MenuItem value='Estado'>Exemplo</MenuItem>
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
              <MenuItem value='Cidade'>Exemplo</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Button onClick={handleSubmit} type="submit" sx={{ marginTop: 2 }}>Cadastrar</Button>
    </Container>
  );
}