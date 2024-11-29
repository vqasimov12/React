import React from 'react'

const Card = ({user}) => {
  return (
    <div className="border-solid border-gray-500 border-[1px] p-5 rounded-[4px] bg-[blue] text-[white] gap-[8px]">
      <h3>Name:   {user.name}</h3>
      <p>Surname: {user.surname}</p>
      <p>Phone:   {user.phone}</p>
    </div>
  )
}

export default Card