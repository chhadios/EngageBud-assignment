import {React,useState} from "react";
import InputAdornment from '@mui/material/InputAdornment';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { TextField } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useNavigate } from "react-router-dom";
import './styles.css'
const LoginForm = () => {

    const [email,setEmail]=useState(null);
    const [phone,setPhone]=useState(null);
    const navigate = useNavigate();

    function handleClick(){
        console.log(email);
        console.log(phone);
        //api integration
        // try{
        //     const user= await axios.post(`/api/user/register`,{
        //         email: values.email,
        //         password: values.password
        //     });
        //     console.log(user.data);
        //      navigate('/game');
        // }catch(error){
        //     console.log(error)
        // }
        navigate('/game');
    }

    return (
        <div className="form-container">
            <p className="form-heading">This is how EngageBud looks like in action!</p>
            <TextField id="standard-basic"
                label="Email"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <EmailOutlinedIcon />
                        </InputAdornment>
                    ),
                }}
                placeholder="johnDoe@gmail.com"
                variant="filled"
                className="textfield"
                onChange={e => setEmail(e.target.value)} />

            <TextField id="standard-basic"
                label="Phone Number"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LocalPhoneOutlinedIcon />
                        </InputAdornment>
                    ),
                }}
                placeholder="123456789"
                variant="filled"
                sx={{ marginTop: "15px" }}
                className="textfield"
                onChange={e => setPhone(e.target.value)} />

            <div className="checkbox-container">
                <div style={{ width: "40px", float: "left" }}>
                    <Checkbox defaultChecked color="default" />
                </div>
                <div style={{ width: "250px", float: "right" }}>
                    <p style={{ marginBottom: "0" }}>
                        I agree to receiving recurring automated messages at the number I have provided.</p>
                    <p style={{ marginTop: "0" }}>Consent is not a condition to purchase.</p>
                </div>
            </div>

            <button className="form-button" onClick={()=>handleClick()}>Try your Luck</button>
            <p className="form-disclamer">*You can spin the wheel only once!&nbsp;*If you win, you can claim your coupon for 10 minutes only!</p>
            <p className="form-close">No, I don't feel lucky <CloseOutlinedIcon fontSize="medium" /> </p>
        </div >
    )
}

export default LoginForm;