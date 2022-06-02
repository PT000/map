
    import { Link } from "react-router-dom";
    import {
        useLocation,
        NavLink,
        Outlet,
        useSearchParams,
      } from 'react-router-dom';
    import { getStates } from "../statesData";

    function QueryNavLink({ to, ...props }) {
        let location = useLocation();
        return <NavLink to={to + location.search} {...props} />;
      }
    

    export default function States() {
      let states = getStates();
      let [searchParams, setSearchParams] = useSearchParams({ replace: true });


      return (
        <div style={{ display: 'flex' }}>
        <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
        
          {states
            .filter((state) => {
              let filter = searchParams.get('filter');
              if (!filter) return true;
              let name = state.name.toLowerCase();
              
              return name.startsWith(filter.toLowerCase());
              
            })
            .map((state) => (
              <QueryNavLink
                key={state.name}
                style={({ isActive }) => {
                  return {
                    display: 'block',
                    margin: '1rem 0',
                    color: isActive ? 'red' : '',
                  };
                }}
                to={`/states/${state.name}`}
              >
                {state.name}
              </QueryNavLink>
            ))}
        </nav>
        <Outlet />


      </div>
      );
    }