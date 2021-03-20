import MainMenuItem from 'Component/MainMenuItem';

export default function MainMenuComponent() {
  const mainMenuClasses = [
    'h-screen',
	'fixed',
	'bg-blue-600',
	'w-32',
	'flex',
	'flex-col'
  ];

  return (
    <div className={ mainMenuClasses.join(' ') }>
	  <MainMenuItem to='/admin'>
		Dashboard
	  </MainMenuItem>
	  <MainMenuItem to='/admin/exhibits'>
		Exhibits
	  </MainMenuItem>
	  <MainMenuItem to='/admin/authors'>
		Authors
	  </MainMenuItem>
	  <MainMenuItem to='/admin/types'>
		Types
	  </MainMenuItem>
	  <MainMenuItem to='/admin/epochs'>
		Epochs
	  </MainMenuItem>
	</div>
  );
}
