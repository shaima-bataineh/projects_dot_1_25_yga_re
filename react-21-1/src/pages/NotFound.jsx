import errorimg from "../assets/404 Error-bro.png"
function NotFound() {
return (
<div className="overlay">
    <img src= {errorimg} alt="404 error" className="error-img"/>
<h1>Oops!</h1>
<p>The page you are trying to visit does not exist.</p>
</div>
);
}

export default NotFound;