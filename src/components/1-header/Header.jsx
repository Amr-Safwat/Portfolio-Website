import '../1-header/header.css'

export default function Header() {
    return (
        <>
            <header onClick={changeHeader}>
                <div className="container">
                    <a href="" className="logo">PORTFOLIO</a>
                    <div className="links">
                        <a href="" className="link">About</a>
                        <a href="" className="link">Services</a>
                        <a href="" className="link">Skills</a>
                        <a href="" className="link">Portfolio</a>
                        <a href=""  className="link">Contact</a>
                    </div>
                </div>
            </header>
        </>
    )
}

function changeHeader() {
    console.alert('No Problems');
}

