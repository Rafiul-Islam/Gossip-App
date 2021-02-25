import React from 'react';
import {ChatEngine} from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import './App.css'

const App = () => {
    if (!localStorage.getItem('username')) {
        return <LoginForm/>
    }
    return (
        <div>
            <ChatEngine
                height='100vh'
                projectID=""
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
            />
        </div>
    );
};

export default App;
