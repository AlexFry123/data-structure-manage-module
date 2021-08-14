import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from '~/app/styles/theme'
import '@qonsoll/react-design/dist/styles/styles.css'
import 'antd/dist/antd.less'
import './app/styles/styles.css'
import App from './App'

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
)
