import {Link} from 'react-router-dom';
import '@/styles/routing/theme_router.scss'
import {checkUrl} from "../pages/dynamic_theme";

export const ThemeRouter = () => {
  const currentUrl = window.location.href;

  return (
    <div className="theme-router">
      <Link className={!checkUrl(currentUrl) && 'active'} to="/dynamic">Dynamic</Link>
      <Link to="/manual" className={checkUrl(currentUrl) && 'active'}>Manual</Link>
    </div>
  );
}
