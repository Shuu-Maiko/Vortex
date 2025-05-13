import ButtonHover from "./bottonHover"
export default function Intro(){


    return(
        <div className=" col-end-1 m-auto md:w-[80%] md:ml-32 p-4 ">
        <p className=" font-mono flex justify-center    ">
            A Behance-featured Graphic Designer, Motion Designer, and 3D Artist with a knack for visual storytelling. 
            From striking YouTube thumbnails to dynamic esports branding, his portfolio speaks for itself. 
            What's more, Vortex is also a content creator on YouTube, offering a unique perspective on the digital landscape.
        </p>
        <ButtonHover content="Hire" link="https://www.behance.net/Vorte#" color="#e6c409" css="h-13 w-32 float-left text-bold  " ></ButtonHover>

        </div>
    )
}