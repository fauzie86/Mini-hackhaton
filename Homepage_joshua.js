import React from 'react';
import './Style_joshua.css';

function Homepage_joshua() {
    return (
        <div className='home-page'>
            <div id='top' className="text-white text-center" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/coffeecover.webp')`, padding: '10px' }}>
                <img id="logo" className="" src={`${process.env.PUBLIC_URL}/odin.png`} alt="Odin Coffee Logo" />
                <h1 id='title' className="display-4" style={{ WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: '#814D09' }}>Odin Coffee</h1>
                <p id="slogan" className="lead" style={{ color: '#fff', fontSize: '40px', fontWeight: 'bold', textAlign: 'center', marginTop: '20px', marginBottom: '20px', WebkitTextStrokeWidth: '0.8px', WebkitTextStrokeColor: '#814D09' }}>The All-Father Coffee Experience awaits you.</p>
            </div>

            <section id='pic1' className='container-fluid text-white text-center' style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/homecoffee1.webp')`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <h1 className="display-4">Energy and Strength of Gods!</h1>
                    <p style={{ fontSize: '30px' }}>Feel the Energy and Strength from Asgard.</p>
                    <a className="btn btn-primary" href="./menu" role="button" style={{ backgroundColor: '#D8884B', borderColor: '#D8884B' }}>Check the Menu</a>
                </div>
            </section>

            <section id="carousel-container" className='container-fluid'>
                <div id="carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 img-fluid" src={`${process.env.PUBLIC_URL}/coffee1.gif`} alt="Multiple Coffee Choices" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 id='desch' className="display-4" >Multiple Coffee Choices</h5>
                                <p className='desc' >A Number of Coffee flavours to choose from!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 img-fluid" src={`${process.env.PUBLIC_URL}/coffee3.gif`} alt="Made from the Freshest Beans" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 id='desch' className="display-4">Made from the Freshest Beans</h5>
                                <p className='desc' >Straight from our organic coffee farms to the farm and into your hearts.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 img-fluid" src={`${process.env.PUBLIC_URL}/coffee2.gif`} alt="Share with your Love Ones" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 id='desch' className="display-4">Share with your Love Ones</h5>
                                <p className='desc' >Made with love to be shared with your loved ones.</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Homepage_joshua;
