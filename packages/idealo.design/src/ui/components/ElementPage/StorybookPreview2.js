import {DOCS_MODE, document} from 'global';
import React from 'react';
import {styled, ThemeProvider} from '@storybook/theming';
import {HelmetProvider} from 'react-helmet-async';
// import App from './app';
// import Provider from './provider';
import {configure} from '@storybook/react'
import renderStorybookUI, {Provider} from '@storybook/ui';
// import React from 'react'
// import { Panel } from '@storybook/ui/dist/components/panel/panel'
// import { ThemeProvider, ensure as ensureTheme } from '@storybook/theming/dist';
import {addons} from '@storybook/addons/dist';


import dynamic from 'next/dynamic'

// @ts-ignore
ThemeProvider.displayName = 'ThemeProvider';
// @ts-ignore
HelmetProvider.displayName = 'HelmetProvider';

const getDocsMode = () => {
    try {
        return !!DOCS_MODE;
    } catch (e) {
        return false;
    }
};

const Container = process.env.XSTORYBOOK_EXAMPLE_APP ? React.StrictMode : React.Fragment;

// import { Provider } from '@storybook/ui/dist';

const View = styled.div({
    position: 'fixed',
    overflow: 'hidden',
    height: '100vh',
    width: '100vw',
});

addons.setConfig({
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    isFullscreen: false,

    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: false,

    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: false,

    /**
     * where to show the addon panel
     * @type {('bottom'|'right')}
     */
    panelPosition: 'bottom',

    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: false,

    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true,

    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    isToolshown: false,

    /**
     * theme storybook, see link below
     */
    theme: undefined,

    /**
     * id to select an addon panel
     * @type {String}
     */
    selectedPanel: undefined,
});

class MyProvider extends Provider {

    constructor() {
        super();

        this.addons = addons;

        this.channel = {
            on: () => {
            },
            off: () => {
            },
            emit: () => {
            },
            addListener: () => {
            },
            addPeerListener: () => {
            },
        };
    }

    getConfig() {
        return {
            layout: {
                isToolsshown: false,
                showPanel: true,
                showNav: false,
                isFullscreen: false,
                panelPosition: 'top',
            }
        };
    }

    // getElements(type) {
    //     return addons.getElements(type);
    // }
    getElements(type) {
        return {};
    }

    renderPreview() {
        return (
            <p>This is the Preview</p>
        );
    }

    handleAPI(api) {
        // no need to do anything for now.
        // addons.loadAddons(api);
    }
}

const provider = new MyProvider();

// nextjs ssr breaks with storybook -> csr only
// const RootWithNoSSR = dynamic(
//     () => import('@storybook/ui/dist').then(module => {
//         console.log('MODULE', module)
//         return (props) => module.Root(props)
//     }),
//     { ssr: false }
// );

const RootWithNoSSR = dynamic(
    () => <ComponentPreview/>,
    {ssr: false}
)

console.log('RootWithNoSSR', RootWithNoSSR)


const State = {};

class ComponentPreview extends React.Component {

    render() {
        configure(() => [], module);

        return (
            <h1>preview2</h1>
        );
    }
}

ComponentPreview.defaultProps = {
    id: "componentPreview",
};

const roolEl = document.getElementById('component-preview');
renderStorybookUI(roolEl, new MyProvider());

// export { ComponentPreview as default }

