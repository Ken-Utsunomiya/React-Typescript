import React from "react"
import { useState } from "react"

const users = [
  {name: 'Ken', age: 20},
  {name: 'Kenny', age: 20},
  {name: 'Kent', age: 20},
]

const UserSearch: React.FC = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useState<{ name: string, age: number} | undefined>()

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name
    })
    setUser(foundUser)
  }

  return (
    <div>
      <h3>User Search</h3>
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={onClick}>Find User</button>
      <div>
        { user && user.name }
        { user && user.age }
      </div>
    </div>
  )
}

// interface User {
//   name: string
//   age: number
// }
// interface UserSearchProps {
//   users: User[]
// }

// interface UserSearchState {
//   name: string
//   user: User | undefined
// }

// class UserSearch extends React.Component<UserSearchProps> {
//   state: UserSearchState = {
//     name: '',
//     user: undefined
//   }

//   onClick = () => {
//     const foundUser = this.props.users.find((user) => {
//       return user.name === this.state.name
//     })
    
//     this.setState({ user: foundUser })
//   }

//   render () {
//     const { name, user } = this.state

//     return (
//       <div>
//         <h3>User Search</h3>
//         <input value={name} onChange={(e) => this.setState({name: e.target.value})}/>
//         <button onClick={this.onClick}>Find User</button>
//         <div>
//           { user && user.name }
//           { user && user.age }
//         </div>
//       </div>
//     )
//   }
// }

export default UserSearch
