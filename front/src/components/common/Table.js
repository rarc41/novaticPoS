import React from 'react'
import '../../styles/Table.css';

const Table = ({head, content}) => {
    return (
        <div>
            <table>
                <tr>
                    {head.map(data => <th>{data.name}</th>)}
                </tr>
                {content.map(row => 
                <tr>
                    {head.map(data => <td>{row[data.value]}</td>)}
                    <td>
                        boton
                    </td>
               </tr>
               )}
            </table>
        </div>
    )
}

export default Table
