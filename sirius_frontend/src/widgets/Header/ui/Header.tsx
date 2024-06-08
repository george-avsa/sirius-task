import Icon from "Shared/Icon/ui/Icon";
import MessagesIcon from './../assets/messages.svg';

function Header() {
    return (
        <header className="header">
            <Icon
                image={{type: 'svg', img: MessagesIcon}}
                notifications={3}
            ></Icon>
            <Icon
                image={{type: 'img', img: '/avatars/avatar1.png'}}
                arrow
            ></Icon>
        </header>
    );
}

export default Header;