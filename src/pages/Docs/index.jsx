import React from 'react';
import { Container, Content, Layout, Box} from 'suitup-ui';
//index
import index from '../../../docs/index';

//components
import button from '../../../docs/components/button';
import card from '../../../docs/components/card';
import header from '../../../docs/components/header';
import icon from '../../../docs/components/icon';
import image from '../../../docs/components/image';
import components from '../../../docs/components/index';
import menu from '../../../docs/components/menu';
import modal from '../../../docs/components/modal';
import slider from '../../../docs/components/slider';
import placeholders from '../../../docs/components/placeholders';
import paragraph from '../../../docs/components/paragraph';
import navbar from '../../../docs/components/navbar';

//containers
import box from '../../../docs/containers/box';
import container from '../../../docs/containers/container';
import containers from '../../../docs/containers/index';
import layout from '../../../docs/containers/layout';

//utils
import utils from '../../../docs/utils/index';
import scroll from '../../../docs/utils/scroll';
import settings from '../../../docs/utils/settings';
import screen from '../../../docs/utils/screen';

//responsive
import responsive from '../../../docs/responsive/index';
import devices from '../../../docs/responsive/devices';

//guides
import guides from '../../../docs/guides/index';
import philosophy from '../../../docs/guides/philosophy';
import gettingStarted from '../../../docs/guides/getting-started';

//theming
import theming from '../../../docs/theming/index';

import Markdown from './markdown';
import Page from "../page";


const docsMap = {
    "index": {
        index: index
    },
    "components": {
        index: components,
        button: button,
        card: card,
        header: header,
        icon: icon,
        image: image,
        menu: menu,
        modal: modal,
        slider: slider,
        paragraph: paragraph,
        placeholders: placeholders,
        navbar: navbar
    },
    "containers": {
        index: containers,
        box: box,
        container: container,
        layout: layout
    },
    "utils": {
        index: utils,
        scroll: scroll,
        screen: screen,
        settings: settings
    },
    "responsive": {
        index: responsive,
        devices: devices
    },
    "theming": {
        index: theming
    },
    "getting-started": {
        index: gettingStarted
    },
    "guides": {
        index: guides
    }
}

@Page class Docs extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        
        let {folder, file} = this.props.match.params;

        if(!folder) {
            folder = "index";
        }

        if(!file) {
            file = "index";
        }

        let source = docsMap[folder] ? docsMap[folder][file] : "";

        return (
                <Container>
                    <Markdown source={source}/>
                </Container>
            );
    }
} 

export default Docs;