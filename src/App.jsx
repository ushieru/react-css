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
  return <>
    <button className="btn">
      css vanila
    </button>
    <button className={btn}>
      css module
    </button>
    <Button>
      styled component
    </Button>
    <button
      className='rounded border border-transparent hover:border-[#646cff] font-medium px-[0.6em] py-[1.2em] bg-[#1a1a1a] transition-[border-color(0.25s)]'
    >
      tailwind
    </button>
  </>
}
