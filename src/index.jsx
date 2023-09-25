//Imports react function for rendering react components to the DOM
import { createRoot } from 'react-dom/client';

//Adds the scss file for bundling
import "./index.scss";

const MyBondFlixApplication = () => {
    return (
        <div className="myBond-flix">
            <div>Good morning</div>
        </div>
    )
};

//Finds app root
const container = document.querySelector("#root");
const root = createRoot(container);

//Tells react to render your app in the root DOM element
root.render(<MyBondFlixApplication />);

