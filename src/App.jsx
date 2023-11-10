import { useState } from "react"

export const App = () => {
  const [isButtonHover, setIsButtonHover] = useState(false)

  return <button
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
    style prop example
  </button >
}
