import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ author, profile }) => (
    <footer>
        Made with <i className="em em-heart" style={{width: '15px', height: '15px'}}></i> <a href={'https://github.com/haxzie'} target='_blank'>@haxzie</a> and remixed with <i className="em em-sparkles" style={{width: '15px', height: '15px'}}></i> by <a href={'https://github.com/kindavishal'} target='_blank'>@kindavishal</a>
    </footer>
)

export default Footer