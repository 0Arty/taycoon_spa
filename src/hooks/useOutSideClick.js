import { useEffect } from "react";
import useLatest from "./useLatest";

export default function useOutSideClick(elementRef, handler, attached = true) {

    const latestHandler = useLatest(handler)

    useEffect(() => {
        if (!attached) return;

        const handleClick = (e) => {
            if (!elementRef.current) return;

            if (!elementRef.current.contains(e.target)) {
                latestHandler.current();
            }
        };
        console.log('123:')

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, [elementRef, handler, attached])

}