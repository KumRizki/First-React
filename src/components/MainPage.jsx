export default function MainPage() {
    return (
        <div className="main">
            <LeftCol/>
            <RightCol/>
        </div>
    )
  }

function LeftCol() { 
    return (
        <div className="leftCol">
            <div className="introduction">
                <h1>Welcome to the Start!</h1>
                <p>Welcome to my very first React project! I'm Kumala, currently a university student expanding my knowledge beyond my current major and onto new technology. I'm fascinated by the latest technological advances, from immersive experiences to virtual reality and beyond (Especially in gaming!). With a curious mindset, I strive to stay at the forefront of digital innovation. My interests revolve around learning about new technologies to strolling around the internet for cat videos.</p>     
            </div>
        </div>
    )
}

function RightCol() { 
    return (
        <div className="rightCol">
            <img src="/src/assets/image.png" className="profile"/>
        </div>
    )
}
  