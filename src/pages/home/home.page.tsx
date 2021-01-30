import React from 'react';
import { AboutComponent } from './components/about/about.component';
import { BannerComponent } from './components/banner/banner.component';
import './home.styles.scss';

export const HomePage = () => {
    return (
        <div className="home_p_c">
            <BannerComponent/>
            <AboutComponent />
        </div>
    )
}
