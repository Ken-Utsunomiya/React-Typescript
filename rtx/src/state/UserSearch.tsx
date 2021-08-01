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

export default UserSearch
