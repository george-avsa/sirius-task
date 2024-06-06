import FullLogoIcon from 'App/assets/FullLogo.svg';
import InfoWidget from 'Shared/InfoWidget/ui/InfoWidget';
import Navigation from 'Widgets/Navigation/ui/Navigation';

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__content">
                <FullLogoIcon className='sidebar__logo'></FullLogoIcon>
                <Navigation></Navigation>
                <InfoWidget
                    title="Учитесь бесплатно"
                    description="Приводите друзей с детьми заниматься в Sirius Future 
                    и получайте подарки!"
                    image="/widgets/gift.png"
                    additionalClass='sidebar__widget'
                    button={{href: '#', text: 'Узнать'}}
                ></InfoWidget>
            </div>
        </aside>
    );
}

export default Sidebar;