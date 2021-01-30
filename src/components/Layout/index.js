import page_style from './style.module.css';

const Layout = ({id, title, descr, urlBg, colorBg}) => {
    const descr_class = page_style.desc + " " + page_style.full;
    const styleBgColor = colorBg ? {background: `${colorBg}`} : {}
    const styleBgImg = urlBg ? {backgroundImage: `url(${urlBg})`} : {}
    //const styleTotal = Object.assign(styleBgColor, styleBgImg);
    const styleTotal = {
        ...styleBgColor,
        ...styleBgImg,
    }

    return (
        <>
            <section
                style={styleTotal}
                className={page_style.root} id={id}
            >
                <div className={page_style.wrapper}>
                    <article>
                        <div className={page_style.title}>
                            {title && (<h3>{title}</h3>)}
                            <span className={page_style.separator}></span>
                        </div>
                        {descr && (
                            <div className={descr_class}>
                                <p>{descr}</p>
                            </div>
                        )}
                    </article>
                </div>
            </section>
        </>
    )
};

export default Layout;