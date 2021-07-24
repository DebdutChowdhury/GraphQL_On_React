import { useQuery, gql } from "@apollo/client";

const Currency = gql`
  query getRates($currency: String!){
    rates(currency: $currency) {
      currency
      rate
    }
  }`;

function ExchangeRates(props) {
  const { loading, error, data } = useQuery(Currency,{variables: {currency: props.data}});
  //   {
  //     rates(currency: "USD") {
  //       currency
  //       rate
  //     }
  //   }
  // `);
  console.log(data);
  console.log(typeof(props.data));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

export default ExchangeRates;