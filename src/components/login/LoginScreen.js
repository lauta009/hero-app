import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import { types } from "../auth/types";
const userPrueba = {
    user:'lauta009',
    categoria: '1',
    token:'ASDNSADndsslca-dasdas54d4+asd6as5d6asd2as6'
  }
export const LoginScreen = () => {
    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = () => {
        const action ={
            type:types.login,
            payload: {...userPrueba}
        }
        console.log(action);
        dispatch(action);
        navigate('/',{
            replace:true
        })
    }
     
  return <div className='container mt-5'>
      <h1>Login</h1>
      <hr></hr>
      <button className='btn btn-primary' onClick={handleLogin}>Login</button>
      </div>;
};
