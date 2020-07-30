import React, { Component } from 'react';

class Footer extends React.Component{
    render(){
        <div id="footer">    
            <p id="footer-text">Find me at the links below!</p>
            <a href="https://github.com/Mir-Khan" target="_blank" id="github-link"><i class="fab fa-github fa-3x"></i></a>
            <a href="https://www.linkedin.com/in/mir-khan/" target="_blank" id="linkedin-link"><i class="fab fa-linkedin fa-3x"></i></a>
        </div>
    }
}

ReactDOM.render(<Footer/>, document.getElementById("page-footer"));