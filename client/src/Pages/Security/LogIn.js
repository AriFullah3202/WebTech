import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/UserContext";
import { GoogleAuthProvider, GithubAuthProvider } from "@firebase/auth";


const LogIn = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state)

    const { logIn, setLoading } = useContext(AuthContext);
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()


    const from = location.state ?.from ?.pathname || '/';


    // handle the email and password and checked
    const handleSubmit = (event) => {
        console.log("clicked")
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(typeof password)
        console.log(email, password)
        logIn(email, password)
            .then(res => {
                console.log(res.user)
                if (res.user) {
                    console.log("useer is founf")
                    navigate(from);
                }
            }).catch(err => {
                console.log(err);
                setError(err.message);
                console.log(err.message);

            }).finally(() => {
                setLoading(false);
            })
    }

    //this handle for google 
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (result.user) {
                    navigate(from, { replace: true });
                }
            })
            .catch(error => console.error(error))
            .finally(() => {
                setLoading(false);
            })
    }
    //this handle is for github
    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (result.user) {
                    navigate(from, { replace: true });
                }
                setError('')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
                console.log(error.message)


            })
            .finally(() => {
                setLoading(false);
            })
    }


    return (

        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100 mx-auto">
            <h2 className="mb-3 text-3xl font-semibold text-center">Please Login</h2>
            <p className="text-sm text-center text-gray-400">Dont have account?
            <Link to="/Register" rel="noopener noreferrer" className="focus:underline hover:underline">Register here</Link>
            </p>

            <form onSubmit={handleSubmit} className="space-y-8 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <p className="text-red-200">{error}</p>
                </div>
                <button className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Sign in</button>

                <div className="flex items-center w-full my-4">
                    <hr className="w-full text-gray-400" />
                    <p className="px-3 text-gray-400">OR</p>
                    <hr className="w-full text-gray-400" />
                </div>
                <div className="my-6 space-y-4">
                    <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">
                        <FaGoogle></FaGoogle>
                        <p>Login with Google</p>
                    </button>
                    <button onClick={handleGithubSignIn} aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">

                        <FaGithub></FaGithub>
                        <p>Login with GitHub</p>
                    </button>

                </div>
            </form>
        </div >


    )
}

export default LogIn