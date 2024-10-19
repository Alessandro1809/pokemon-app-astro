import { createSignal, type Component, type JSX } from "solid-js";

interface Props{
    initialvalue:number;
    children?:JSX.Element;
}

export const Counter:Component<Props> = (props) => {

    const [counter, setCounter] = createSignal(props.initialvalue);

    const increment = () => {
        setCounter(counter() + 1);
    }
    const decrement = () => {
        setCounter(counter() - 1);
    }

    return (
        <>
        <div class="flex flex-col justify-center items-center">
            
            {props.children}

            <h3 class="text-2xl font-medium my-4">Value: {counter()}</h3>

            <div class="flex">
                <button class="bg-slate-400 rounded-md p-2 mx-4 hover:bg-slate-600 transition-all duration-200" onClick={increment}>Increment</button>
                <button class="bg-slate-400 rounded-md p-2 mx-4 hover:bg-slate-600 transition-all duration-200" onClick={decrement}>Decrement</button>
            </div>
        </div>
        </>
            
    );
}