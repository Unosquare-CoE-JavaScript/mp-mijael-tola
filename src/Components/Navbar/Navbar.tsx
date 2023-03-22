import {NavbarSection} from "./Navbar.styled";
import {NavbarProps} from "./Navbar.interfaces";

export const Navbar = (props: NavbarProps) => {
    return (
        <NavbarSection>
            <span>
                {props.title}
            </span>
            <ul>
                {
                    props?.routes?.map(option => (
                        <li> {option.title}</li>
                    ))
                }
            </ul>
            <div>
                {props.options}
            </div>
        </NavbarSection>
    )
}