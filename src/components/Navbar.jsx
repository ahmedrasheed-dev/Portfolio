import dayjs from "dayjs";
import { navlinks , navIcons } from "../constants/index"
import React from 'react'

    


export const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="/images/logo.svg" alt="logo" />
            <p className="text-bold" >Ahmed's Portfolio</p>

            <ul>
                {navlinks.map(({id , name})=>(
                <li key={id}>
                    <p>{name}</p>
                    </li>
                ))}
            </ul>
        </div>
        
<div>
    <ul>
        {navIcons.map(({id , img})=>(
            <li key={id}>
                <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
        )
        
        )}
    </ul>
    <time dateTime="">{dayjs().format("ddd MMM D h:mm A")}</time>
</div>

    </nav>
  )
}
