import { useSection } from "@/context/section";
import { useState, useEffect, RefObject, useCallback } from "react";

export default function useScrollActive(ref: RefObject<HTMLElement>, sectionId: string){
    const [state, setState] = useState(false);
    const { currentSection, onSectionChange } = useSection();

    const checkScroll = useCallback(() => {
        if (!ref.current) return;

        const scrollY = window.scrollY;
        const sectionHeight = ref.current.offsetHeight;
        const sectionTop = ref.current.offsetTop - 80;
        
        if (
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
        ) {
            setState(true);
            onSectionChange!(sectionId);
        } else {
            setState(false);
        }
    }, [ref, sectionId, onSectionChange]);
    
    
    useEffect(() => {
        if (ref.current && ref.current.offsetTop <= 80 && currentSection === "") {
            onSectionChange!(sectionId);
            setState(true);
        }
    }, [ref, sectionId, onSectionChange, currentSection]);



    useEffect(() => {
        // Check scroll position immediately on mount and when the component updates
        checkScroll();

        // Set up scroll event listener
        window.addEventListener("scroll", checkScroll);

        // Clean up
        return () => {
            window.removeEventListener("scroll", checkScroll);
        }
    }, [checkScroll]);

    
    
    return state;
}