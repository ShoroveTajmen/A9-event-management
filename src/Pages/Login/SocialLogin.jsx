import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (login) => {
        login()
        .then(res => {
            console.log(res)
            toast.success('Login Successful')
            navigate('/')
        })
        .catch(error => {
            console.log(error);
            toast.error(error.message)
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
