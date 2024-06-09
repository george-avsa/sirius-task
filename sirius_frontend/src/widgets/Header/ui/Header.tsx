import Icon from "Shared/Icon/ui/Icon";
import MessagesIcon from './../assets/messages.svg';
import AvatarIcon from "Shared/Icon/ui/AvatarIcon";

function Header() {
    return (
        <header className="header">
            <Icon
                image={{type: 'svg', img: MessagesIcon}}
                notifications={3}
            ></Icon>
            <AvatarIcon></AvatarIcon>
        </header>
    );
}

export default Header;