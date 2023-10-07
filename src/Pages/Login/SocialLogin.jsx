import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext);

    const handleLogin = (login) => {
        login()
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error);
        })
    }
    
  return (
    <div>
      <div className="flex items-center justify-center">
        <h1>Or Continue With</h1>
        <button onClick={()=> handleLogin(googleLogin)} className="btn btn-primary ">Google</button>
      </div>
    </div>
  );
};

export default SocialLogin;
