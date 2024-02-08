import Transaction from "../Transaction/Transaction"
import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
    return (
        <>
            <h2 className={css.transactionTitle}>Transaction History</h2>
            <table className={css.transactionTable}>
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