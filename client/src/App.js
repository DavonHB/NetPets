import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Profile from './pages/Profile';
import NoMatch from './pages/NoMatch';

import Store from './pages/Store';
import Users from './pages/Users';
import Login from './pages/Login';
import Register from './pages/Signup';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Loader from 'react-loaders';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  
  return (
    <>
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Navbar index />
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Register />} 
              />
              <Route 
                path="/profile" 
                element={<Profile />} 
              />
              <Route 
                path="/store" 
                element={<Store />} 
              />
              <Route 
                path="/users" 
                element={<Users />} 
              />
              
              <Route 
                path="*" 
                element={<NoMatch />} 
              />
            </Routes>
          </div>
          
        </div>
      </Router>
    </ApolloProvider>
    <Loader type="pacman" />
    </>
  )
}

export default App;
