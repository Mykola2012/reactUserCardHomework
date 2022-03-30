import "./App.css";
import UserInfo from "./components/UserInfo";
import UserPhoto from "./components/UserPhoto";
import StatusLike from "./components/StatusLike";
import UserActivity from "./components/UserActivity";

function App() {
  return (
    <>
      <article className="userCard">
        <UserPhoto
          src="https://wnet.fm/wp-content/uploads/2019/10/Taras_Shevchenko_-_portrait_by_Ivan_Kramskoi-318x405.jpg"
          alt="User photo"
          title="Taras Shevchenco"
        />
        <UserInfo
          firstName="Taras"
          lastName="Shevchenco"
          userNickname="kobzar"
          linkProfile="#"
        />
        <StatusLike isLike={false} />

        <UserActivity
          tweets="237"
          folowing="47"
          folovers="44.13 m"
          likesCount="135.6 m"
        />
      </article>
    </>
  );
}

export default App;
