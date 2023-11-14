import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import {DynamicTheme} from '@/pages/dynamic_theme';
import {ManualTheme} from '@/pages/manual_theme';
import {ThemeRouter} from "./theme_router";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <ThemeRouter></ThemeRouter>

        <Routes>
          <Route path="/" element={<DynamicTheme />} />
          <Route path="/dynamic" element={<DynamicTheme />} />
          <Route path="/manual" element={<ManualTheme />} />
        </Routes>
      </div>
    </Router>
  );
}
