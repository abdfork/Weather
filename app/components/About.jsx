var React = require('react');

// var About = React.createClass({
//     render: function () {
//         return (
//             <h3>About Component</h3>
//         )
//     }
// });

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>
                Simple app built on react using foundation.
            </p>
            <p>
                Some of the tools used:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - Javascript framework.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - Open weather map to search weather data.
                </li>
            </ul>
        </div>
    )
};

module.exports = About;