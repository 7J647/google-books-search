import React from "react";

import { Container, Row, Col } from "../Grid";

// BookList renders a bootstrap list item
export function BookList(props) {
  return <ul className="list-group">{props.children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the google books api call
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
          <Col size="xs-2 sm-1">
          <button type="button" class="btn btn-danger">Save</button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
