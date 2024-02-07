import { TableProps } from './types';
import './Table.scss';
import Skeleton from 'react-loading-skeleton';

const Table = <T extends object> ({columns, data, extendClassname, isLoading = false}: TableProps<T>) => {
  return (
    isLoading ?
      <div className="table__skeleton">
        <Skeleton height={40} className="table__skeleton--th"/>
        <Skeleton height={30} count={4} className="table__skeleton--td"/>
      </div> :
      data && data.length > 0 ?
        <div className="table-container">
          <table className={`table ${extendClassname ?? ''}`}>
            <thead className="table__thead">
            <tr>
              {columns.map ((column, index) => {
                return (<th key={index} className="table__th">{column}</th>)
              })}
            </tr>
            </thead>
            <tbody className="table__tbody">
            {
              data.map ((rowData, index) => (
                <tr key={index}>
                  {Object.entries (rowData).map (([_, v], index) => (
                      <td key={index} className="table__td">{v}</td>
                    )
                  )}
                </tr>
              ))
            }
            </tbody>
          </table>
        </div> :
        <div className="table__no-data">
          <h2>No data</h2>
        </div>
  )
}

  export default Table;
