function EditGeneral(props) {
    return (
        <>
            <h2>Edit General</h2>
            <ul>
                {props.person.map((p, index) => (
                    index >= 0 && index < 3 ? 
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

export default EditGeneral