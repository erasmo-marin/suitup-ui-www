import React from "react";
import {
    Device,
    Container,
    Header,
    Footer,
    Menu,
    Content,
    Layout,
    Box,
    Button,
    Icon,
    Card,
    Modal,
    Image,
    Slider,
    Navbar
} from "suitup-ui";

const Logo = props => {
    let style = {
        backgroundImage: `url(${props.url})`,
        backgroundSize: "contain",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        width: props.width,
        height: props.height
    };

    return <div className="logo" style={style} />;
};

class WebLayout extends React.Component {
    constructor(props) {
        super(props);
        this.toggleMenu = ::this.toggleMenu;
        this.onMenuHide = ::this.onMenuHide;
        this.state = {
            menuVisible: false
        };
    }

    toggleMenu() {
        this.setState({
            menuVisible: !this.state.menuVisible
        });
    }

    onMenuHide() {
        this.setState({
            menuVisible: false
        });
    }

    render() {
        let contentStyle = {
            minHeight: "calc(100vh - 264px)"
        };

        let footerStyle = {
            background: "#f2f2f2",
            borderTop: "1px solid #ddd",
            color: "#444"
        };

        let logo = <Logo url="/img/logo.svg" width="50px" height="100%" />;
        return (
            <Layout>
                <Header fixed top>
                    <div>
                        <div style={{float: "left", marginRight: "1rem"}}>
                            <Button
                                menu
                                type="button"
                                onClick={this.toggleMenu}
                            >
                                <Icon name="menu" size={24} />
                            </Button>
                        </div>
                        <Device devices={["widescreen", "desktop", "tablet"]}>
                        <div style={{float: "left"}}>
                            <Navbar style={{float: "left"}}>
                                <Navbar.Menu href="/" text="Home"/>
                                <Navbar.Menu href="/getting-started" text="Getting Started"/>
                                <Navbar.Menu text="Docs">
                                    <Navbar.Submenu href="/components" text="Components"/>
                                    <Navbar.Submenu href="/containers" text="Containers"/>
                                    <Navbar.Submenu href="/responsive/devices" text="Responsive"/>
                                    <Navbar.Submenu href="/theming" text="Theming"/>
                                </Navbar.Menu>
                            </Navbar>
                        </div>
                        </Device>
                        <div style={{float: "right"}}>
                            <a
                                href="https://github.com/erasmo-marin/suitup-ui"
                                target="_blank"
                            >
                                <Image
                                    style={{
                                        margin: "1.2rem 2rem",
                                        cursor: "pointer",
                                        mobile: { margin: "1rem 2rem" }
                                    }}
                                    type="square"
                                    src="/img/GitHub-Mark-Light-64px.png"
                                    width="24px"
                                />
                            </a>
                        </div>
                    </div>
                </Header>
                <Menu
                    left
                    visible={this.state.menuVisible}
                    onHide={this.onMenuHide}
                >
                    <Menu.Header title="Suitup UI" icon={logo} key={1} />
                    <Menu.Item href="/" text="Home" key={2} hideOnRedirect/>
                    <Menu.Item text="Containers" key={3}>
                        <Menu.SubItem
                            text="Layout"
                            href="/containers/layout"
                            key={1}
                            hideOnRedirect
                        />
                        <Menu.SubItem
                            text="Container"
                            href="/containers/container"
                            key={2}
                            hideOnRedirect
                        />
                        <Menu.SubItem
                            text="Box"
                            href="/containers/box"
                            key={3}
                            hideOnRedirect
                        />
                    </Menu.Item>
                    <Menu.Item text="Components" key={4}>
                        <Menu.SubItem
                            text="Button"
                            href="/components/button"
                            key={1}
                            hideOnRedirect
                        />
                        <Menu.SubItem
                            text="Card"
                            href="/components/card"
                            key={2}
                            hideOnRedirect
                        />
                        <Menu.SubItem
                            text="Header"
                            href="/components/header"
                            key={3}
                            hideOnRedirect
                        />
                        <Menu.SubItem
                            text="Icon"
                            href="/components/icon"
                            key={4}
                            hideOnRedirect
                        />
                        <Menu.SubItem
                            text="Image"
                            href="/components/image"
                            key={5}
                            hideOnRedirect
                        />
                        <Menu.SubItem
                            text="Menu"
                            href="/components/menu"
                            key={6}
                            hideOnRedirect
                        />
                        <Menu.SubItem
                            text="Navbar"
                            href="/components/navbar"
                            key={7}
                            hideOnRedirect
                        />
                        <Menu.SubItem
                            text="Modal"
                            href="/components/modal"
                            key={8}
                            hideOnRedirect
                        />
                        <Menu.SubItem
                            text="Slider"
                            href="/components/slider"
                            key={9}
                            hideOnRedirect
                        />
                        <Menu.SubItem
                            text="Placeholders"
                            href="/components/placeholders"
                            key={10}
                            hideOnRedirect
                        />
                        <Menu.SubItem
                            text="Paragraph"
                            href="/components/paragraph"
                            key={11}
                            hideOnRedirect
                        />
                    </Menu.Item>
                    <Menu.Item text="Utils" key={5}>
                        <Menu.SubItem
                            text="Settings"
                            href="/utils/settings"
                            key={1}
                            hideOnRedirect
                        />
                        <Menu.SubItem
                            text="Scroll"
                            href="/utils/scroll"
                            key={2}
                            hideOnRedirect
                        />
                        <Menu.SubItem
                            text="Screen"
                            href="/utils/screen"
                            key={3}
                            hideOnRedirect
                        />
                    </Menu.Item>
                    <Menu.Item text="Responsive" key={6}>
                        <Menu.SubItem
                            text="Devices and breakpoints"
                            href="/responsive/devices"
                            hideOnRedirect
                        />
                    </Menu.Item>
                    <Menu.Item text="Theming" href="/theming" key={7} hideOnRedirect/>
                    <Menu.Item href="/fulldemo" text="Full demo" key={8} hideOnRedirect/>
                </Menu>
                <div className="content" style={contentStyle}>
                    {this.props.children}
                </div>
                <Footer style={footerStyle}>
                    <Container style={{ textAlign: "center" }}>
                        <p>
                            Created by{" "}
                            <a href="https://github.com/erasmo-marin">
                                @erasmo-marin
                            </a>
                            {" "}with ❤️{" "}
                        </p>
                        <Box columns={15} justify="center">
                            <Box.Child
                                wide={3}
                                wides={{ mobile: 5, tablet: 5 }}
                                key={1}
                            >
                                <a
                                    href="https://github.com/erasmo-marin/suitup-ui"
                                >
                                    Github repo
                                </a>
                            </Box.Child>
                            <Box.Child
                                wide={3}
                                wides={{ mobile: 5, tablet: 5 }}
                                key={2}
                            >
                                <a
                                    href="https://www.npmjs.com/package/suitup-ui"
                                >
                                    Suitup on NPM
                                </a>
                            </Box.Child>
                            <Box.Child
                                wide={3}
                                wides={{ mobile: 5, tablet: 5 }}
                                key={3}
                            >
                                <a
                                    href="https://github.com/erasmo-marin/suitup-ui/issues/new"
                                >
                                    Report a bug
                                </a>
                            </Box.Child>
                        </Box>
                    </Container>
                </Footer>
            </Layout>
        );
    }
}

export default WebLayout;
