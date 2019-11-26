import React , {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class Header extends Component {

    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return <a className="blue darken-4 waves-effect waves-light btn" href="/auth/google">Login With Google</a>
            default:
                return <a href="/api/logout">Log out</a>

        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/about' : '/' } 
                          className="left brand-logo">
                        Deutsch Lernen
                    </Link>
                    <ul className="right">
                        <li>
                            <Link to={this.props.auth ? '/train' : '/'}>Vocabulary</Link> 
                        </li>
                        <li>
                            <Link to={this.props.auth ? '/quiz' : '/'}>Quizes</Link>
                        </li>
                        <li>
                            <a>{this.renderContent()}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth: auth };
}

export default connect(mapStateToProps)(Header);