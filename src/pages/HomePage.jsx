import { Navbar } from '../layout/Navbar';
import { SearchBar } from '../components/SearchBar';

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: 'flex',
          //   flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <SearchBar></SearchBar>
      </div>
    </>
  );
};
