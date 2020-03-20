import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";


export default function configureStore(){
    return createStore( 
        reducer,
        compose(
            applyMiddleware(thunk), 
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
}