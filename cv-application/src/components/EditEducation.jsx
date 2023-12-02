function EditEducation(props) {
    return (
        <>
            <h2>Edit Education</h2>
            <ul>
                {props.person.map((p, index) => (
                    index >= 3 && index < 6 ? 
                        <li key={p.id}>
                            <input value={Object.values(p)[0]} onChange={e => {
                            props.handleItemChange(p.id, e)
                            }} />
                        </li> : null
                ))}
            </ul>
            <button onClick={props.handleEdit}>Submit</button>
        </>
    )
}

export default EditEducation