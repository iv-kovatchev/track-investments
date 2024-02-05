import { TableProps } from './types';
import './Table.scss';

const Table = <T extends object> ({columns, data, extendClassname}: TableProps<T>) => {
  return (
    <div className='table-container'>
      {
        data && data.length > 0 ?
        <table className={`table ${extendClassname ?? ''}`}>
          <thead className='table__thead' >
            <tr>
              {columns.map ((column, index) => {
                return (<th key={index} className='table__th'>{column}</th>)
              })}
            </tr>
          </thead>
          <tbody className='table__tbody'>
          {
              data.map ((rowData, index) => (
                <tr key={index}>
                  {Object.entries (rowData).map (([_, v], index) => (
                      <td key={index} className='table__td'>{v}</td>
                    )
                  )}
                </tr>
            ))
          }
          </tbody>
        </table> :
        <div className='table__no-data'>
          <h2>No data</h2>
        </div>

      }
    </div>
  )
}

export default Table;
