import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Routes from './routes/Routes.jsx';
import { Box, Container } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <Container
    maxWidth="xl"
    sx={{
      padding: '0',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
  >
     <RouterProvider router={Routes} />
     </Container>

  </React.StrictMode>,
)
