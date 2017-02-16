import React, { PropTypes } from 'react'
import cx from 'classnames'
import '../style'

export default function Table (props) {

  const className = cx([
    'table',
    `table-${props.type}`,
    props.className
  ])

  function renderTableHead () {
    if (!props.showHeader) return null
    return <thead><tr>{
      props.columns.map((col, index) => (
        <td key={col.key === undefined ? index: col.key}>
          {col.title || ''}
        </td>
      ))
    }</tr></thead>
  }

  function renderTableBody () {
    return <tbody>{
      props.dataSource.map((colData, rowIndex) => (
        <tr key={colData.key === undefined ? rowIndex : colData.key}>{
          props.columns.map((col, colIndex) => (
            <td key={col.key === undefined ? colIndex : col.key}>{
              col.render ?
                col.render(colData[col.key], rowIndex, colIndex) :
                colData[col.key]
            }</td>
          ))
        }</tr>
      ))
    }</tbody>
  }
  return (
    <table className={className}>
      {renderTableHead()}
      {renderTableBody()}
    </table>
  )
}

Table.defaultProps = {
  type: 'striped',
  showHeader: true,
  dataSource: [],
  columns: []
}
Table.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['striped', 'bordered']),
  showHeader: PropTypes.bool,
  dataSource: PropTypes.array,
  columns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).required,
    render: PropTypes.func
  }))
}