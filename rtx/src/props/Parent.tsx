import { ChildAsFC } from './Child'

const Parent = () => {
  return (
    <ChildAsFC color='red' onClick={() => console.log('Clicked')}>
      Hiiiiii
    </ChildAsFC>
  )
}

export default Parent
