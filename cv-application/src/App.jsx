import { useState } from 'react'
import './App.css'
import General from './components/General'
import EditGeneral from './components/EditGeneral'
import Education from './components/Education'
import EditEducation from './components/EditEducation'
import Experience from './components/Experience'
import EditExperience from './components/EditExperience'

function App() {
  // data: General (name, email, phone number), Education (School, Major, Date of Study), Experience (Company One, Company two, Company three)
  const initialPerson = [
    { name: "John Doe", id: 0 }, 
    { phone: "0123456789", id: 1 }, 
    { email: "johndoe@gmail.com", id: 2 }, 
    { school: "UCLA", id: 3 }, 
    { areaOfStudy: "Computer Science", id: 4 }, 
    { yearOfStudy: "2023", id: 5 }, 
    { companyOne: "AT&T", position: "CEO", id: 6 }, 
    { companyTwo: "T-Mobile", position: "Intern", id: 7 }, 
    { companyThree: "Verizon", position: "Project Manager", id: 8 }
  ];
  const [generalEdit, setGeneralEditMode] = useState(false);
  const [educationEdit, setEducationEditMode] = useState(false);
  const [experienceEdit, setExperienceEditMode] = useState(false);
  const [person, setPerson] = useState(initialPerson);

  const handleGeneralState = () => {
    setGeneralEditMode(!generalEdit);
  }

  const handleEducationState = () => {
    setEducationEditMode(!educationEdit);
  }

  const handleExperienceState = () => {
    setExperienceEditMode(!experienceEdit);
  }

  function handleGeneralEdit(id, e) {
    setPerson(person.map(x => {
      if(id === x.id) {
        return {
          ...x,
          name: e.target.value,
          phone: e.target.value,
          email: e.target.value,
        }
      } else {
        return x;
      }
    }));
  }

  function handleEducationEdit(id, e) {
    setPerson(person.map(x => {
      if(id === x.id) {
        return {
          ...x,
          school: e.target.value, 
          areaOfStudy: e.target.value, 
          yearOfStudy: e.target.value
        }
      } else {
        return x;
      }
    }));
  }

  function handleExperienceEdit(id, e) {
    setPerson(person.map(x => {
      if(id === x.id) {
        return {
          ...x,
          companyOne: e.target.value, 
          compayTwo: e.target.value, 
          companyThree: e.target.value
        }
      } else {
        return x;
      }
    }));
  }

  return (
    <>
      <h1>CV Application</h1>
      { !generalEdit ? <General person={person} handleEdit={handleGeneralState} /> : <EditGeneral person={person} handleEdit={handleGeneralState} handleItemChange={handleGeneralEdit} /> }
      { !educationEdit ? <Education person={person} handleEdit={handleEducationState} /> : <EditEducation person={person} handleEdit={handleEducationState} handleItemChange={handleEducationEdit} /> }
      { !experienceEdit ? <Experience person={person} handleEdit={handleExperienceState} /> : <EditExperience person={person} handleEdit={handleExperienceState} handleItemChange={handleExperienceEdit} /> } 
    </>
  )
}

export default App
