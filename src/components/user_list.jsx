import React from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

export default function UserList({ users }) {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Usuários Cadastrados
      </Typography>
      <List>
        {users.length === 0 && (
          <ListItem>
            <ListItemText primary="Nenhum usuário cadastrado." />
          </ListItem>
        )}
        {users.map((user, idx) => (
          <ListItem key={idx} divider>
            <ListItemText
              primary={user.nome}
              secondary={user.email}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
