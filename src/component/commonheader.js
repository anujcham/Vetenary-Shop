import { useNavigate } from "react-router-dom"
import "./common.style.css"

export default function CommonHeader(){
    const navigate = useNavigate();
    return(
        <div className="common-header">
          <p onClick={()=> navigate("/")}>Home</p>
          <p onClick={()=> navigate("/services")}>Services</p>
        </div>
    )
}