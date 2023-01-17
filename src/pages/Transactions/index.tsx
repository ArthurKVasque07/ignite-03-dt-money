import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "../../components/_transactionsPage/SearchForm";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { PriceHighLight, TransactionnsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);
  return (
    <div>
      <Header />
      <Summary />

      <TransactionnsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.category}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>R$ {transaction.price}</PriceHighLight> 
                  </td>
                  <td>{transaction.description}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}                
          </tbody>
        </TransactionsTable>
      </TransactionnsContainer>
    </div>
  )
}