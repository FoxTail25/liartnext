// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
import l from '../../styles/layout/layout.module.scss';

import Header from './header';
import Footer from './footer';
import Aside_left from './aside_left';
import Aside_right from './aside_right';

export default function Layout({ children, home }) {
    return (
        <div className={l.allcontent}>

            <Header />
            <div className={l.container}>

                <div className='width_container'>

                    <div className={l.main_content}>

                        <Aside_left className={l.ta}/>

                        <main>

                            {children}
                            
                        </main>

                        <Aside_right />
                    </div>

                </div>


            </div>
            <Footer />

        </div>
    )
}