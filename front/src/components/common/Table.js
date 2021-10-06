import React from 'react'
import { Button } from 'reactstrap';
import '../../styles/Table.css';

const Table = ({head, content}) => {
    return (
        <div>
            <table>
                <tr>
                    {head.map(data => <th>{data.name}</th>)}
                    <th></th>
                </tr>
                {content.map(row => 
                <tr>
                    {head.map(data => <td>{row[data.value]}</td>)}
                    <td>
                        <Button color="btn btn-success">Actualizar <i class="far fa-edit"></i></Button>
                    </td>
               </tr>
               )}
            </table>
        </div>
    )
}

export default Table
