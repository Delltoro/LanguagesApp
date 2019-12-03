import React , {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Menu , Header as SemanticHeader, Image} from 'semantic-ui-react'
import {headerStyle , menuStyle , menuItemStyle} from './style';


class Header extends Component {

    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return <a className="blue darken-4 waves-effect waves-light btn" href="/auth/google">Zaloguj się z kontem Google</a>
                // <Link style={menuItemStyle} to="/auth/google">Login With Google</Link>
            default:
                return <a style={menuItemStyle} href="/api/logout">Wyloguj się</a>

        }
    }

    render() {
        return (
            <section> 
                <SemanticHeader style={headerStyle}>
                        Nauka języka niemieckiego
                        <Image src='/static/flags.jpg' size='massive'></Image>
                </SemanticHeader>
                <Menu style={menuStyle}>
                    
                    <Menu.Item>
                        <Button>
                            <Link style={menuItemStyle} to='/'>Strona główna</Link>
                        </Button>
                    </Menu.Item>

                    <Menu.Item >
                        <Button>
                            <Link style={menuItemStyle} to={this.props.auth ? '/train' : '/'}>Słownictwo</Link>
                        </Button>
                    </Menu.Item>

                    <Menu.Item>
                        <Button>
                            <Link style={menuItemStyle} to={this.props.auth ? '/articles' : '/'}>Artykuły</Link> 
                        </Button>
                    </Menu.Item>

                    <Menu.Item>
                        <Button>
                            <Link style={menuItemStyle} to={this.props.auth ? '/quiz' : '/'}>Quizy</Link>
                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button>
                            <Link style={menuItemStyle} to={this.props.auth ? '/test' : '/'}>Testy</Link>
                        </Button>
                    </Menu.Item>

                    <Menu.Item>
                        <Button>
                            {this.renderContent()}
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