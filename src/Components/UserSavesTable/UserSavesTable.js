import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import AppContext from '../../Context/AppContext'

export default class UserSavesTable extends React.Component {
    static contextType = AppContext
    render() {
    return (
      <Table>
        <Thead>
          <Tr>
            <Th key={'saveName'}>Name</Th>
            <Th key={'states'}>States</Th>
            <Th key={'modified'}>Date Modified</Th>
          </Tr>
        </Thead>
        <Tbody>
            {this.context.userSaves.map((save, index) => {
            const formatDate = (dateString) => {
            const options = { year: "numeric", month: "long", day: "numeric" }
            return new Date(dateString).toLocaleDateString(undefined, options)
            }
            return (
            
                <Tr key={index}>
                <Td><Link to={`/saved-search/${save.save_name}`}>{save.save_name}</Link></Td>
                <Td>
                {save.state_names.replaceAll('"', '').replaceAll('[', '').replaceAll(']', '').replaceAll(',', ', ')}
                </Td>
                <Td>
                {formatDate(save.modified)}
                </Td>
                </Tr>
            )
            })
            }
        </Tbody>
      </Table>
    );
  }
}