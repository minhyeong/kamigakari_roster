import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default class MainStatus extends React.Component {
  #rows = null;
  constructor(props) {
    super(props);
    this.#updataStatus();
  }

  #updataStatus = () => {
    this.#rows = [
      this.#createData("種族補正", 0, 0, 0, 0, 0),
      this.#createData("職業補正", 0, 0, 0, 0, 0),
      this.#createData("装備補正", 0, 0, 0, 0, 0),
      this.#createData("タレント補正", 0, 0, 0, 0, 0),
      this.#createData("戦闘地", 0, 0, 0, 0, 0),
      this.#createData("", "命中", "回避", "発動", "抵抗", "看破"),
    ];
  };

  #createData = (name, STR, DEX, INT, SPR, LUK) => {
    return {
      name,
      STR,
      DEX,
      INT,
      SPR,
      LUK,
    };
  };

  render = () => {
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
              {this.#rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.STR}</TableCell>
                  <TableCell align="right">{row.DEX}</TableCell>
                  <TableCell align="right">{row.INT}</TableCell>
                  <TableCell align="right">{row.SPR}</TableCell>
                  <TableCell align="right">{row.LUK}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  };
}
