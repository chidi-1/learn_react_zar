import HeaderBlock from "./components/HeaderBlock";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import LayoutBg from "./assets/img/bg1.jpg"

const App = () => {
    return (
        <>
            <Header
                title="This is title"
                descr="This is Description!"
            />
            <Layout
                title="This is title"
                descr="This is Description!"
                urlBg={LayoutBg}
            />
            <Layout
                title="This is title"
                descr="This is Description!"
                colorBg="palegoldenrod"
            />
            <Layout
                title="This is title"
                descr="This is Description!"
                urlBg={LayoutBg}
            />
            <Footer />
        </>
    )
}

export default App;