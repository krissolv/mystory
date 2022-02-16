import './main.scss';
import {Button, ColorPicker} from "./components";

function App() {

    const options = [
        {
            color: '#FFFFFF',
            title: 'White'
        },
        {
            color: '#00FF00',
            title: 'Green'
        }
    ]

    return (
        <div className="App">
            <h1>Hello world</h1><br />

            <Button label="Click me!" primary={true}/>
            <ColorPicker options={options} />
        </div>
    );
}

export default App;
