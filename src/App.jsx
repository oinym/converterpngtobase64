import { Container } from '@mui/material';
import MyAppBar from './components/Navbar/AppBar';
import PngConverterForm from './components/PngConverterForm/PngConverterForm';

function App() {
    return (
        <div>
            <header >
                <MyAppBar />
            </header>
            <Container>
                <PngConverterForm/>
            </Container>
        </div>
    );
}

export default App;
