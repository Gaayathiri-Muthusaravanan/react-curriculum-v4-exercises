import SnackFooter from './SnackFooter';
import SnackHeader from './SnackHeader';
import SnackList from './SnackList';

function SnackApp() {
  return (
    <div style={{ border: '1px black solid', textAlign: 'center' }}>
      <SnackHeader />
      <SnackList />
      <SnackFooter />
    </div>
  );
}
export default SnackApp;
