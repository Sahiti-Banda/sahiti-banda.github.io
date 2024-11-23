import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Contact Me</h2>
            <div style={styles.links}>
                <a href="https://github.com/Sahiti-Banda" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    <FaGithub style={styles.icon} />Github</a>
                <a href="https://www.linkedin.com/in/sahiti-banda/" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    <FaLinkedin style={styles.icon} />LinkedIn</a>
            </div>
        </div> 
    );
};

const styles ={
    container: {
        padding: '20px',
        backgroundColor: '#eef',
        borderRadius: '5px',
     
    },
    heading: {
        fontSize: '24px',
        marginBottom: '20px',
     
    },
    links:{
        display: 'flex',
        gap: '20px',
    },
    link: {
        textDecoration: 'none',
        color: '#333',
        fontSize: '18px',
        display: 'flex',
        gap: '10px',
    },
    icon: {
        fontsize: '24px',
    },

};

export default Contact;