import React, {useState} from 'react';
import Navbar from './common/Navbar';

const Main = () => {

    const [section, setSection] = useState('vendedores')
    return (
        <main className="Main">
            <Navbar/>
        </main>
    );
};

export default Main;