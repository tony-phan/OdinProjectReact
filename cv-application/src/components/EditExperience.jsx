function EditExperience(props) {
    return (
        <>
            <h2>EditExperience</h2>
            <ul>
                {props.person.map((p, index) => (
                    index >= 6 && index < 9 ? 
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

export default EditExperience