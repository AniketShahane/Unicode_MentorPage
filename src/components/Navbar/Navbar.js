import React, { Component } from 'react';
import unicodelogo from './unicodelogo.png';
import classes from './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className={classes.Navbar}>
                <img src={unicodelogo} alt=""/>
                {/* <img src="https://gm1.ggpht.com/4M_tu1WBCcsepCr3rcBxcMJZOmbbT53Eu96xezw3VtSWMDhaVJlBwqJl0JqWHoHfSOXwGP0axjU2TvXxKmz7eRv8Tf5qR2r9Wp2nesTyTZjH9LLcBFGYvNSKRDBcTtee4SmbEytZwOp_9K6q9xFKTUotNEBK_3iZqqT0pks4JM8WTIV8umHZbr5cutHj7NeF29LxtfFqrw0_zRfJOecjdYr8a4qaGM_pnJDBgTEqPB6e9rtO69T_JylPDeMMRZXUJozv8Qdjoo1s76CL6b2PxbNUAOoUdP7rJHvpu1fLUmVmVGBnCx-cb7zMVvOAOcvYWes94Aqq0YjhO4iDY3Wv5_CmrGwCZdrXErbFldF9C0jnvXcatkcigTCWJ9Vzk5JYdW6ZisPHmsJe1c0-YA_cegEf0N5bVl1vnncQZ5uT4yWfnp5_VcXbf9QjZZOeQpAoTrK7SXn6qPIMJYgMOHw-oA6N8XGkaPga4Rl1osfxfpUT821RGbt3r7utGnS2PJt02Cp3VcBcE7Y8wSlmaNm224mlFV3QzDtqvBHe13lR4KttkpXcqO_Wq9a7nPpGnrKT7qN8m0v8wW9EDenKfF-WUSKgq3z3aQu1dvY-AQImsd2btqlI763Jo1p3Hm7NoiHELtTgTdlqyyaDTZsWHmndm5nLRC7i6wzUnYhfO4ppNgXLly8iwGBhJOmGR97js5N2xuPFqv2GHQSX8Q0Df_MlnkVy46PIyg=s0-l75-ft-l75-ft"></img> */}
            </div>
        );
    }
}

export default Navbar;