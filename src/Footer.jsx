import React from 'react'

function Footer({ developer, year }) {
  return (
    <footer className='Footer'>
      <small>Copyright &copy; {year} by {developer} Development </small>
    </footer>
  )
}

Footer.defaultProps = {
 developer: 'Developer Name',
 year: "20xx"
}

export default Footer
