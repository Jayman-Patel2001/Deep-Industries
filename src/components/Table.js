import React from "react";
import { useTable } from "react-table";

const Table = (props) => {
  const data = React.useMemo(
    () => [
      {
        col1: props.row11,
        col2: props.row12,
      },
      {
        col1: props.row21,
        col2: props.row22,
      },
      {
        col1: props.row31,
        col2: props.row32,
      },
      {
        col1: props.row41,
        col2: props.row42,
      },
      {
        col1: props.row51,
        col2: props.row52,
      },
      {
        col1: props.row61,
        col2: props.row62,
      },
      {
        col1: props.row71,
        col2: props.row72,
      },
      {
        col1: props.row81,
        col2: props.row82,
      },
      {
        col1: props.row91,
        col2: props.row92,
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "TEST",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "DESCRIPTION",
        accessor: "col2",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <>
      <table
        {...getTableProps()}
        className="mt-4"
        style={{
          border: "solid 2px gray",
        }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 1px gray",
                    background: "whitesmoke",
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: "10px",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                        background: "rgba(211, 211, 211, 0.486)",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
