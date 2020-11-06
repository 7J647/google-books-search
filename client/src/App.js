import React, { useState } from "react";
import Jumbotron from "./components/Jumbotron";
// import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
// import API from "./utils/API";
// import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";

// import { useEffect } from "react";
// import Search from "./pages/Search";

// import "./App.css";
// import axios from "axios";

function App() {
  return (
    <div>
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
                      // value={recipeSearch}
                      // onChange={handleInputChange}
                      placeholder="Search For a Book"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      // onClick={handleFormSubmit}
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
        </Container>
      
    </div>
  );
}

export default App;

