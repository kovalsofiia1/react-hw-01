import Transaction from "../Transaction/Transaction"
import './TransactionHistory.css'

export default function TransactionHistory({ items }) {
    return (
        <>
        <h2 className="transactionTitle">Transaction History</h2>
        <table className="transactionTable">
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item) => {
                    return <tr key={item.id}>
                        <Transaction data={item} />
                    </tr>
                })}
            </tbody>
            </table>
            </>
    )
}