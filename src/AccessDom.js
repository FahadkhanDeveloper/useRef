// useRef to access Dom Elements
import { useRef, useEffect } from 'react';
export default function AccessDom() {
    const elementRef = useRef();
    useEffect(() => {
        const divElement = elementRef.current;
        console.log(divElement); // logs <div>I'm an element</div>
    }, []);
    return (
        <div ref={elementRef}> 
            I'm an element
        </div>
    );
}