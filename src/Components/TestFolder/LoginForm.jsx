import {useState, useEffect} from "react"
import Cookies from 'js-cookie'

const LoginForm = () => {

    const [usernameState, setUsername] = useState("")
    const [userPasswordState, setUserPassword] = useState("")

    const getUsername = (event) => {
       const username =  event.target.value
       setUsername(username)

    }

    const getPassword = (event) => {
        const password = event.target.value
        setUserPassword(password)
    }

    const submitForm = async (event) => {
        event.preventDefault()
        const data = {usernameState, userPasswordState }
        const options = {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                Accept: "application/json",
            }, 
            body : JSON.stringify(data)
        }
        const response = await fetch('https://apis.ccbp.in/login', options)
        const data2 =  await response.json()
        console.log(data2)

    }


    return(
        <>
        <form  onSubmit= {submitForm}>
            <br/>
            <label htmlFor= "username" >Username</label>
            <br/>
            <input onChange = {getUsername} placeholder = "Enter username" id="username" type="text" />
            <br/>
            <br/>

            <label  htmlFor = "password" >Password</label>
            <br/> 
            <input onChange = {getPassword} placeholder = "Enter password" id = "password" type="text" />
            <br/>
            <br/>
            <button  type = "submit" >Submit</button>

        </form>
        
        </>

    )

}


export default LoginForm