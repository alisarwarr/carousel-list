import data from './data';
//COMPONENT
import MedicalInsurance from './MedicalInsurance';


function App() {
    return (
        <MedicalInsurance
            data={data}
            backgroundColor="#FFFFFF"
        />
    )
}

export default App;