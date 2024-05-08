import { Link } from 'react-router-dom';
import styles from './Auth.module.scss';
import { FaGoogle } from "react-icons/fa";
import Card from '../../components/card/Card';
import { useState } from 'react';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')
  return <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src="https://github.com/zinotrust/eshop-ecommerce/blob/master/src/assets/login.png?raw=true" alt="" width={500}/>
        </div>
           <Card>
              <div className={styles.form}>
                <h2>Login</h2>
                <form>
                  <input type="text" placeholder='Email' required />
                  <input type="password" placeholder='Password' required />
                  <button className='--btn --btn-primary --btn-block'>Login</button>
                  <div className={styles.links}>
                    <Link to='/reset'>Reset Password</Link>
                  </div>
                  <p>-- or --</p>
                </form>
                <button className='--btn --btn-danger'><FaGoogle/> Login with Google</button>
                <span className={styles.register}>
                  <p>Don't have an account?</p>
                  <Link  to='/register'>register</Link>
                </span>
              </div>
           </Card>
  </section>
}

export default Login