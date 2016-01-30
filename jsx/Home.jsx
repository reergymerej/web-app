import React from 'react';

export default class Header extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
        };
    }

    render() {
        return (
            <div className="page">
                <div>
                    <h2>web-app</h2>
                    <p>Hey, look.  You've got a cool new web app.</p>
                </div>
            </div>
        );
    }

    componentDidMount() {
    }
}
