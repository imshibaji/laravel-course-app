import './Chat.css';
export default function Chat() {
    return (
        <div className='card'>
            <div className="card-header">
                <h5 className="card-title">Live Chat</h5>
            </div>
            <div className="card-body">
                <div className="chat-container">
                    <div className="chat-messages" id="chatMessages">
                        <div className="message other">
                            <div className="username">John Doe</div>
                            <div className="text">Hi there! How can I help you?</div>
                        </div>
                        <div className="message user">
                            <div className="username">You</div>
                            <div className="text">I need assistance with my order.</div>
                        </div>
                        <div className="message other">
                            <div className="username">John Doe</div>
                            <div className="text">Hi there! How can I help you?</div>
                        </div>
                        <div className="message user">
                            <div className="username">You</div>
                            <div className="text">I need assistance with my order.</div>
                        </div>
                        <div className="message other">
                            <div className="username">John Doe</div>
                            <div className="text">Hi there! How can I help you?</div>
                        </div>
                        <div className="message user">
                            <div className="username">You</div>
                            <div className="text">I need assistance with my order.</div>
                        </div>
                        <div className="message other">
                            <div className="username">John Doe</div>
                            <div className="text">Hi there! How can I help you?</div>
                        </div>
                        <div className="message user">
                            <div className="username">You</div>
                            <div className="text">I need assistance with my order.</div>
                        </div>
                        <div className="message other">
                            <div className="username">John Doe</div>
                            <div className="text">Hi there! How can I help you?</div>
                        </div>
                        <div className="message user">
                            <div className="username">You</div>
                            <div className="text">I need assistance with my order.</div>
                        </div>
                        <div className="message other">
                            <div className="username">John Doe</div>
                            <div className="text">Hi there! How can I help you?</div>
                        </div>
                        <div className="message user">
                            <div className="username">You</div>
                            <div className="text">I need assistance with my order.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-footer'>
                <form className="chat-input">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Type a message..." />
                        <button className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
}