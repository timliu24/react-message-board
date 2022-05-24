import React, {useState} from "react";
import { Link } from "@reach/router";

const Header = (props) => {

    const{link, linkText, titleText} = props;

    return(
        <header>
            <h1>{titleText}</h1>
            <Link to={link}>{linkText}</Link>
        </header>
    )

}

export default Header;