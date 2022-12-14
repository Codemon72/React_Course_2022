import { useState } from 'react';

const FormAndProfile = () => {
  const initialPersonData = {
    firstName: '',
    lastName: '',
    age: '',
    location: '',
  };

  const [personDataArray, setPersonDataArray] = useState([]);
  const [personData, setPersonData] = useState(initialPersonData);

  const handelFormInputChange = (event) => {
    const { name, value } = event.target;
    // combination of
    // - spread operator `...exampleObj`
    // - object literals: `, ` and
    // - computed property `[exampleKey]: exampleValue`
    setPersonData({ ...personData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setPersonDataArray([...personDataArray, personData]);
    setPersonData(initialPersonData);
  };

  return (
    <div className='component'>
      <h2>FormAndProfile</h2>
      <div className='card-component'>
        <span>First Name: {personData.firstName}</span>
        <br />
        <span>Last Name: {personData.lastName}</span>
        <br />
        <span>Age: {personData.age}</span>
        <br />
        <span>Location: {personData.location}</span>
      </div>

      <form onSubmit={handleFormSubmit}>
        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          value={personData.firstName}
          onChange={handelFormInputChange}
        />
        <br />
        <input
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={personData.lastName}
          onChange={handelFormInputChange}
        />
        <br />
        <input
          type='text'
          name='age'
          placeholder='Age'
          value={personData.age}
          onChange={handelFormInputChange}
        />
        <br />
        <input
          type='text'
          name='location'
          placeholder='Location'
          value={personData.location}
          onChange={handelFormInputChange}
        />

        <input type='submit' />
      </form>

      {personDataArray.map((person, index) => {
        return (
          <div key={index} className='component'>
            <span>First Name: {person.firstName}</span>
            <br />
            <span>Last Name: {person.lastName}</span>
            <br />
            <span>Age: {person.age}</span>
            <br />
            <span>Location: {person.location}</span>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default FormAndProfile;
