import {api, API_URL} from '../../Api/api'
import { toast } from 'react-toastify'

// requst a api to login for user and get a token.

const signIn = async({props}) => {
    try{
      //   console.log(props);
         const { email, password, username } = props
         
         const response = await api.post(API_URL.login, 
            {
               email,
               password,
               username
            }
         )
         // console.log(response);

         localStorage.setItem('token', response.data.token)
         toast.success(response.data.message);
         return response.data.user
    }
    catch(err){
      toast.error(err.response.data.message);
      console.log(err);
     
    }
};


// request a api to register new user.

const signUp = async({props}) => {
   try{
      const { email, password, username, navigate } = props;

      const response = await api.post(API_URL.signup,
         {
            email,
            password,
            username, 
         }
      )

     
     toast.success('Account Crated Successfully');
     navigate('/login ')

      return response.data
   }
   catch(err){
     
     toast.error(err.response.data.message);
   //   return err
   }
};


// request a api for remove localstorage and cookies data of system and user logout

const signOut = async() => {
   try{
      
      const response = await api.get(API_URL.logout)

      // console.log(response);
      toast.success(response.data.message);
      localStorage.removeItem('token');

   }
   catch(err){
     toast.error(err.response.data.message);
   }
};



// request a api to fetch user details by  using token

const signInByToken = async() => {
     try{

         const response = await api.get(API_URL.loginByToken);

         return response.data.user;
     }
     catch(err){
      // if token will get expire then first remove the token and redirect the page to signin
       localStorage.removeItem('token');
      //  window.location.href = '/signin'
      console.log(err);
     }
}

// request a api for new Passowrd

export const forgetPassword = async({props})=>{
     try{
            
            const { email,password, navigate} = props;

             await api.post(API_URL.changePassowrd,
               {
                  email,
                  password
               }
            );

            // console.log(response);
            toast.success("Password Change Successfully");
            navigate('/login')
            
     }
     catch(err){
         //  console.log(err);
          toast.error(err.response.data.message);
     }
}

export const authService = {
   signIn,
   signUp,
   signOut,
   signInByToken,
   forgetPassword,
  
}