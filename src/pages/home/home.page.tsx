import React from 'react';
import { BannerComponent } from './components/banner/banner.component';
import './home.styles.scss';

export const HomePage = () => {
    return (
        <div className="home_p_c">
            <BannerComponent/>
        </div>
    )
}
