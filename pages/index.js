import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blogger List | Home</title>
        <meta name='keywords' content='bloggers' />
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          excepturi aperiam aliquid neque quae numquam animi provident iure
          soluta, repellat maxime sed ex quisquam. Quam.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet iste
          quasi id a dolore odit illum veritatis sed suscipit sit explicabo
          excepturi cumque ipsam, inventore laboriosam deserunt dolor repellat
          similique.
        </p>
        <Link href='/bloggers'>
          <a className={styles.btn}>See Blogger Listing</a>
        </Link>
      </div>
    </>
  )
}
