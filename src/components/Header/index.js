import page_style from './style.module.css';
const Header = ({title, descr}) => {
    return(
        <>
            <header className={page_style.root}>
                <div className={page_style.forest}></div>
                <div className={page_style.container}>
                    {title && (<h1>{title}</h1>)}
                    {descr && (<p>{descr}</p>)}
                </div>
            </header>
        </>
    )
};

export default Header;