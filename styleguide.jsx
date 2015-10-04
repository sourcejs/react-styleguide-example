'use strict';

var React = require('react/addons');
var Example = require('sourcejs-react/SourceExample.jsx');
var Section = require('sourcejs-react/SourceSection.jsx');
var Code = require('sourcejs-react/SourceCode.jsx');

var Button = require('./src/index.jsx');

module.exports = React.createClass({
    render: function () {
        return (
            <div>
                <link rel="stylesheet" href="src/index.css" />

                <h1>Button</h1>

                <Section>
                    <h2>Default</h2>

                    <Code>
                        {`<Button>Button Text</Button>`}
                    </Code>
                    <Example>
                        <Button>Button Text</Button>
                    </Example>
                </Section>

                <Section>
                    <h2>Button (Red)</h2>

                    <Code>
                        {`<Button modifier="red">Custom Red Button</Button>`}
                    </Code>
                    <Example>
                        <Button modifier="red">Custom Red Button</Button>
                    </Example>
                </Section>
            </div>
        );
    }
});