import { Link } from 'react-router-dom';
import styles from './Auth.module.scss';
import Card from '../../components/card/Card';
const Reset = () => {
  return (
     <>
       <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src='https://github.com/zinotrust/eshop-ecommerce/blob/master/src/assets/forgot.png?raw=true' alt="Reset Password" width="400" />
        </div>

        <Card
        >
          <div className={styles.form}>
            <h2>Reset Password</h2>

            <form >
              <input
                type="text"
                placeholder="Email"
                required
              />

              <button type="submit" className="--btn --btn-primary --btn-block">
                Reset Password
              </button>
              <div className={styles.links}>
                <p>
                  <Link to="/login">- Login</Link>
                </p>
                <p>
                  <Link to="/register">- Register</Link>
                </p>
              </div>
            </form>
          </div>
        </Card>
      </section>
     </>
  )
}

export default Reset