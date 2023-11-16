import {checkUrl} from "./dynamic_theme";

export const ManualTheme = () => {
  let page;
  const currentUrl = window.location.href;

  if (checkUrl(currentUrl)) {
    page = 'Manual'
  }

  return (
    <div>
      <h2>Page {page}</h2>
    </div>
  );
}
