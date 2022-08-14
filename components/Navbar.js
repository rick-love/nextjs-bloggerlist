import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <h1>Blogger List</h1>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/bloggers'>
        <a>Blogger Listing</a>
      </Link>
    </nav>
  )
}

export default Navbar
