function Experience(props) {
    return (
        <>
            <h2>Experience</h2>
            <p>Company: {props.person[6].companyOne} - {props.person[6].position} </p>
            <p>Company: {props.person[7].companyTwo} - {props.person[7].position}</p>
            <p>Company: {props.person[8].companyThree} - {props.person[8].position}</p>
            <button onClick={props.handleEdit}>Edit</button>        
        </>
    )
}

export default Experience