import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { auth } from '../../firebase/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { FaUserCircle } from "react-icons/fa";
const logo = (
  <div className={styles.logo}>
          <Link to=''>
            <h2>
              e<span>Shop</span>.
            </h2>
          </Link>
        </div>
)
const cart = (
  <span className={styles.cart}>
              <Link to='/cart'>
                Cart
                <FaShoppingCart size={20}/>
                <p>0</p>
              </Link>
            </span>
)
const  activeLink = (
  ({isActive}) => 
  (isActive ? `${styles.active}` : "")
)
const Header = () => {
  const [showMenu,setShowMenu] = useState(false);

  const [displayName, setdisplayName] = useState("");
  const [uName,setUName] = useState("");
  useEffect(() =>{
    onAuthStateChanged(auth,(user) => {
      if(user){
        const uid = user.id;
        console.log(user.displayName);
        setdisplayName(user.displayName)
      }else{
        setUName("")
      }
    })
  },[])


  const navigate = useNavigate();
  const toggleMenu = () =>{
    setShowMenu(!showMenu)
  }

  const hideMenu = () =>{
    setShowMenu(false)
  }

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successfully.");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav className={showMenu ? `${styles['show-nav']}`
        : `${styles["hide-nav"]}`}>
          
          <div className={showMenu ? `${styles['nav-wrapper']} ${styles["show-nav-wrapper"]}`
          : `${styles['nav-wrapper']}`}
          onClick={hideMenu}
          >  
          </div>

          <ul onClick={hideMenu}>
            <li className={styles['logo-mobile']}>
              {logo}
              <FaTimes onClick={hideMenu} color='#fff' size={25}/>
            </li>
            <li>
              <NavLink to='/' className={activeLink}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/contact' className={activeLink}>Contact Us</NavLink>
            </li>
          </ul>
          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>
              <NavLink className={activeLink} to='/login'>Login</NavLink>
              <a href="#">
               <FaUserCircle size={16}/>
               HI, {displayName}
              </a>
              <NavLink className={activeLink} to='/register'>Register</NavLink>
              <NavLink className={activeLink} to='/order-history'>My Orders</NavLink>
              <NavLink onClick={logoutUser}  to='/'>Log Out</NavLink>
            </span>
              {cart}
          </div>
        </nav>
        <div className={styles['menu-icon']}>
          {cart}
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu}/>
        </div>
      </div>

    </header>
  )
}

export default Header