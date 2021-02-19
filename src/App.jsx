import React, { Component } from 'react'

export class App extends Component {
  state = {
    board: [
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
    ],
    // mines: 10,
    // difficulty: 0,
  }
  handleClickCell = (row, column) => {
    console.log(`${row}, ${column}`)
  }
  handleNewGame = async () => {
    const response = await fetch(
      'https://minesweeper-api.herokuapp.com/games',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
      }
    )
    const game = await response.json()
    this.setState(game)
  }
  render() {
    return (
      <div>
        <header>
          <h1>Minesweeper</h1>
        </header>
        <section>
          <ul>
            <li onClick={() => this.handleClickCell(0, 0)}>
              {this.state.board[0][0]}
            </li>
            <li onClick={() => this.handleClickCell(0, 1)}>
              {this.state.board[0][1]}
            </li>
            <li onClick={() => this.handleClickCell(0, 2)}>
              {this.state.board[0][2]}
            </li>
            <li onClick={() => this.handleClickCell(0, 3)}>
              {this.state.board[0][3]}
            </li>
            <li onClick={() => this.handleClickCell(0, 4)}>
              {this.state.board[0][4]}
            </li>
            <li onClick={() => this.handleClickCell(0, 5)}>
              {this.state.board[0][5]}
            </li>
            <li onClick={() => this.handleClickCell(0, 6)}>
              {this.state.board[0][6]}
            </li>
            <li onClick={() => this.handleClickCell(0, 7)}>
              {this.state.board[0][7]}
            </li>

            <li onClick={() => this.handleClickCell(1, 0)}>
              {this.state.board[1][0]}
            </li>
            <li onClick={() => this.handleClickCell(1, 1)}>
              {this.state.board[1][1]}
            </li>
            <li onClick={() => this.handleClickCell(1, 2)}>
              {this.state.board[1][2]}
            </li>
            <li onClick={() => this.handleClickCell(1, 3)}>
              {this.state.board[1][3]}
            </li>
            <li onClick={() => this.handleClickCell(1, 4)}>
              {this.state.board[1][4]}
            </li>
            <li onClick={() => this.handleClickCell(1, 5)}>
              {this.state.board[1][5]}
            </li>
            <li onClick={() => this.handleClickCell(1, 6)}>
              {this.state.board[1][6]}
            </li>
            <li onClick={() => this.handleClickCell(1, 7)}>
              {this.state.board[1][7]}
            </li>

            <li onClick={() => this.handleClickCell(2, 0)}>
              {this.state.board[2][0]}
            </li>
            <li onClick={() => this.handleClickCell(2, 1)}>
              {this.state.board[2][1]}
            </li>
            <li onClick={() => this.handleClickCell(2, 2)}>
              {this.state.board[2][2]}
            </li>
            <li onClick={() => this.handleClickCell(2, 3)}>
              {this.state.board[2][3]}
            </li>
            <li onClick={() => this.handleClickCell(2, 4)}>
              {this.state.board[2][4]}
            </li>
            <li onClick={() => this.handleClickCell(2, 5)}>
              {this.state.board[2][5]}
            </li>
            <li onClick={() => this.handleClickCell(2, 6)}>
              {this.state.board[2][6]}
            </li>
            <li onClick={() => this.handleClickCell(2, 7)}>
              {this.state.board[2][7]}
            </li>

            <li onClick={() => this.handleClickCell(3, 0)}>
              {this.state.board[3][0]}
            </li>
            <li onClick={() => this.handleClickCell(3, 1)}>
              {this.state.board[3][1]}
            </li>
            <li onClick={() => this.handleClickCell(3, 2)}>
              {this.state.board[3][2]}
            </li>
            <li onClick={() => this.handleClickCell(3, 3)}>
              {this.state.board[3][3]}
            </li>
            <li onClick={() => this.handleClickCell(3, 4)}>
              {this.state.board[3][4]}
            </li>
            <li onClick={() => this.handleClickCell(3, 5)}>
              {this.state.board[3][5]}
            </li>
            <li onClick={() => this.handleClickCell(3, 6)}>
              {this.state.board[3][6]}
            </li>
            <li onClick={() => this.handleClickCell(3, 7)}>
              {this.state.board[3][7]}
            </li>

            <li onClick={() => this.handleClickCell(4, 0)}>
              {this.state.board[4][0]}
            </li>
            <li onClick={() => this.handleClickCell(4, 1)}>
              {this.state.board[4][1]}
            </li>
            <li onClick={() => this.handleClickCell(4, 2)}>
              {this.state.board[4][2]}
            </li>
            <li onClick={() => this.handleClickCell(4, 3)}>
              {this.state.board[4][3]}
            </li>
            <li onClick={() => this.handleClickCell(4, 4)}>
              {this.state.board[4][4]}
            </li>
            <li onClick={() => this.handleClickCell(4, 5)}>
              {this.state.board[4][5]}
            </li>
            <li onClick={() => this.handleClickCell(4, 6)}>
              {this.state.board[4][6]}
            </li>
            <li onClick={() => this.handleClickCell(4, 7)}>
              {this.state.board[4][7]}
            </li>

            <li onClick={() => this.handleClickCell(5, 0)}>
              {this.state.board[5][0]}
            </li>
            <li onClick={() => this.handleClickCell(5, 1)}>
              {this.state.board[5][1]}
            </li>
            <li onClick={() => this.handleClickCell(5, 2)}>
              {this.state.board[5][2]}
            </li>
            <li onClick={() => this.handleClickCell(5, 3)}>
              {this.state.board[5][3]}
            </li>
            <li onClick={() => this.handleClickCell(5, 4)}>
              {this.state.board[5][4]}
            </li>
            <li onClick={() => this.handleClickCell(5, 5)}>
              {this.state.board[5][5]}
            </li>
            <li onClick={() => this.handleClickCell(5, 6)}>
              {this.state.board[5][6]}
            </li>
            <li onClick={() => this.handleClickCell(5, 7)}>
              {this.state.board[5][7]}
            </li>

            <li onClick={() => this.handleClickCell(6, 0)}>
              {this.state.board[6][0]}
            </li>
            <li onClick={() => this.handleClickCell(6, 1)}>
              {this.state.board[6][1]}
            </li>
            <li onClick={() => this.handleClickCell(6, 2)}>
              {this.state.board[6][2]}
            </li>
            <li onClick={() => this.handleClickCell(6, 3)}>
              {this.state.board[6][3]}
            </li>
            <li onClick={() => this.handleClickCell(6, 4)}>
              {this.state.board[6][4]}
            </li>
            <li onClick={() => this.handleClickCell(6, 5)}>
              {this.state.board[6][5]}
            </li>
            <li onClick={() => this.handleClickCell(6, 6)}>
              {this.state.board[6][6]}
            </li>
            <li onClick={() => this.handleClickCell(6, 7)}>
              {this.state.board[6][7]}
            </li>

            <li onClick={() => this.handleClickCell(7, 0)}>
              {this.state.board[7][0]}
            </li>
            <li onClick={() => this.handleClickCell(7, 1)}>
              {this.state.board[7][1]}
            </li>
            <li onClick={() => this.handleClickCell(7, 2)}>
              {this.state.board[7][2]}
            </li>
            <li onClick={() => this.handleClickCell(7, 3)}>
              {this.state.board[7][3]}
            </li>
            <li onClick={() => this.handleClickCell(7, 4)}>
              {this.state.board[7][4]}
            </li>
            <li onClick={() => this.handleClickCell(7, 5)}>
              {this.state.board[7][5]}
            </li>
            <li onClick={() => this.handleClickCell(7, 6)}>
              {this.state.board[7][6]}
            </li>
            <li onClick={() => this.handleClickCell(7, 7)}>
              {this.state.board[7][7]}
            </li>
          </ul>
        </section>
        <footer>
          <button onClick={() => this.handleNewGame()}>New Game</button>
        </footer>
      </div>
    )
  }
}
