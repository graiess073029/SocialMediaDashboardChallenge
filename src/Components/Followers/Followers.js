import './Followers.css'

export function Followers({appName,username,nfollows,changement}){
    return(
        <div className={`followers`}>
            <header>
                {appName.toLowerCase() === 'facebook' ? <img src='./images/icon-facebook.svg' /> : appName.toLowerCase() === 'twitter' ? <img src='./images/icon-twitter.svg' /> : appName.toLowerCase() === 'instagram' ? <img src='./images/icon-instagram.svg' /> : appName.toLowerCase() === 'youtube' ? <img src='./images/icon-youtube.svg' /> : null }
                <p>{username}</p>
            </header>
            <div className="main">
                <h1>{nfollows.toString().replace('000','K')}</h1>
                <p>{appName.toLowerCase() !== 'youtube' ? "FOLLOWERS" : "SUBSCRIBERS"}</p>
            </div>
            <div className='changement'>
                <img src={changement < 0 ? "./images/icon-down.svg" : "./images/icon-up.svg"} alt="" />
                <p className={changement < 0 ? "negative" : "positive"}>{changement < 0 ? changement.toString().slice(1) : changement} Today</p>
            </div>
        </div>
    )
}