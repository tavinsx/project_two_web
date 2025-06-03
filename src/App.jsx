import React, { useState, useEffect } from "react";
import { Container, Tabs, Tab, Box } from "@mui/material";
import UserForm from "./components/user_form";
import UserList from "./components/user_list";

function App() {
  const [tab, setTab] = useState(0);
  const [users, setUsers] = useState([]);

  // Carrega usuários do localStorage ao iniciar
  useEffect(() => {
    const saved = localStorage.getItem("users");
    if (saved) setUsers(JSON.parse(saved));
  }, []);

  // Atualiza localStorage sempre que users mudar
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleAddUser = (user) => {
    setUsers([...users, user]);
    setTab(1); // Vai para a aba de listagem após cadastro
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Tabs value={tab} onChange={(_, v) => setTab(v)} centered>
        <Tab label="Cadastro de Usuário" />
        <Tab label="Usuários Cadastrados" />
      </Tabs>
      <Box sx={{ mt: 3 }}>
        {tab === 0 && <UserForm onAddUser={handleAddUser} />}
        {tab === 1 && <UserList users={users} />}
      </Box>
    </Container>
  );
}

export default App;
