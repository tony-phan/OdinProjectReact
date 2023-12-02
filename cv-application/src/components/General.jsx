function General(props) {
    return (
        <>
            <h2>General</h2>
            <p>Name: {props.person[0].name}</p>
            <p>Phone: {props.person[1].phone}</p>
            <p>Email: {props.person[2].email}</p>
            <button onClick={props.handleEdit}>Edit</button>
        </>
    )
}

export default General