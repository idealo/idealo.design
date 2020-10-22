import {GridContainer, GridItem} from '@motif/grid';

import styles from './PageLayout.module.scss'
import MainContent from '../MainContent'

import Header from '../Header'
import Sidebar from '../Sidebar'

function determineViewport() {
    const width = document.documentElement.clientWidth

    if (width < 880) {
        return 'm'
    }

    return 'l'
}

export class PageLayout extends React.Component {

    constructor(props) {
        super(props)
        this.state = { isSidebarOpen: true }

        this.toggleSidebar = this.toggleSidebar.bind(this)
    }

    componentDidMount() {
        let isSidebarOpen;

        const viewport = determineViewport()

        switch (viewport) {
        case 's':
        case 'm':
            isSidebarOpen = false;
            break;
        default:
            isSidebarOpen = true;
        }

        this.setState({ isSidebarOpen })

        window.document.addEventListener('click:toggleSidebar', this.toggleSidebar)
    }

    componentWillUnmount() {
        window.document.removeEventListener('click:toggleSidebar', this.toggleSidebar)
    }

    toggleSidebar() {
        this.setState({ isSidebarOpen: !this.state.isSidebarOpen })
    }

    render() {
        return (
            <div className={styles.PageLayout}>
              <GridContainer>
                <GridItem xl={'1/11/1/1'} l={'1/11/1/1'} m={'1/11/1/1'} s={'1/11/1/1'}>
                  <Header isSidebarOpen={this.state.isSidebarOpen}/>
                </GridItem>
                
                <GridItem xl={'1/12/2/1'} l={'1/12/2/1'} m={'1/12/2/1'} s={'1/12/2/1'}>
                  <Sidebar isOpen={this.state.isSidebarOpen}/>
                  <MainContent isSidebarOpen={this.state.isSidebarOpen}>
                    {this.props.children}
                  </MainContent>
                </GridItem>
              </GridContainer>

            </div>
        )
    }
}
