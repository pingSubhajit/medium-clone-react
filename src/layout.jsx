import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SmoothScrollProvider from './components/utilities/SmoothScrollProvider'

const Layout = ({children}) => {
    return (
        <SmoothScrollProvider>
            <Navbar />
            {children}
            <Footer />
        </SmoothScrollProvider>
    )
}

export default Layout

