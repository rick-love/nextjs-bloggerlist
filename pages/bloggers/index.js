import Link from 'next/link'
import styles from '../../styles/Bloggers.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return {
    props: {
      bloggers: data,
    },
  }
}

const Bloggers = ({ bloggers }) => {
  return (
    <div>
      <h1>All Bloggers</h1>
      {bloggers.map((blogger) => (
        <Link href={`/bloggers/${blogger.id}`} key={blogger.id}>
          <a className={styles.single}>
            <h3>{blogger.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Bloggers
