import * as React from 'react';
import styled from 'styled-components';
import Size from './Size/Size';
import state from '@state';
import Component from './Component/Component';

const Preview = styled.div`
  flex: 1;
  background: radial-gradient(#f7f7f7 15%, transparent 16%) 0 0, radial-gradient(#ececec 15%, transparent 16%) 8px 8px,
    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px,
    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 8px 9px;
  background-color: rgb(0, 0, 0, 0.01);
  background-size: 16px 16px;
  position: relative;
  transform: translateZ(0);
  display: flex;
`;

const CenterComponent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default () => {
  const component = state.state.components[state.state.router.componentId];
  return (
    <Preview>
      <Size component={component.root} />
      <CenterComponent>
        <Component component={component.root} />
      </CenterComponent>
    </Preview>
  );
};