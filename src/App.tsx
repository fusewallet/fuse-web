import { useRoutes } from 'react-router';

import { routes } from './routes';

function App() {
    const views = useRoutes(routes);
    return <>{views}</>;
}

export default App;
