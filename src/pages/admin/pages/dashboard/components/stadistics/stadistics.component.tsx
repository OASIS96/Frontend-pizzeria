import React from 'react';
import './stadistics.scss';
import IconArrow from '@material-ui/icons/TrendingUp';
import IconPerson from '@material-ui/icons/PermIdentity';
import IconPizza from '@material-ui/icons/LocalPizzaOutlined';
import IconDollar from '@material-ui/icons/AttachMoney';

const StadisticsComponent = () => {
    return (
        <div className="stadistics_c_c">
            <header className="header_stadistics">
                <h1 className="stadistics_title">Estadisticas</h1>
                <span className="updated_text">Actualizado hace 3 min.</span>
            </header>
            <div className="boxes_c">
                <div className="box">
                    <div className="icon_c">
                        <IconArrow />
                    </div>
                    <span className="number">230K</span>
                    <span className="cathegorie">Ventas</span>
                </div>

                <div className="box">
                    <div className="icon_c">
                        <IconPerson />
                    </div>
                    <span className="number">8.34K</span>
                    <span className="cathegorie">Clientes</span>
                </div>

                <div className="box">
                    <div className="icon_c">
                        <IconPizza />
                    </div>
                    <span className="number">2.3K</span>
                    <span className="cathegorie">Productos</span>
                </div>

                <div className="box">
                    <div className="icon_c">
                        <IconDollar />
                    </div>
                    <span className="number">230K</span>
                    <span className="cathegorie">INgresos</span>
                </div>
            </div>
        </div>
    )
}

export default StadisticsComponent
