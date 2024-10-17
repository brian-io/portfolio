import { useSection } from "@/context/section";
import { useState, useEffect, RefObject } from "react";

export default function useScrollActive(ref: RefObject<HTMLElement>){
    const [state, setState] = useState(false);
    const { onSectionChange } = useSection();

    useEffect(() =>{
        const scrollActive = () => {
            const scrollY = window.scrollY;

            const sectionHeight = ref.current?.offsetHeight;
            const sectionTop = ref?.current?.offsetTop! - 80;

            if(
                scrollY > sectionTop &&
                scrollY <= sectionTop + (sectionHeight as number)
            ){
                setState(true);
            } else {
                setState(false);
            }

        };

        scrollActive();
        window.addEventListener("scroll", scrollActive);

        return () => {
            window.removeEventListener("scroll", scrollActive);
        }
    }, [onSectionChange]);

    return state;
}