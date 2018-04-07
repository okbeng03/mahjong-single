import { Game } from 'mahjong'
import dispatchs from './dispatchs'

const game = new Game()
game.addPlayer(1, '小明', false)
game.addPlayer(1, '小红', true)
game.addPlayer(1, '小花', true)
game.addPlayer(1, '小绿', true)
game.subscribe(function (type, data) {
  type = type.split(':')
  const namespace = type[0]
  const method = type[1]

  dispatchs[namespace][method](this, data)
})

export default game
