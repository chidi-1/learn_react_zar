import {useHistory} from "react-router-dom";
import page_style from './style.module.css';

const Header = ({title, descr, onClickButton, pageTarget, pageTargetText}) => {
    const history = useHistory();
    const handleClick = () => {
        //onClickButton && onClickButton('game');
        //onClickButton && onClickButton(pageTarget);
        history.push(pageTarget);
    }
    return (
        <>
            <header className={page_style.root}>
                <div className={page_style.forest}></div>
                <div className={page_style.silhouette}></div>
                <div className={page_style.moon}></div>
                <div className={page_style.container}>
                    {title && (<h1>{title}</h1>)}
                    {descr && (<p>{descr}</p>)}

                    {pageTarget && (
                        <button onClick={handleClick}>
                            {pageTargetText}
                        </button>
                    )}
                </div>
            </header>
        </>
    )
};

export default Header;