import React from "react";


class UserClass extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            userInfo:{
            name:"",
            location:"",
            image:"",
            userName:""
        }
        }
    }
    async componentDidMount(){
        const userData = await fetch("https://api.github.com/users/apurvm790")
        const json = await userData.json();

        console.log(json);

        this.setState({
            userInfo : json,
        })
        // console.log("component did mount");
        // in this function we just call the api and fetch data
        // same as useEffect() 
        // it quickly renders the component then after fetch the data and fill that data into components.
    }
    render(){
        const {name, location, login, avatar_url, bio} = this.state.userInfo;

        return (
            <div className="user-card">
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h3>Contact: {login}</h3>
                <img src={avatar_url}/>
                <p>{bio}</p>
            </div>
        )
    }
}

export default UserClass;