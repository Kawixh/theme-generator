import '@/styles/pages/dynamic_theme/main.scss'

export const checkUrl = url => {
  return url.includes('manual');
}

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

      <div className="">
        <h2>Page {page}</h2>
      </div>

    </div>
  );
}
