import { DOCS_MODE } from 'global';
import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';

import { Location, LocationProvider } from '@storybook/router';
import { Provider as ManagerProvider, Combo } from '@storybook/api';
import { ThemeProvider, ensure as ensureTheme } from '@storybook/theming';
import { HelmetProvider } from 'react-helmet-async';
import { Global, createGlobal, styled } from '@storybook/theming';
// import App from './app';

// import Provider from './provider';

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

// import React from 'react'
import { Desktop } from '@storybook/ui/dist/components/layout/desktop'
import { Sidebar } from '@storybook/ui/dist/containers/nav'
import stuff from '@storybook/ui/dist/containers/nav'
import Preview from '@storybook/ui/dist/containers/preview'
import Panel from '@storybook/ui/dist/containers/panel'
import Notifications from '@storybook/ui/dist/containers/notifications'
import SettingsPages from '@storybook/ui/dist/settings'

import { SPanel, SMain, SPreview, Layout } from '@storybook/ui/dist/components/layout/container'
// import { Panel } from '@storybook/ui/dist/components/panel/panel'
import { styled as theme } from '@storybook/theming/dist/'
// import { ThemeProvider, ensure as ensureTheme } from '@storybook/theming/dist';
import App from '@storybook/ui/dist/app'
import { Root, Provider } from '@storybook/ui/dist'
import { addons } from '@storybook/addons/dist';


console.debug('stuff', stuff())

import dynamic from 'next/dynamic'

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
            on: () => {},
            off: () => {},
            emit: () => {},
            addListener: () => {},
            addPeerListener: () => {},
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

    getElements(type) {
        return addons.getElements(type);
    }

    renderPreview() {
        return (
            <p>This is the Preview</p>
        );
    }

    handleAPI(api) {
        // no need to do anything for now.
        addons.loadAddons(api);
    }
}

const provider = new MyProvider()

// nextjs ssr breaks with storybook -> csr only
// const RootWithNoSSR = dynamic(
//     () => import('@storybook/ui/dist').then(module => {
//         console.log('MODULE', module)
//         return (props) => module.Root(props)
//     }),
//     { ssr: false }
// );

const RootWithNoSSR = dynamic(
    () => <ComponentPreview />,
    { ssr: false }
)

console.log('RootWithNoSSR', RootWithNoSSR)


class ComponentPreview extends React.Component {

  render() {

    return (
      <Container key="container">
        <HelmetProvider key="helmet.Provider">
          <LocationProvider key="location.provider">
            <Location key="location.consumer">
              {(locationData) => (
                <ManagerProvider
                  key="manager"
                  provider={provider}
                  {...locationData}
                  docsMode={getDocsMode()}
                >
                  {({ state, api}) => {
                    const panelCount = Object.keys(api.getPanels()).length;
                    const story = api.getData(state.storyId);

                    const props = {
                      Sidebar,
                      Preview,
                      Panel,
                      Notifications,
                      Nav,
                      pages: [
                        {
                          key: 'settings',
                          render: () => <SettingsPages />,
                        }
                      ]
                    };

                    const size = { width: 500, height: 500 };
                    const { width, height } = size;

                    return (
                      <ThemeProvider key="theme.provider" theme={ensureTheme(state.theme)}>
                        <View>
                          {/* <Global styles={createGlobal} /> */}
                          <Desktop
                            {...props}
                            viewMode={state.viewMode}
                            options={state.layout}
                            docsOnly={story && story.parameters && story.parameters.docsOnly}
                            {...{width, height}}
                            panelCount={panelCount}
                          />
                          <h1>muh</h1>
                        </View>
                      </ThemeProvider>
                    );
                  }}
                </ManagerProvider>
              )}
            </Location>
          </LocationProvider>
        </HelmetProvider>
      </Container>
    );

    // return (
    //     <Container key="container">
    //       <HelmetProvider key="helmet.Provider">
    //         <LocationProvider key="location.provider">
    //           <Location key="location.consumer">
    //             {(locationData) => (
    //                 <ManagerProvider
    //                   key="manager"
    //                   provider={provider}
    //                   {...locationData}
    //                   docsMode={getDocsMode()}
    //                 >
    //                   {({ state, api }) => {
    //                       const panelCount = Object.keys(api.getPanels()).length;
    //                       const story = api.getData(state.storyId);

    //                       const props = {
    //                           Sidebar,
    //                           Preview,
    //                           Panel,
    //                           Notifications,
    //                           pages: [
    //                               {
    //                                   key: 'settings',
    //                                   render: () => <SettingsPages />,
    //                                   /* route: ({ children }) => ( */
    //                                   /*     {JSON.stringify(children)} */
    //                                   /* ), */
    //                               },
    //                           ],
    //                       }

    //                       const size = { width: 500, height: 500 };
    //                       const { width, height } = size;

    //                       return (
    //                           <ThemeProvider key="theme.provider" theme={ensureTheme(state.theme)}>
    //                             <View>
    //                               <Global styles={createGlobal} />
    //                               <Desktop
    //                                 {...props}
    //                                 viewMode={state.viewMode}
    //                                 options={state.layout}
    //                                 docsOnly={story && story.parameters && story.parameters.docsOnly}
    //                                 {...{ width, height }}
    //                                 panelCount={panelCount}
    //                               />
    //                             </View>

    //                             {/* <App */}
    //                             {/*   key="app" */}
    //                             {/*   viewMode={state.viewMode} */}
    //                             {/*   layout={state.layout} */}
    //                             {/*   panelCount={panelCount} */}
    //                             {/*   docsOnly={story && story.parameters && story.parameters.docsOnly} */}
    //                             {/* /> */}
    //                           </ThemeProvider>
    //                       );
    //                   }}
    //                 </ManagerProvider>
    //             )}
    //           </Location>
    //         </LocationProvider>
    //       </HelmetProvider>
    //     </Container>
    // )
  }
}

ComponentPreview.defaultProps = {
    id: "componentPreview",
}

export { ComponentPreview as default }

