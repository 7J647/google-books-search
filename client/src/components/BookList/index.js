import React from "react";
// import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList(props) {
  return <ul className="list-group">{props.children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem(props) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <img src={props.thumbnail} alt="thumbnail"/>
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{props.title}</h3>
            <p>Authors: {props.authors}</p>
            <p>Description: {props.description}</p>
            <a rel="noreferrer noopener" target="_blank" href={props.link}>
              Go to book!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}