import logo from './reactjs-logo-icon.png';

function navbar(){
    return(
        <div className='navbar'>
            <div className='Logo-main'>
                <img src={logo} className="App-logo" alt="logo" />
                <h3>ReactFacts</h3>
            </div>
            <p>React Course - Project 1</p>
        </div>
    )
}

export default navbar;