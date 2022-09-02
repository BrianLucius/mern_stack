import React from 'react'
import styled from 'styled-components';
import StyledBox from './StyledBox'

const BoxRender = (props) => {
const StyledFlex = styled.div `
  display: flex;
  `;

  return (
    <div>
    <StyledFlex>
      { props.boxColor.map( (color, i) => 
          <StyledBox key={i} bgColor={ color }/>)}
    </StyledFlex>
    </div>
  )
}

export default BoxRender