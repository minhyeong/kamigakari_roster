import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MainStatus = (props) => {
  const createData = (name, str, dex, int, spr, luk) => {
    return {
      name,
      str,
      dex,
      int,
      spr,
      luk,
    };
  };
  let [rows, setRow] = React.useState([
    createData("種族補正", 0, 0, 0, 0, 0),
    createData("職業補正", 0, 0, 0, 0, 0),
    createData("装備補正", 0, 0, 0, 0, 0),
    createData("タレント補正", 0, 0, 0, 0, 0),
    createData("戦闘地", 0, 0, 0, 0, 0),
    createData("", "命中", "回避", "発動", "抵抗", "看破"),
  ]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ width: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right">体力</TableCell>
              <TableCell align="right">敏捷</TableCell>
              <TableCell align="right">知性</TableCell>
              <TableCell align="right">精神</TableCell>
              <TableCell align="right">幸運</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.str}</TableCell>
                <TableCell align="right">{row.dex}</TableCell>
                <TableCell align="right">{row.int}</TableCell>
                <TableCell align="right">{row.spr}</TableCell>
                <TableCell align="right">{row.luk}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MainStatus;
