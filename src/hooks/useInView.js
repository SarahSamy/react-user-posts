import { useState, useEffect } from "react";

const useInView = () => {

    const [inView, setInView] = useState(false);
    const [ref, setRef] = useState(null);

    const handleObserver = (entries) => {
        const [target] = entries
        if (target.isIntersecting) {
            setInView(true);
        }
        else {
            setInView(false);
        }
    }

    useEffect(() => {
        if (!ref) return;
        const observer = new IntersectionObserver(handleObserver);
        observer.observe(ref);
        return () => observer.unobserve(ref);

    }, [ref])

    return [inView, setRef]
}
export default useInView;