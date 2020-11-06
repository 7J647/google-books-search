import React, { useState } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { BookList, BookListItem } from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";

import { useEffect } from "react";
// import Search from "./pages/Search";
// import API from "./utils/API";

// import "./App.css";
// import axios from "axios";

function App() {

  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");

  useEffect(()=>{
    API.searchTerms("Ian Fleming").then(response=>
      console.log(response.data))
  },[])

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setBookSearch(value);
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.searchTerms(bookSearch)
      .then(res => setBooks(res.data.items))
      .catch(err => console.log(err));
  };


  return (
    <div>
     <Nav/>
      <Jumbotron />
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="RecipeSearch"
                      value={bookSearch}
                      onChange={handleInputChange}
                      placeholder="Search For a Book"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                        Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">
            {!books.length ? (
              <h1 className="text-center">No Books to Display</h1>
            ) : (
              <BookList>
                {books.map(book => {
                  return (
                    <BookListItem
                      key={book.volumeInfo.title}
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors}
                      description={book.volumeInfo.description}
                      link={book.volumeInfo.infoLink}
                      thumbnail={book.volumeInfo.imageLinks.thumbnail}
                    />
                  );
                })}
              </BookList>
            )}
          </Col>
        </Row>
        </Container>
      
    </div>
  );
}

export default App;

