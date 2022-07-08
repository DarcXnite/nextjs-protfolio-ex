// special SSR image com
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function about() {
  return (
    <div>
      <h2>About Me!</h2>
      <p className={`${styles.brown} ${styles.bigFont}`}>Welcome back beech!</p>

      <div>
        <style jsx>{`
          .orangeText {
            color: orange;
          }
          p {
            font-size: 70px;
          }
        `}</style>
        <p className='orangeText'>Portapotty!</p>
      </div>

      <Image
        src='/profile-pic.png'
        alt='profile picture'
        width={500}
        height={500}
      />
      {/* <img src='/profile-pic.png' alt='profile pic' /> */}
      <Image
        src='https://placekitten.com/300/300'
        alt='a cat'
        width={300}
        height={300}
      />
    </div>
  )
}
