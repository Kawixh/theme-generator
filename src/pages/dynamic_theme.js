import '@/styles/pages/dynamic_theme/main.scss'
import {checkUrl} from "@/lib/utils";


export const DynamicTheme = () => {
  let page;
  const currentUrl = window.location.href;

  if (!checkUrl(currentUrl)) {
    page = 'Dynamic'
  }

  return (
    <div className={'container p-3 grid grid-cols-2'}>
      <div className="">
        <h2>Page {page}</h2>
      </div>

    </div>
  );
}
