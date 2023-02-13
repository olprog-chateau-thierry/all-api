import api from './assets/api.svg';
import account_cirle from './assets/account_circle.svg';
import address from './assets/address.svg';
import quiz from './assets/quiz.svg';
import './Header.css';
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <header>
            <div>
                <img src={api} alt=""/>
            </div>
            <ul>
                <li>
                    <Link to={"/random-app"}>
                        <img src={account_cirle} alt=""/>
                    </Link>
                </li>
                <li>
                    <Link to={'/address'}>
                        <img src={address} alt=""/>
                    </Link>
                </li>
                <li>
                    <Link to={'/quiz'} >
                        <img src={quiz} alt=""/>
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;