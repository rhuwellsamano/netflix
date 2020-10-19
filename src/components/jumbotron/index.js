import React from 'react';
import {
  Container,
  Inner,
  Item,
  Pane,
  Title,
  SubTitle,
  Image,
} from './styles/jumbotron';

function Jumbotron({ children, direction = 'row', ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbrotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbrotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbrotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbrotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbrotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};

export default Jumbotron;
