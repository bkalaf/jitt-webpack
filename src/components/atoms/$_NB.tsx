// import React from 'react';
// import Menu, { IMenuProps } from '../organisms/Navbar/Menu';
// import { IMenuSection } from '../molecules/MenuBar/IMenuSection';
// import { IMenuBar } from '../molecules/MenuBar/IMenuBar';
// import MenuSection from '@organisms/Navbar/MenuSection';
// import NavbarStart from '../organisms/Navbar/Start';
// import End from '../organisms/Navbar/End';

// export function _NBMenu(props: IMenuProps & IMenuBar & IProps) {
//     const { sections, ...spread } = props;
//     const mainMenu = props.sections.map(MenuSection);
//     return (
//         <Menu
//             id={props.id}
//             isOpen={false}
//             isAnon={props.isAnon}
//             userEmail={[undefined, false]}
//             currentProfile={null}>
//             <NavbarStart>{mainMenu}</NavbarStart>
//             <End loginModalID="loginModal" registerModalID="registerModal">
//                 {props.isAnon ? (
//                     <div className="buttons">
//                         <button className="button is-primary">Login</button>
//                         <button className="button is-primary">Register</button>
//                     </div>
//                 ) : (
//                     <button className="button is-primary">Logout</button>
//                 )}
//             </End>
//         </Menu>
//     );
// }
