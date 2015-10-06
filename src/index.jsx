'use strict';

var React = require('react/addons');

module.exports = React.createClass({
    propTypes: {
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