import React, { useState } from 'react';
import { Button, Modal, TextField } from '@mui/material';
import './adminLogin.css';
import {useHistory } from 'react-router-dom'
const LoginModal = () => {
  const history=useHistory()
  const  handleClick =()=>{
    history.push('/admin')
    }
  const [open, setOpen] = useState(true); // Set the initial state of "open" to true

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in...');
  };

  return (
    <div className='hide'>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
        className="login-modal-container"
      >
        <div className="login-modal">
          <h2 id="login-modal-title">Login</h2>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
          />
          <Button variant="contained" onClick={handleClick}>
            Login
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default LoginModal;