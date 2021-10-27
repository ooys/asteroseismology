import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import LazyLoad from "react-lazyload";

function Picture({ rawpicture, name }) {
    if (rawpicture != null) {
        return (
            <LazyLoad once={true}>
                <img
                    className="is-profile-picture"
                    src={rawpicture}
                    alt={name}
                />
            </LazyLoad>
        );
    } else {
        return <br></br>;
    }
}

function Email({ rawemail }) {
    if (rawemail != null) {
        return (
            <div className="column">
                <a
                    onClick={
                        (() => navigator.clipboard.writeText(rawemail),
                        () =>
                            alert(
                                "Email: " +
                                    rawemail +
                                    " has been copied to your clipboard."
                            ))
                    }>
                    <span className="icon">
                        <FontAwesomeIcon
                            className="fa-lg"
                            icon={faEnvelope}></FontAwesomeIcon>
                    </span>
                </a>
            </div>
        );
    } else {
        return null;
    }
}

function Discord({ rawdiscord }) {
    if (rawdiscord != null) {
        return (
            <div className="column">
                <a
                    onClick={
                        (() => navigator.clipboard.writeText(rawdiscord),
                        () =>
                            alert(
                                "Discord: " +
                                    rawdiscord +
                                    " has been copied to your clipboard."
                            ))
                    }>
                    <span className="icon">
                        <FontAwesomeIcon
                            className="fa-lg"
                            icon={fab.faDiscord}></FontAwesomeIcon>
                    </span>
                </a>
            </div>
        );
    } else {
        return null;
    }
}

function Github({ rawgithub }) {
    if (rawgithub != null) {
        return (
            <div className="column">
                <a target="_blank" rel="noopener noreferrer" href={rawgithub}>
                    <span className="icon">
                        <FontAwesomeIcon
                            className="fa-lg"
                            icon={fab.faGithub}></FontAwesomeIcon>
                    </span>
                </a>
            </div>
        );
    } else {
        return null;
    }
}

function Linkedin({ rawlinkedin }) {
    if (rawlinkedin != null) {
        return (
            <div className="column">
                <a target="_blank" rel="noopener noreferrer" href={rawlinkedin}>
                    <span className="icon">
                        <FontAwesomeIcon
                            className="fa-lg"
                            icon={fab.faLinkedin}></FontAwesomeIcon>
                    </span>
                </a>
            </div>
        );
    } else {
        return null;
    }
}

function Profile({
    name,
    position,
    origin,
    location,
    picture,
    email,
    discord,
    github,
    linkedin,
}) {
    return (
        <div className="column is-half-widescreen is-half-desktop ">
            <div className="is-profile">
                <Picture rawpicture={picture} name={name} />

                <div className="is-profile-text">
                    <div className="is-profile-name">{name}</div>
                    <div className="is-profile-position">{position}</div>
                    <div className="is-profile-origin">{origin}</div>
                    <div className="is-profile-location">{location}</div>
                </div>
                <div className="is-profile-contact">
                    <div className="columns is-profile-contact-columns is-centered is-mobile">
                        <Linkedin rawlinkedin={linkedin} />
                        <Github rawgithub={github} />
                        <Email rawemail={email} />
                        <Discord rawdiscord={discord} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
