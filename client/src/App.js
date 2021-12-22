import Container from "react-bootstrap/Container";
import BookList from './components/BookList'
import Form from "./components/Form";
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache : new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Container className="py-3 mt-3">
      <h1 className="text-center text-info mb-3">My book</h1>
      <hr />
      <Form />
      <hr/> 
      <BookList />
    </Container>
    </ApolloProvider>
  );
}

export default App;
