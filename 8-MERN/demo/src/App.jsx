import './App.css'
import style from "./myStyle.module.css"
import Demo from './components/Demo'
import Random from './components/Random'
import Sample from './components/Sample'

function App() {
  // js code
  const subject = "REACT"
  const description = "REACT is a JS front end library"
  const handleClick = () => {
    alert(`Button Clicked`)
  }
  const handleAdd = (name) => {
    console.log(name);

  }

  const name = "FARSANA PH"
  const location = "Pattambi"
  const company = "Luminar"

  

  return (
    // html code
    <>

      {/* inline */}
      <h1 style={{ color: 'red' }} >This is inline</h1>

      {/* external - in App.css */}
      <h1 className="welcome">This is external</h1>

      {/* module.css  */}
      <h1 className={style.wel}>This is from module.css</h1>

      {/* js code variable calling within {} */}
      <h2>In {subject} , JS variables is called within curly braces</h2>
      <p>{description}</p>
      <button onClick={handleClick}>Click Me</button>
      <br /><br />
      <button onClick={() => handleAdd("Farsana")}>Click Here</button>

      {/*imported components then used in main page  */}
      {/*data sharing from parent to child */}
      <Demo xy={name} loc={location} />
      <Random comp={company} />
      <Sample xy={name} comp={company} />
    </>
  )
}

export default App
