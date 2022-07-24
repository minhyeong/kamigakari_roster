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
    this.state = { test: "test" };
    this.#initStatus();
  }

  updateRaceData = (status) => {
    if (status === "None") {
      this.#rows[0].str = 0;
      this.#rows[0].dex = 0;
      this.#rows[0].int = 0;
      this.#rows[0].spr = 0;
      this.#rows[0].luk = 0;
    } else {
      this.#rows[0].str = status["体"];
      this.#rows[0].dex = status["敏"];
      this.#rows[0].int = status["知"];
      this.#rows[0].spr = status["精"];
      this.#rows[0].luk = status["幸"];
    }
  };

  #initStatus = () => {
    this.#rows = [
      this.#createData("種族補正", 0, 0, 0, 0, 0),
      this.#createData("職業補正", 0, 0, 0, 0, 0),
      this.#createData("装備補正", 0, 0, 0, 0, 0),
      this.#createData("タレント補正", 0, 0, 0, 0, 0),
      this.#createData("戦闘地", 0, 0, 0, 0, 0),
      this.#createData("", "命中", "回避", "発動", "抵抗", "看破"),
    ];
  };

  #createData = (name, str, dex, int, spr, luk) => {
    return {
      name,
      str,
      dex,
      int,
      spr,
      luk,
    };
  };

  render = () => {
    return (
      <>
        {this.state.test}
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
}
