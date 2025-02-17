let recipe = {
  recipeTitle: "Sandwich",
  servings: 2,
  ingridients: ["bread","cheese","tomato","salad","sauce","chicken"],
  direcions: "1.Slice every ingridients. 2.Put all of them on the bread."
}
console.log(recipe.direcions);


for(let i=0;i < recipe.ingridients.length;i++){
  console.log(recipe.ingridients[i]);
};
