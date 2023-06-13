import "./Overview.css";

export function Overview({ title, appName, value, changement}) {
  return (
    <div className={`overview`}>
        <header>
            <p>{title}</p>
            {appName.toLowerCase() === "facebook" ? (
            <img src="./images/icon-facebook.svg" />
            ) : appName.toLowerCase() === "twitter" ? (
            <img src="./images/icon-twitter.svg" />
            ) : appName.toLowerCase() === "instagram" ? (
            <img src="./images/icon-instagram.svg" />
            ) : appName.toLowerCase() === "youtube" ? (
            <img src="./images/icon-youtube.svg" />
            ) : null}
        </header>
        <div className="main">
            <h1>{value.toString().replace('000','K')}</h1>
            <div>
                <img src={changement < 0 ? "./images/icon-down.svg" : "./images/icon-up.svg"} alt="" />
                <p className={changement < 0 ? "negative" : "positive"}>{changement < 0 ? changement.toString().slice(1) : changement}%</p>  
            </div>
        </div>
    </div>
  );
}
