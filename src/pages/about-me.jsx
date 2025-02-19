import { useEffect } from "react";
import PropTypes from "prop-types";

export default function AboutMe({ setTitle }) {
    useEffect(() => {
        setTitle("About Me");
        document.title = "About Me - My Website";
    }, [setTitle]);

    return (
        <>
Hello I am typing out some words for my web page
        </>
    )
}

AboutMe.propTypes = {
    setTitle: PropTypes.func.isRequired
};