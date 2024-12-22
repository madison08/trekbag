import BackgroundHeading from './components/BackgroundHeading';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemList from './components/ItemList';
import SideBar from './components/SideBar';
import ItemContextProvider from './contexts/ItemContextProvider';

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        <ItemContextProvider>
          <Header />
          <ItemList />
          <SideBar />
        </ItemContextProvider>
      </main>

      <Footer />
    </>
  );
}

export default App;
