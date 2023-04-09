import { ReactNode } from "react"
import Navbar from "../Navbar/Navbar"

type Props = {
    children?: ReactNode,
}
const MainComponent = (props: Props) => {
  return (
    <div>
        <Navbar/>
        {props.children}
    </div>
  )
}
export default MainComponent