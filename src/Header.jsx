import api from './assets/api.svg';
import account_cirle from './assets/account_circle.svg';
import './Header.css';

const Header = () => {

    return (
        <header>
            <div>
                <img src={api} alt=""/>
            </div>
            <ul>
                <li><img src={account_cirle} alt=""/></li>
            </ul>
        </header>
    )
}

export default Header;