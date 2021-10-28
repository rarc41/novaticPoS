import React, {useState} from "react";
import '../../styles/Navbar.css';

const Navbar = ({changeSection}) => {
  const options = [
    { name: "productos", icon: "fas fa-store" },
    { name: "ventas", icon: "fas fa-chart-line" },
    { name: "admin", icon: "fas fa-users-cog" },
    { name: "login", icon: "fas fa-sign-out-alt" },
  ];

  const [active, setActive] = useState(false)

  const handleClickToggle = () => {
      setActive(!active)
  }
  return (
    <div className="container-nav">
      <div className={`navigation ${active?'active':''}`}>
        <ul>
          {options.map((option) => (
            <li onClick={()=>changeSection(option.name)} key={options.indexOf(option)}>
              <a href="#/">
                <span className="icon">
                  <i className={option.icon}></i>
                </span>
                <span className="title">{option.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={`toggle ${active?'active':''}`} onClick={handleClickToggle}></div>
    </div>
  );
};

export default Navbar;
