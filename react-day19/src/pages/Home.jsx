import { useAuth } from "../context/AuthContext";

function Home(){
    const {user} = useAuth();


return (
    <div>
        <h1> Home</h1>
        <p>
            Current User: <b> {user ? user.name : "Guest"}</b>
        </p>
    </div>
);
}
export default Home;