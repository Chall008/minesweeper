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

  render() {
    // const minesLeft = this.state.mines === `Mines Left: ${this.state.mines}`
    let header = 'Minesweeper'
    if (this.state.state === 'lost') {
      header = 'Oh, no... You hit a bomb!'
    }
    if (this.state.state === 'won') {
      header = 'CONGRATS! YOU HAVE WON!!!'
    }

    return (
      <div>
        <header>
          <h1>{header}</h1>
        </header>
        <section>
          <ul>
            {this.state.board.map((row, rowIndex) =>
              row.map((cell, columnIndex) => (
                <li
                  onClick={e => this.handleClickCell(rowIndex, columnIndex, e)}
                  onContextMenu={e =>
                    this.handleClickCell(rowIndex, columnIndex, e)
                  }
                  key={columnIndex}
                >
                  {cell}
                </li>
              ))
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
            <option>Hard</option>
          </select>
        </footer>
      </div>
    )
  }
}
