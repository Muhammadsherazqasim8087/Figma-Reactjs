import React, { useState } from 'react';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('About Me');
    
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const getContent = () => {
        switch (activeTab) {
            case 'About Me':
                return <p>Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 1 year now...</p>;
            case 'Experiences':
                return <p>I have experience in leading teams and managing projects...</p>;
            case 'Recommended':
                return <p>Check out these great recommendations!</p>;
            default:
                return <p>Welcome!</p>;
        }
    };

    return (
        <div className="container">
            <div className="left-half"></div>
            <div className="right-half">
                <div className="tabs">
                    {['About Me', 'Experiences', 'Recommended'].map(tab => (
                        <div
                            key={tab}
                            className={`tab ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                        </div>
                    ))}
                </div>
                <div className="content">
                    {getContent()}
                </div>
                <div className="gallery">
                    <h3>Gallery</h3>
                    <button>Add Image</button>
                    <div className="gallery-images">
                        <img className="gallery-image" src="https://via.placeholder.com/150" alt="Gallery Image 1" />
                        <img className="gallery-image" src="https://via.placeholder.com/150" alt="Gallery Image 2" />
                        <img className="gallery-image" src="https://via.placeholder.com/150" alt="Gallery Image 3" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;