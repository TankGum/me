import React from "react"
import { BsInstagram, BsLinkedin, BsGithub, BsYoutube } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

function SocialMedia() {
    return (
        <div className="app__social">
            <div>
                <a href="https://www.linkedin.com/in/tien-anh-tran-180b07239/">
                    <BsLinkedin  />
                </a>
            </div>
            <div>
                <a href="https://github.com/TankGum">
                    <BsGithub  />
                </a>

            </div>
            <div>
                <a href="https://www.facebook.com/TankGum/">
                    <FaFacebookF  />
                </a>

            </div>
            <div>
                <a href="https://www.instagram.com/tankgum/">
                    <BsInstagram  />
                </a>

            </div>
            <div>
                <a href="https://www.youtube.com/channel/UCAmZn9udsYoEmlgDIF_zM1A">
                    <BsYoutube  />
                </a>

            </div>
        </div>
    )
}

export default SocialMedia;