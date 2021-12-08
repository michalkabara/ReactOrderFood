import React from 'react'
import styled from 'styled-components'

const Button = ({children, buttonText, backgroundColor = '#FF8A65', onClick}) => {
  return (
    <StyledButton style={{backgroundColor: backgroundColor}} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  border-radius: 100px;
  padding: 10px 30px;
  gap: 15px;
  color: white;
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  cursor: pointer;
`

export default Button
