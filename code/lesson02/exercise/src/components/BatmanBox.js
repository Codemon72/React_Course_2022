import { useState } from "react"

const BatmanBox = ({user, setUser}) => {

  const initialFormState = {
    userName: '',
    userLocation: ''
  }

  const [formState, setFormState] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const updateUser = (e) => {
    e.preventDefault();
    setUser(formState)
  }

  const loggedIn = user.userName === 'Batman' && user.userLocation === 'Gotham'
  
  return (
    <>
      {loggedIn && (
        <div>
          <p>
            Not Batman? <br />
            No, I'm{' '}
            <form onSubmit={updateUser}>
              <input
                type='text'
                placeholder='Name'
                name='userName'
                value={formState.userName}
                onChange={handleInputChange}
              />{' '}
              from
              <input
                type='text'
                placeholder='Location'
                name='userLocation'
                value={formState.userLocation}
                onChange={handleInputChange}
              />
              <input type='submit' />
            </form>
            .
          </p>
        </div>
      )}
    </>
  );
}

export default BatmanBox
