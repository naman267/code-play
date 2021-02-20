import React from 'react'
import styles from './Sidebar.module.css'

const sidebar = () => {
    
    const openNav = () => {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
      
    const closeNav = () => {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }

    return (
        <div>
            <div id="mySidebar" className={styles.sidebar}>
                <a href="www.google.com" className={styles.closebtn} onclick={closeNav}>×</a>
                <a href="www.google.com">About</a>
                <a href="www.google.com">Services</a>
                <a href="www.google.com">Clients</a>
                <a href="www.google.com">Contact</a>
                </div>

            <div id="main">
                <button className={styles.openbtn} onclick={openNav}>☰ Open Sidebar</button>  
                <h2>Collapsed Sidebar</h2>
                <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
            </div>
        </div>
    )
}

export default sidebar