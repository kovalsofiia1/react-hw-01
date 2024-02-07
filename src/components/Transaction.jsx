export default function Transaction({ data }) {
    const { type, amount, currency } = data;
    return (
        <>
            <td>{ type }</td>
            <td>{ amount }</td>
            <td>{ currency }</td>
        </>
    )
}