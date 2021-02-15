import {useState} from "react";
import {useRouteMatch, Route, Switch, Redirect} from "react-router-dom";
import cn from "classnames";

import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import NotFoundPage from "./routes/NotFound";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";

import page_style from './style.module.css';

const App = () => {
    const match = useRouteMatch("/");

    return (
        <Switch>
            <Route path="/404" component={NotFoundPage} />
            <Route>
                <>
                    <MenuHeader bgActive={!match.isExact}/>
                    <div className={cn(page_style.wrap, {
                        [page_style.isHomePage]: match.isExact
                    })}>
                        <Switch>
                            {/*<Route  path="/home" component={HomePage} />*/}
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/game" component={GamePage}/>
                            <Route path="/about" component={AboutPage}/>
                            <Route path="/contact" component={ContactPage}/>
                            />
                            {/*Если ничео не найдено 2 вариант с прописыванием 404 выше */}
                            <Route render={() => (
                                <Redirect to="/404" />
                            )}
                            />
                        </Switch>
                    </div>
                    <Footer/>
                </>
            </Route>

            {/*Если ничео не найдено 1 вариант */}
            {/*<Route render={() => (
                <h1>404 Not Found</h1>
            )}/>*/}
        </Switch>
    )
};

export default App;