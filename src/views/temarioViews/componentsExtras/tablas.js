import React from 'react'
import { Table } from 'reactstrap'

const Example = (props) => {
  return (
    <Table bordered>
      <tbody>
        <tr>
          <th colSpan={2}>FRASES DE CORTESÍA</th>
        </tr>

        <tr>
          <td>
            <p>Perm'tame un monento porfavor</p>
          </td>
          <td>Jacob</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default Example
