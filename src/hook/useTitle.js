import { useEffect } from "react";

const useTitle = (initialTitle) => {
    const updateTitle = () => {
       document.title = `Jobs - ${initialTitle}`
    };
    useEffect(updateTitle, [initialTitle]);
    }

export default useTitle;