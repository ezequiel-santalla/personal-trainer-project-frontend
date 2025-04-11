import { Link } from "react-router-dom";
import InstagramIcon from "../icons/InstagramIcon";
import WhatsappIcon from "../icons/WhatsappIcon";
import CellphoneIcon from "../icons/CellphoneIcon";
import EmailIcon from "../icons/EmailIcon";
import MapsIcon from "../icons/MapsIcon";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">NM Personal Trainer</h2>
            <p className="text-gray-300 mb-4">
              Entrenamiento personalizado para ayudarte a alcanzar tus objetivos
              físicos, ya sea ganancia muscular, pérdida de grasa o preparación
              para competencias.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/nmpersonaltrainerr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <span className="sr-only">Instagram</span>
                <InstagramIcon />
              </a>
              <a
                href="https://wa.me/2234557916"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <span className="sr-only">WhatsApp</span>
                <WhatsappIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-gray-300 hover:text-white">
                  Planes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white">
                  Iniciar Sesión
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white">
                  Registrarse
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CellphoneIcon />
                <span className="text-gray-300">2234557916</span>
              </li>
              <li className="flex items-start">
                <EmailIcon />
                <span className="text-gray-300">
                  Nacho.planificaciones@gmail.com
                </span>
              </li>
              <li className="flex items-start">
                <MapsIcon />
                <span className="text-gray-300">
                  Fit Factory Gym, Mar del Plata
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Aguilera Facundo, Lang Rodrigo,
            Santalla Ezequiel. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
