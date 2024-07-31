function Footer() {
    return<footer className="page-footer #a5d6a7 green lighten-3">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
            </div>
        </div>
    </footer>
}

export {Footer}