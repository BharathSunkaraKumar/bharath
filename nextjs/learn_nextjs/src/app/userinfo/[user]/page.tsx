
const user = async ({params}: {params: {user: string}}) => {
    const {user} = await params
    console.log(user)
    const users = [
        {
            id: 1,
            name: "bharath",
            location: "tirupati"
        },
        {
            id: 2,
            name: "zendaya",
            location: "u.s.a"
        }
    ]
    const findUser = users.find((each:any) => each.id == user)
    console.log(findUser)
    return(
        <h1>user {findUser?.name}</h1>
    )
}

export default user