import {Link} from 'react-router-dom';
import '@/styles/routing/theme_router.css'

export const ThemeRouter = () => {
  return (
    <div className="theme-router">
      <Link to="/dynamic">Dynamic</Link>
      <Link to="/manual">Manual</Link>
    </div>
  );
}
