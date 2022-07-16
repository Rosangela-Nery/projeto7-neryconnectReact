import Menu from './Menu';
import Mobile from './Mobile';
import Stories from './Stories';
import Conteudo from './Conteudo';
import Sidebar from './Sidebar';

export default function App() {
    return (
        <div>
            <Menu />
            <Mobile />
            <div className='galeriaPrincipal'>
                <div className='galeria3'>
                    <div className='galeria1'>
                        <div className='stories'>
                            <Stories />
                        </div>

                        <div className='conteudo'>
                            <Conteudo />
                        </div>
                    </div>

                    <div className='galeria2'>
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}