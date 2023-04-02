import { useNavigate } from 'react-router-dom'
import { Column, useTable } from 'react-table'
import {Ticket} from '../../interfaces/Ticket'
import { parseState } from '../../utils/constants'

const TicketsTable = ({columns, data}:{columns:Array<Column>, data:Array<Ticket>}) => {
    const navigate = useNavigate()
    const tableInstance = useTable({ columns, data})
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = tableInstance

  return (
    <table className='w-3/5 m-auto border-1 border-primary' {...getTableProps()}>
            <thead>
              {// Loop over the header rows
              headerGroups.map(headerGroup => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()} className='bg-black text-primary'>
                  {// Loop over the headers in each row
                  headerGroup.headers.map(column => (
                    // Apply the header cell props
                    <th className='text-left p-2' {...column.getHeaderProps()}>
                      {// Render the header
                      column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            {/* Apply the table body props */}
            <tbody {...getTableBodyProps()}>
              {// Loop over the table rows
              rows.map(row => {
                // Prepare the row for display
                prepareRow(row)
                
                return (
                  // Apply the row props
                  <tr onClick={()=>navigate(`${row.values.id}`)} className='bg-primary-light font-semibold cursor-pointer hover:bg-primary' {...row.getRowProps()}>
                    {// Loop over the rows cells
                    row.cells.map(cell => {
                      // Apply the cell props
                      if(cell.column.id==="state"){
                        console.log(cell)
                        return <td className={`pl-2 font-bold bg-${cell.value}`} >{parseState(cell.value)}</td>
                      }
                      return (
                        <td className='p-2' {...cell.getCellProps()}>
                          {// Render the cell contents
                          cell.render('Cell')}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
  )
}

export default TicketsTable