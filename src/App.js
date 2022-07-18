import Menu from './Menu';
import Mobile from './Mobile';
import Stories from './Stories';
import Conteudo from './Conteudo';
import Sidebar from './Sidebar';
import BarraInferior from './Barra-Inferior';

export default function App() {
    return (
        <div>
            <Menu />
            <Mobile />
            <div className='galeriaPrincipal'>
                <div className='galeria3'>
                    <div className='galeria1'>
                        <Stories />
                        <Conteudo />
                    </div>
                    <Sidebar />
                </div>
            </div>
            <BarraInferior />
        </div>
    );
}