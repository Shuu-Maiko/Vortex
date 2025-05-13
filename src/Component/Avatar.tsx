
interface prop{
    url: string;
};
export default function Avatar(prop : prop){
    return(
        <img className = "h-max w-max rounded-full m-auto  p-4" src={prop.url} alt="Avatar"/>     
    )
}