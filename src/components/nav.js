import { NavLink } from 'react-router-dom';
import React from 'react';

export default function Nav() {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/add' exact activeClassName='active'>
                        Add
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' exact activeClassName='active'>
                        Leaderboard
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
}
