import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import AppContext from '../../Context/AppContext'

export default class TableExample extends React.Component {
    static contextType = AppContext
    render() {
    return (
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>States</Th>
            <Th>Date Modified</Th>
          </Tr>
        </Thead>
        <Tbody>
            {this.context.userSaves.map(save => {
            const formatDate = (dateString) => {
            const options = { year: "numeric", month: "long", day: "numeric" }
            return new Date(dateString).toLocaleDateString(undefined, options)
            }
            return (
            
                <Tr>
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



            {/* {this.context.userSaves.map(save => {
                return(
                    <Tr>
                        <Td>{save.save_name}</Td>
                        <Td>{save.modified}</Td>
                        <Td>{save.state_names}</Td>
                    </Tr>
                )
            })} */}
        </Tbody>
      </Table>
    );
  }
}

<Tr>
    <Td>save name</Td>
    <Td>modified</Td>
    <Td>states</Td>
</Tr>