import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
        excepturi aperiam aliquid neque quae numquam animi provident iure
        soluta, repellat maxime sed ex quisquam. Quam.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet iste
        quasi id a dolore odit illum veritatis sed suscipit sit explicabo
        excepturi cumque ipsam, inventore laboriosam deserunt dolor repellat
        similique.
      </p>
      <Link href='/bloggers'>
        <a>See Blogger Listing</a>
      </Link>
    </div>
  )
}
