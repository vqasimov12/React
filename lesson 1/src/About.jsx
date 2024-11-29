import Card from "./Card"

Card
const About = () => {
    const users=[
        {
            name:"user1",
            surname:"user1",
            phone:"12345678"
        }
        ,{
            name:"user2",
            surname:"user2",
            phone:"12345678"
        }
        ,{
            name:"user3",
            surname:"user3",
            phone:"12345678"
        }
    ]
  return (
    <div className="w-[90%] h-[800px] flex items-center justify-between bg-white ">
       {users.map((user) => (
          <Card user={user} />
        ))}
    </div>
  )
}

export default About
