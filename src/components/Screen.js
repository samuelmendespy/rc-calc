import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"
import { Textfit } from "react-textfit"

  const Screen = () => {
    const { calc } = useContext(CalcContext);
    
      return (
        <Textfit className="screen">012345689</Textfit>
      )
  }

export default Screen