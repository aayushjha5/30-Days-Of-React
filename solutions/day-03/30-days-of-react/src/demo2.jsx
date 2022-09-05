import React from 'react'

function Demo2() {
    return (
        <div className="main-wrapper" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid #C2E6F4',
            backgroundColor: '#C2E6F4',
            borderRadius: '8px'
        }}>
            <h2 className="heading" style={{
                margin: '3rem 0 1.5rem',
                fontFamily: 'georgia',
                fontWeight: '200'
            }}>Subscribe</h2>
            <p className="subHeading" style={{
                fontFamily: 'monospace'
            }}>Sign up with your email adderss to receive news and updates</p>
            <div className="input-class" style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: '20%',
                width: '45%',
                margin: '1rem 0 2rem'
            }}>
                <input type="text" className="firstName" placeholder='First name' style={{
                    border: 'none',
                    borderRadius: '1rem',
                    height: '3rem',
                    textAlign: 'center',
                }} />
                <input type="text" className="LastName" placeholder='Last name' style={{
                    border: 'none',
                    borderRadius: '1rem',
                    height: '3rem',
                    textAlign: 'center',
                }} />
                <input type="email" className="email" placeholder='Email' style={{
                    border: 'none',
                    borderRadius: '1rem',
                    height: '3rem',
                    textAlign: 'center',
                }} />
            </div>
            <button className="buttonClass" style={{
               background: '#F37474',
               width: '25%',
               height: '3rem',
               border: 'none',
               color: 'white',
               borderRadius: '1rem',
               cursor: 'pointer',
               marginBottom: '2rem' 
            }}>Subscribe</button>
        </div>
    )
}

export default Demo2
