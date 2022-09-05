import { Button } from "react-bootstrap";

export function Logo({address, type}) {
    return (
        <a href={address} target='_blank'>
            <span className={"bi bi-" + type}></span>
        </a>
    )
}

export function Link({address, text}) {
    return (
        <a href={address} target='_blank'>{text}</a>
    );
}