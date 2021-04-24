export const handleSumTotal= (state)=>{
  const reducer = (accumulator,{price}) => accumulator + price;
  const sum = state.cart.reduce(reducer,0);
  return sum
}