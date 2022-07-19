import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(calories, fat, carbs, protein) {
  return { calories, fat, carbs, protein };
}

const rows = [
  createData(10, 20, 30, 40),
  createData(10, 20, 30, 40),
  createData(10, 20, 30, 40),
  createData(10, 20, 30, 40),
  createData(10, 20, 30, 40),
  createData("物Ｄ", "魔Ｄ", "行動値", "生命力"),
];

export default class SubStatus extends React.Component {
  render = () => {
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ width: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">物Ｄ</TableCell>
                <TableCell align="right">魔Ｄ</TableCell>
                <TableCell align="right">行動値</TableCell>
                <TableCell align="right">生命力</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  };
}
