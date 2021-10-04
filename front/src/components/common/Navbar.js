import React, {useState} from "react";
import '../../styles/Navbar.css';

const Navbar = () => {
  const options = [
    { name: "vendores", icon: "fas fa-id-card" },
    { name: "productos", icon: "fas fa-store" },
    { name: "Ventas", icon: "fas fa-chart-line" },
    { name: "Admin", icon: "fas fa-users-cog" },
    { name: "Sign out", icon: "fas fa-sign-out-alt" },
  ];

  const [active, setActive] = useState(false)

  const handleClickToggle = () => {
      setActive(!active)
  }
  return (
    <div className="container">
      <div className={`navigation ${active?'active':''}`}>
        <ul>
          {options.map((option) => (
            <li>
              <a href="#">
                <span class="icon">
                  <i class={option.icon}></i>
                </span>
                <span class="title">{option.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div class={`toggle ${active?'active':''}`} onClick={handleClickToggle}></div>
    </div>
  );
};

export default Navbar;
