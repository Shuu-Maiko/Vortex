import { useEffect } from "react";


export default function Yt(){
    //const [value,setValue] = useState(0) 
    useEffect(()=>{
        const elems = document.querySelectorAll<HTMLDivElement>('.rotateOnScroll');

        window.addEventListener('scroll', function() {
            elems.forEach(elem => {
                elem.style.transform = `rotate3d(2, 3, 0, ${(window.scrollY * 0.025)}deg)`;
              });
    });
    },[])

    return(
        <>
            <iframe className="size-[100%] aspect-video rotateOnScroll relative m-auto ease-in-out  " src="https://www.youtube.com/embed/Xj6mKhAMlJI?si=b-l74y5jgerusgHR" title="YouTube video player" frameborder='0' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
            
       </>
    )
}