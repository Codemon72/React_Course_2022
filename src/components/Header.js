const Header = ({messageCounter}) => {
  return (
    <header className='header'>
        <div className='title'>My Component Page - React Course 2022-11</div>

        <span className='pos-relative message-icon'>
          <svg
            viewBox='0 0 20 20'
          >
            <path
              d='M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z'
              clipRule='evenodd'
              fillRule='evenodd'
            ></path>
          </svg>
          <span>
            {messageCounter}
          </span>
        </span>
      </header>
  )
}

export default Header
