import { useState } from "react"
import styled from "styled-components"
import { btn } from './style.module.css'

const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  
  &:hover {
    border-color: #646cff;
  }
`

export const App = () => {
  const [isButtonHover, setIsButtonHover] = useState(false)

  return <>
    <button className="btn">
      css vanila
    </button>
    <button className={btn}>
      css module
    </button>
    <button
      onMouseEnter={() => setIsButtonHover(true)}
      onMouseLeave={() => setIsButtonHover(false)}
      style={{
        borderRadius: '8px',
        border: '1px solid transparent',
        padding: '0.6em 1.2em',
        fontSize: '1em',
        fontWeight: 500,
        fontFamily: 'inherit',
        backgroundColor: '#1a1a1a',
        cursor: 'pointer',
        transition: 'border - color 0.25s',
        borderColor: isButtonHover ? '#646cff' : 'transparent',
      }}
    >
      style prop
    </button >
    <Button>
      styled component
    </Button>
    <button
      className='rounded-lg border border-transparent hover:border-[#646cff] font-medium py-[0.6em] px-[1.2em] bg-[#1a1a1a] transition-[border-color(0.25s)]'
    >
      tailwind
    </button>
  </>
}
