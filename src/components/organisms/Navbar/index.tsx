import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { MaterialColors } from '@enums/MaterialColors';
import Brand from '@organisms/Navbar/Brand';
import Burger from '@organisms/Navbar/Burger';
import { FirebaseContext } from '../../../fb';
import Link from './Link';
import Menu from './Menu';
import Start from './Start';
import End from './End';
import Item from './Item';
import Dropdown from './Dropdown';
import Divider from './Divider';
import { FixedPosition } from '@enums/bulma/FixedPosition';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { configObject, IConfig } from '../../../config';

export interface INavbarProps extends IProps {
    color?: MaterialColors;
    transparent?: boolean;
    fixed?: FixedPosition;
    spaced?: boolean;
    brandName?: string;
    brandIcon?: IconDefinition;
}

export const SettingsContext = React.createContext<IConfig>(configObject);

export default function Navbar(props: INavbarProps) {
    const { currentUser } = React.useContext(FirebaseContext);
    const { brandName, brandIcon, ...spread } = pipe(props)(
        put('navbar'),
        prefix('color', 'is'),
        flag('transparent', 'is-transparent'),
        prefix('fixed', 'is-fixed'),
        flag('spaced', 'is-spaced')
    );
    const navbarMenuID = 'navbarMenu';

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isAnonymous, setIsAnonymous] = React.useState(currentUser == null);

    React.useEffect(() => {
        setIsAnonymous(currentUser == null);
    }, [currentUser]);

    return (
        /* TODO fix tags */
        <nav role="navigation" aria-label="main navigation" {...spread}>
            <Navbar.Brand
                brandName={brandName ?? ''}
                icon={brandIcon ?? faHome}>
                <Navbar.Burger
                    isOpen={isMenuOpen}
                    setMenuOpen={setIsMenuOpen}
                    dataTarget={navbarMenuID}
                    aria-controls={navbarMenuID}></Navbar.Burger>
            </Navbar.Brand>
            <Navbar.Start>
                <Navbar.Menu
                    showOnTouch={false}
                    currentProfile={null}
                    userEmail={[undefined, false]}
                    id={navbarMenuID}
                    isOpen={isMenuOpen}
                    isAnon={isAnonymous}>
                        
                    </Navbar.Menu>
            </Navbar.Start>

            <Navbar.End
                loginModalID="loginModal"
                registerModalID="registerModal"></Navbar.End>
        </nav>
    );
}

Navbar.Link = Link;
Navbar.Menu = Menu;
Navbar.Start = Start;
Navbar.Item = Item;
Navbar.End = End;
Navbar.Dropdown = Dropdown;
Navbar.Brand = Brand;
Navbar.Burger = Burger;
Navbar.Divider = Divider;
