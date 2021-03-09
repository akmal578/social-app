import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { AuthProvider } from './context/auth';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NavBar from './components/NavBar';
import AuthRoute from './util/AuthRoute';
import SinglePost from './pages/SinglePost';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <NavBar />
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path="/posts/:postId" component={SinglePost} />
        </Container>
      </Router>
    </AuthProvider>
  );
};

export default App;
