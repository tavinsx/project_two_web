import React, { useState } from "react";
import { TextField, Button, Stack, Paper } from "@mui/material";

export default function UserForm({ onAddUser }) {
  const [form, setForm] = useState({ nome: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nome || !form.email) return;
    onAddUser(form);
    setForm({ nome: "", email: "" });
  };

  return (
    <Paper sx={{ p: 3 }}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Nome"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained">
            Cadastrar
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}
