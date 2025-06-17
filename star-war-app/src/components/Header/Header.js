import Nav from '../Nav/Nav';
import './Header.css'
export default function Header(){
    return(
        <div className="p-5 container-fluid bg-primary">
            <div className="d-flex">
                <header className="fs-1 fw-bold">Company Name</header>
                <Nav />
            </div>
        </div>
        
    );
}