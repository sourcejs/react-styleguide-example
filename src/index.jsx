'use strict';

var React = require('react/addons');

/**
 * General component description. Defined in component's code (like JSDoc).
 */
module.exports = React.createClass({
    propTypes: {
        /**
         * Description of prop "modifier".
         */
        modifier: React.PropTypes.string
    },
    getDefaultProps: function getDefaultProps() {
        return {
            modifier: ''
        };
    },
    click: function() {
        alert('clicked');
    },
    render: function render() {
        var className = 'btn' + (this.props.modifier ? ' __' + this.props.modifier : '');

        return (
            <div className={className} onClick={this.click}>
                {this.props.children}
            </div>
        );
    }
});