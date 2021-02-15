import style from '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    return (
        <div>
        <div id="page-content-wrapper">
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Usuario
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Configurar</a>
                                <a className="dropdown-item" href="#">Mi Perfil</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Cerrar Sesión</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
        </div>
    )
}
