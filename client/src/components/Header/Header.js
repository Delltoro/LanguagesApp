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
                return <a className="blue darken-4 waves-effect waves-light btn" href="/auth/google">Zaloguj się</a>
                // <Link style={menuItemStyle} to="/auth/google">Login With Google</Link>
            default:
                return <a tabIndex="1" style={menuItemStyle} href="/api/logout">Wyloguj się</a>

        }
    }

    render() {
        return (
            <section> 
                <div style={{display: 'flex' , justifyContent: 'center' , alignItems: 'center'}}>
                <SemanticHeader style={headerStyle}>
                        Nauka języka niemieckiego
                </SemanticHeader>
                <Image src='/static/flags.jpg' style={{width: '96px' , height: '64px' , marginLeft: '1.2em'}}></Image>
                </div>
                <Menu style={menuStyle}>
                    
                    <Menu.Item>
                        <Button>
                            <Link tabIndex="2" style={menuItemStyle} to='/'>Strona główna</Link>
                        </Button>
                    </Menu.Item>

                    <Menu.Item >
                        <Button>
                            <Link tabIndex="3" style={menuItemStyle} to={this.props.auth ? '/train' : '/'}>Słownictwo</Link>
                        </Button>
                    </Menu.Item>

                    <Menu.Item>
                        <Button>
                            <Link tabIndex="4" style={menuItemStyle} to={this.props.auth ? '/texts' : '/'}>Teksty</Link> 
                        </Button>
                    </Menu.Item>

                    <Menu.Item>
                        <Button>
                            <Link tabIndex="5" style={menuItemStyle} to={this.props.auth ? '/quiz' : '/'}>Quizy</Link>
                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button>
                            <Link tabIndex="6" style={menuItemStyle} to={this.props.auth ? '/grammar' : '/'}>Gramatyka</Link>
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