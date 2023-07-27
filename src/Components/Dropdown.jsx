import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { DropDownItems } from './pages/DropDownItems';
import './Dropdown.css';


export default function Dropdown() {
  const [click, setClick] = useState(false)

  const handleClick= () => setClick(!click)

  return (
    <>
    <ul onClick={handleClick} className={click? 'dropdown-menu clicked' : 'dropdown-menu'}>
      {DropDownItems.map((value, index) => {
        return (
          <li key = {index}>
            <Link className={value.cName} to={value.path} onClick={() => setClick(false)}>
              {value.title}
            </Link>
          </li>
        )
      })}

    </ul>
    </>
  )
}
