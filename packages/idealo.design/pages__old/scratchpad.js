import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import PageLayout from '../components/PageLayout'
import MainContent from '../components/MainContent'
import ComponentsList from '../components/ComponentsList'
import PagesList from '../components/PagesList'




function Scratchpad() {
    return (
        <>
          <PageLayout>

            <h1>Scratchpad</h1>
            <p>
              This is the scratch pad for the Design System. It is supposed to be a dump for structural research of existing Pages and Components in the product.
              This section of the Catalog is supposed to fade away in the longer run as this semi-structured list is just a first step for curating a Catalog of real Components.
            </p>

            <PagesList />
            <ComponentsList />
          </PageLayout>

        </>
    )
}

export default Scratchpad

