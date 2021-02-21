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
    state: '',
    // mines: 10,
    // difficulty: 0,
  }
  handleClickCell = async (row, col, event) => {
    event.preventDefault()

    const url = `https://minesweeper-api.herokuapp.com/games/${this.state.id}/${
      event.type === 'click' ? 'check' : 'flag'
    }`
    const body = { row, col }
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })

    const game = await response.json()
    this.setState(game)
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
  turnCellIntoPic = (cell, rowIndex, columnIndex) => {
    return (
      <li
        onClick={e => this.handleClickCell(rowIndex, columnIndex, e)}
        onContextMenu={e => this.handleClickCell(rowIndex, columnIndex, e)}
        key={columnIndex}
      >
        {cell}
      </li>
    )
  }

  render() {
    // const minesLeft = this.state.mines === `Mines Left: ${this.state.mines}`
    let header = 'Minesweeper'
    if (this.state.state === 'lost') {
      header = 'YOU HIT A BOMB!'
    }
    if (this.state.state === 'won') {
      header = 'YOU WIN!!!'
    }
    // switch (cell){
    // case '_':
    // return
    // break;
    // case 'F':
    // return 'fas fa-flag' color orange,
    // break;
    // case '*':
    // return 'fas fa-bomb'
    // break;
    // case '@':
    // return 'far fa-flag'
    // break;
    // default:
    // }

    return (
      <div>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="content">
          <head>
            <script
              src="https://kit.fontawesome.com/956624ffd4.js"
              crossorigin="anonymous"
            ></script>
          </head>
          <header>
            <h1>{header}</h1>
          </header>
          <section>
            <ul>
              {this.state.board.map((row, rowIndex) =>
                row.map((cell, columnIndex) =>
                  this.turnCellIntoPic(cell, rowIndex, columnIndex)
                )
              )}
            </ul>
          </section>
          {/* <div> {minesLeft} </div> */}
          <footer>
            <button onClick={() => this.handleNewGame()}>New Game</button>
            <select>
              <option>--Difficulty--</option>
              <option>Easy</option>
              <option>Intermediate</option>
              <option>Expert</option>
            </select>
          </footer>
        </div>
      </div>
    )
  }
}
