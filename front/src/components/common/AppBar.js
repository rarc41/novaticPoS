import React from 'react';
import '../../styles/AppBar.css';


const AppBar = () => {
    return (
        <div className="AppBar">
            <h3 className="nameUser">User Name</h3>
            <span ><i class="fas fa-user-circle"></i></span>
        </div>
    );
};

export default AppBar;