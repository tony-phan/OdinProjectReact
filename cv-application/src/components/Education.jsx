function Education(props) {
    return (
        <>
            <h2>Education</h2>
            <p>School: {props.person[3].school}</p>
            <p>Area of Study: {props.person[4].areaOfStudy}</p>
            <p>Year of Study: {props.person[5].yearOfStudy}</p>
            <button onClick={props.handleEdit}>Edit</button>
        </>
    )
}

export default Education