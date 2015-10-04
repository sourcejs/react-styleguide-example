'use strict';

var React = require('react/addons');
var Button = require('./src/index.jsx');

module.exports = React.createClass({
    render: function () {
        return (
            <div>
                <link rel="stylesheet" href="src/index.css" />

                <h1>Button</h1>

                <section className="source_section">
                    <h2>Default</h2>

                    <div className="source_example">
                        <Button>Button Text</Button>
                    </div>
                </section>

                <section className="source_section">
                    <h2>Button (Red)</h2>

                    <div className="source_example">
                        <Button modifier="red">Custom Red Button</Button>
                    </div>
                </section>
            </div>
        );
    }
});