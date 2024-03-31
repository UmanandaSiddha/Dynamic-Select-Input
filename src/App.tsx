import SelectDemo from "./components/select";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectWithOtherOption from "./multiple-selects";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SelectDemo />} />
                <Route path="/multiple" element={<SelectWithOtherOption />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;