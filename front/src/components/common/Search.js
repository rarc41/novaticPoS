import React, {useState} from 'react';
import { Input } from 'reactstrap';
import '../../styles/Search.css'

const Search = ({label}) => {
  return (
    <div className="search-container">
        <i class="fas fa-search"></i><Input type="text" class="form-control" className="input-search" placeholder={"Buscar " + label}/>
    </div>
  );
};

export default Search;