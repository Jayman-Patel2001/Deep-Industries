import React from "react";
import "../styles/Product1.css";
import ProductList from "./ProductList";
import { useTable } from "react-table";
import { Scrollbars } from "react-custom-scrollbars";
import Table from "./Table";
import { NavLink } from "react-router-dom";

const Product1 = () => {
  const data = React.useMemo(
    () => [
      {
        col1: "Description",
        col2: "White, hygroscopic pellets",
      },
      {
        col1: "Identify",
        col2: `Na: Passes test, OH: Passes test`,
      },
      {
        col1: "Test solution (10% w/v; water)",
        col2: "The solution is clear and colourless",
      },
      {
        col1: "Assay (NaOH)",
        col2: "NLT 98.0 %",
      },
      {
        col1: "Water-Insoluble matter",
        col2: "NMT 0.01 % NMT 0.01 %",
      },
      {
        col1: "Carbonate (as Na2CO3)",
        col2: "NMT 1.0 %",
      },
      {
        col1: "Chloride (Cl)",
        col2: "NMT 0.005 %",
      },
      {
        col1: "Nitrogen compounds (N)",
        col2: "NNMT 0.0005 %",
      },
      {
        col1: "Phosphate (PO4)",
        col2: "NMT 0.02 %",
      },
      {
        col1: "Silicate (SiO2)",
        col2: "NMT 0.01 %",
      },
      {
        col1: "Sulfate (SO4)",
        col2: "SulfNMT 0.005 %",
      },
      {
        col1: "Aluminium (AI)",
        col2: "NMT 0.002 %",
      },
      {
        col1: "Arsenic (As)",
        col2: "NMT 0.00005 %",
      },
      {
        col1: "Calcium (Ca)",
        col2: "CNMT 0.005 %",
      },
      {
        col1: "Copper (Cu)",
        col2: "NMT 0.0005 %",
      },
      {
        col1: "Iron (Fe)",
        col2: "NMT 0.001 %",
      },
      {
        col1: "Lead (Pb)",
        col2: "NMT 0.0005 %",
      },
      {
        col1: "Nickel (Ni)",
        col2: "NMT 0.001 %",
      },
      {
        col1: "Potassium (K)",
        col2: "NMT 0.05 %",
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
        Header: "SPECIFICATION",
        accessor: "col2",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="product1">
      <ProductList />
      <Scrollbars style={{ width: 900, height: 599 }}>
        <div className="product1_rightSide">
          <div className="title">
            <p>Sodium Hydroxide Pellets</p>
          </div>
          <div className="product1_info">
            <img
              src="https://www.pellets.co.in/images/NaOH-Pellets.jpg"
              alt="product"
            />
            <p>
              We are capable of developing products according to the
              specifications provided by our customers and clients. We are
              selecting best quality raw materials for Sodium Hydroxide Pellets
              and Potassium Hydroxide Pellets as per client's requirements.
            </p>
          </div>

          {/* Table Part */}

          <div className="product1_table">
            <div className="mainTitle">SPECIFICATION (AR/GR GRADE)</div>
            <div className="title1">
              CAUSTIC SODA PELLETS CAS NO: 1310-73-2 NaOH: MW: 40.00
            </div>
            {/* Table Showing */}
            <table
              {...getTableProps()}
              className="mt-4"
              style={{ border: "solid 2px gray" }}
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
            <div className="mainTitle1">SPECIFICATION (LR GRADE)</div>
            <div className="title2">
              CAUSTIC SODA PELLETS CAS NO: 1310-73-2 NaOH: MW: 40.00
            </div>
            {/* 2nd Table Showing */}
            <Table
              row11="Description"
              row12="White, hygroscopic pellets"
              row21="Identify"
              row22="Na: Passes test, OH: Passes test"
              row31="Test solution (10% w/v; water)"
              row32="The solution is clear and colourless"
              row41="Assay (NaOH)"
              row42="NLT 97.0 %"
              row51="Carbonate (as Na2CO3)"
              row52="NMT 2.0 %"
              row61="Chloride (Cl)"
              row62="NMT 0.01 %"
              row71="Sulfate (SO4)"
              row72="SulfNMT 0.005 %"
              row81="Iron (Fe)"
              row82="NMT 0.005 %"
              row91="Heavy metals (as Pb)"
              row92="NMT 0.002%"
            />
            <div className="productInquiry_button">
              <NavLink exact to="/inquiry">
                Inquiry
              </NavLink>
            </div>
          </div>
        </div>
      </Scrollbars>
    </div>
  );
};

export default Product1;
