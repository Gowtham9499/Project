import { useNavigate } from "react-router-dom";


function About() {
  let navigate = useNavigate()
  function handleClick() {
    navigate(-1)
  }
  return(
    <div>
    <h1>we are providing our service since 2010 </h1>
    <button onClick={handleClick}>previous page</button>
    </div>
  )
}

export default About;