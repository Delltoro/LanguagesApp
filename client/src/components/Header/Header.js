import React , {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Menu , Header as SemanticHeader } from 'semantic-ui-react'
import {headerStyle , menuStyle , menuItemStyle} from './style';

class Header extends Component {

    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return <a className="blue darken-4 waves-effect waves-light btn" href="/auth/google">Login With Google</a>
                // <Link style={menuItemStyle} to="/auth/google">Login With Google</Link>
            default:
                return <Link style={menuItemStyle} to="/api/logout">Log out</Link>

        }
    }

    render() {
        return (
            <section> 
                <SemanticHeader style={headerStyle}>
                    Deutsch Learning
                </SemanticHeader>
                <Menu style={menuStyle}>
                    <Menu.Item>
                        <Button>
                            {this.renderContent()}
                        </Button>
                    </Menu.Item>

                    <Menu.Item >
                        <Button>
                            <Link style={menuItemStyle} to={this.props.auth ? '/train' : '/'}>Vocabulary</Link>
                        </Button>
                    </Menu.Item>

                    <Menu.Item>
                        <Button>
                            <Link style={menuItemStyle} to={this.props.auth ? '/articles' : '/'}>Articles</Link> 
                        </Button>
                    </Menu.Item>

                    <Menu.Item>
                        <Button>
                            <Link style={menuItemStyle} to={this.props.auth ? '/quiz' : '/'}>Quizes</Link>
                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button>
                            <Link style={menuItemStyle} to={this.props.auth ? '/test' : '/'}>Tests</Link>
                        </Button>
                    </Menu.Item>
                </Menu>          
          </section>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth: auth };
}

export default connect(mapStateToProps)(Header);