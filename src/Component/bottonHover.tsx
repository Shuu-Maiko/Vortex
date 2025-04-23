
interface buttonProp {
    content: string;
    color: string;
    css: string;
    link: string;
  }
  const handleOpenNewTab = () => {
    window.open('https://www.behance.net/Vorte', '_blank', 'noopener,noreferrer');
  };
function ButtonHover(prop : buttonProp) {
  return (
    <>
    <button onClick= {handleOpenNewTab} className={` bold rounded-full size-full center hover:shadow-2xl hover:drop-shadow-black hover:scale-120 transition-transform hover:translate-y-0.5 ${prop.css}`} 
    style={{backgroundColor :prop.color} }>
        {prop.content}
    </button>
    </>
  )
}

export default ButtonHover
