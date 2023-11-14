import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const ManualTheme = () => {
  let query = useQuery();
  let page = query.get('page');

  return (
    <div>
      <h2>Page {page}</h2>
    </div>
  );
}
