export default function Item({ content, name }){
    return (
        <li>
            {content} - <b>{name}</b>
        </li>
    );
}