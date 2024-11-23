import React from 'react';

const Header = ({ setCurrentSection }) => {
    return (
        <nav style={styles.nav}>
             <div style={styles.name}>Sahiti Banda</div>
            <button 
            style={styles.link}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#ddd' )} 
            onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
            onClick={() => setCurrentSection('about')}>About</button>
            <button 
            style={styles.link} 
            onMouseOver={(e) => (e.target.style.backgroundColor = '#ddd' )} 
            onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
            onClick={() => setCurrentSection('resume')}>Resume</button>
            <button 
            style={styles.link} 
            onMouseOver={(e) => (e.target.style.backgroundColor = '#ddd' )} 
            onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
            onClick={() => setCurrentSection('projects')}>Projects</button>
             <button 
            style={styles.link} 
            onMouseOver={(e) => (e.target.style.backgroundColor = '#ddd' )} 
            onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
            onClick={() => setCurrentSection('contact')}>Contact</button>
        </nav>
    );
};

const styles={
    nav: {
        display: 'flex',
        justifyContent: 'flex-end',
        background: '#f4f4f4',
        padding: '10px',
        position: 'sticky',
        top: 0,
        fontWeight: 'bold',
    },
    name: {
        position: 'absolute',
        fontSize: '30px',
        top: '10px',
        left: '25px',
        fontWeight: '',
        color: '#333',
    },
    link: {
        margin: '0 5px',
        background: 'none',
        fontweight: 'bold',
        border: 'none',
        color: '#333',
        cursor: 'pointer',
        fontSize: '25px',
        
    },
    linkHover: {
        backgroundColor: '#eef',
    }
};  

export default Header;