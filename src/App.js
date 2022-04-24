import { useState, useEffect, useCallback } from 'react'
import blueCandy from './images/blue-candy.png'
import greenCandy from './images/green-candy.png'
import orangeandy from './images/orange-candy.png'
import purpleCandy from './images/purple-candy.png'
import redCandy from './images/red-candy.png'
import yellowCandy from './images/yellow-candy.png'
import blank from './images/blank.png'

import ScoreBoard from './components/ScoreBoard'

const width = 8
const candyColors = [
  blueCandy,
  greenCandy,
  orangeandy,
  purpleCandy,
  redCandy,
  yellowCandy
]

const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([])
  const [squareBeingDragged, setSquareBeingDragged] = useState(null)
  const [squareBeingReplaced, setSquareBeingReplaced] = useState(null)
  const [scoreDisplay, setScoreDisplay] = useState(0)
  const [notification, setNotification] = useState('Start!')

  const checkForColumn = useCallback((numberOfSquaresToCheck, lastIndexToCheck) => {
    for (let i = 0; i <= lastIndexToCheck; i++) {
      const decidedColor = currentColorArrangement[i]
      const column = []

      for (let y = 0; y < numberOfSquaresToCheck; y++) {
        column.push(i + width * y)
      }

      if (column.every(square => currentColorArrangement[square] === decidedColor)) {
        setScoreDisplay((prevScore) => prevScore + numberOfSquaresToCheck)
        column.forEach(square => currentColorArrangement[square] = blank)
        return true
      }
    }
  }, [currentColorArrangement])

  const checkForRow = useCallback((numberOfSquaresToCheck) => {
    const notValidIndexes = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]
    if (numberOfSquaresToCheck >= 4) notValidIndexes.push([5, 13, 21, 29, 37, 45, 53, 62])
    if (numberOfSquaresToCheck === 5) notValidIndexes.push([4, 12, 20, 28, 36, 44, 52, 61])

    for (let i = 0; i < 64; i++) {
      const decidedColor = currentColorArrangement[i]
      const row = []

      for (let y = 0; y < numberOfSquaresToCheck; y++) {
        row.push(i + y)
      }

      if (notValidIndexes.includes(i)) continue
      if (row.every(square => currentColorArrangement[square] === decidedColor)) {
        setScoreDisplay((prevScore) => prevScore + numberOfSquaresToCheck * 10)
        row.forEach(square => currentColorArrangement[square] = blank)
        return true
      }
    }
  }, [currentColorArrangement])

  const checkForColumnOfThree = useCallback(() => checkForColumn(3, 47), [checkForColumn])
  const checkForColumnOfFour = useCallback(() => checkForColumn(4, 39), [checkForColumn])
  const checkForColumnOfFive = useCallback(() => checkForColumn(5, 31), [checkForColumn])
  const checkForRowOfThree = useCallback(() => checkForRow(3), [checkForRow])
  const checkForRowOfFour = useCallback(() => checkForRow(4), [checkForRow])
  const checkForRowOfFive = useCallback(() => checkForRow(5), [checkForRow])

  const moveIntoSquareBelow = useCallback(() => {
    for (let i = 0; i < 55; i++) {
      const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]
      const isFirstRow = firstRow.includes(i)

      if (isFirstRow && currentColorArrangement[i] === blank) {
        let randomNumber = Math.floor(Math.random() * candyColors.length)
        currentColorArrangement[i] = candyColors[randomNumber]
      }

      if ((currentColorArrangement[i + width]) === blank) {
        currentColorArrangement[i + width] = currentColorArrangement[i]
        currentColorArrangement[i] = blank
      }
    }
  }, [currentColorArrangement])

  const clearNotificationState = () => setTimeout(() => setNotification(''), 2000)

  const dragStart = (e) => setSquareBeingDragged(e.target)
  const dragDrop = (e) => setSquareBeingReplaced(e.target)
  const dragEnd = () => {
    const squareBeingDraggedId = parseInt(squareBeingDragged?.getAttribute('data-id'))
    const squareBeingReplacedId = parseInt(squareBeingReplaced?.getAttribute('data-id'))

    currentColorArrangement[squareBeingReplacedId] = squareBeingDragged?.getAttribute('src')
    currentColorArrangement[squareBeingDraggedId] = squareBeingReplaced?.getAttribute('src')

    const validMoves = [
      squareBeingDraggedId - 1, squareBeingDraggedId - width,
      squareBeingDraggedId + 1, squareBeingDraggedId + width,
    ]
    const validMove = validMoves.includes(squareBeingReplacedId)

    const isAColumnOfFive = checkForColumnOfFive()
    const isARowOfFive = checkForRowOfFive()
    const isAColumnOfFour = checkForColumnOfFour()
    const isARowOfFour = checkForRowOfFour()
    const isAColumnOfThree = checkForColumnOfThree()
    const isARowOfThree = checkForRowOfThree()

    if (squareBeingReplacedId && validMove
      && (isARowOfThree || isARowOfFour || isARowOfFive || isAColumnOfThree || isAColumnOfFour || isAColumnOfFive)) {
        setSquareBeingDragged(null)
        setSquareBeingReplaced(null)
        if (isAColumnOfFive || isARowOfFive) {
          setNotification('Good job!')
          clearNotificationState()
        }
      } else {
        currentColorArrangement[squareBeingReplacedId] = squareBeingReplaced?.getAttribute('src')
        currentColorArrangement[squareBeingDraggedId] = squareBeingDragged?.getAttribute('src')
        setCurrentColorArrangement([...currentColorArrangement])
      }
  }

  const createBoard = () => {
    const randomColorArrangement = []
    for (let i = 0; i< width * width; i++) {
      const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
      randomColorArrangement.push(randomColor)
    }
    setCurrentColorArrangement(randomColorArrangement)
  }

  useEffect(() => {
    clearNotificationState()
    createBoard()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfFive()
      checkForRowOfFive()
      checkForColumnOfFour()
      checkForRowOfFour()
      checkForColumnOfThree()
      checkForRowOfThree()
      moveIntoSquareBelow()
      setCurrentColorArrangement([...currentColorArrangement])
    }, 100)
    return () => clearInterval(timer)
  }, [
    checkForColumnOfThree, checkForColumnOfFour, checkForColumnOfFive,
    checkForRowOfThree, checkForRowOfFour, checkForRowOfFive,
    moveIntoSquareBelow, currentColorArrangement,
  ])

  return (
    <div className="App">
      <ScoreBoard score={scoreDisplay} />
      <div className="game">
        {currentColorArrangement.map((candyColor, index) => (
          <img
            key={index}
            src={candyColor}
            alt={candyColor}
            data-id={index}
            draggable
            onDragStart={dragStart}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => e.preventDefault()}
            onDragLeave={(e) => e.preventDefault()}
            onDrop={dragDrop}
            onDragEnd={dragEnd}
            onClick={() => console.log(index)}
          />
        ))}
          {notification && (
            <div className="notification_container">
              <p className="notification">
                {notification}
              </p>
            </div>
          )}
      </div>
    </div>
  );
}

export default App;
