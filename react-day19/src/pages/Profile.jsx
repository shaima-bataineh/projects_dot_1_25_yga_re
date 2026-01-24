import { useAuth } from "../context/AuthContext";

function Profile(){
    const{user} = useAuth();
 return (
    <div>
        <h1>Profile</h1>
        <p>
            Welcome, <b>{User.name}</b>
        </p>
        <p> This page is protected (only looged-in users can see it).</p>

    </div>
 );
}
export default Profile;