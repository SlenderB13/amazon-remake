import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { GitHub, Instagram, LinkedIn } from '@material-ui/icons'

function Footer() {
    return (
        <div className="footer">

            <h1>Amazon <small>remake</small></h1>
            <p>This app is a conceptual remake of the Amazon Website,<br></br>
                featuring some new design's and functionalities.
            </p>
            <h3>By <strong><a href="github.com/slenderB13">Lucas Silva</a></strong></h3>
            <div className="footer__media">
                <span>
                    <a href="https://www.linkedin.com/in/lucas-silva-0a1a71197/">
                        <LinkedIn />
                    </a> 
                </span>
                <span>
                    <a href="https://www.instagram.com/reverendoslender/">
                        <Instagram />
                    </a>
                </span>
                <span>
                    <a href="github.com/slenderB13">
                        <GitHub />
                    </a>                    
                </span>
            </div>
        </div>
    )
}

export default Footer
