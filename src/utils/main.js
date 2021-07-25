import uniqid from 'uniqid'

const experienceListing = () => {
    const id = uniqid();
    let company = ''
    let jobTitle = ''
    let startYear = ''
    let endYear = ''

    return {
        id,
        company,
        jobTitle,
        startYear,
        endYear
    }
}

const educationListing = () => {
    const id = uniqid();
    let school = ''
    let degree = ''
    let subject = ''
    let gradYear = ''

    return {
        id,
        school,
        degree,
        subject,
        gradYear
    }
}

function handleExpInputChange(e, id) {
    const {name, value} = e.target;

    this.setState(prevState => {
      const updatedExp = prevState.experienceList.map((expItem) => {
        if (expItem.id === id) {
          return {...expItem, [name]: value}
        } else {
          return expItem
        } 
      })
      return {...prevState, experienceList: [...updatedExp]}
    })
}

function handleEduInputChange(e, id) {
    const {name, value} = e.target;

    this.setState(prevState => {
      const updatedEdu = prevState.educationList.map((eduItem) => {
        if (eduItem.id === id) {
          return {...eduItem, [name]: value}
        }
        return eduItem
 
      })
      return {...prevState, educationList: [...updatedEdu]}
    })
}

export {experienceListing, educationListing, handleEduInputChange, handleExpInputChange};