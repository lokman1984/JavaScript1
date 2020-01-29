//The recipe card
let myMealRecipe = {
	mealName: 'Pasta',
	serves: 4,
	ingredients: [ '100g cheese', ' 100g mushroom ', '100ml  cooking cream','granditalia fusilli' ]
};
// for in
for (prop in myMealRecipe){
    console.log(prop + ' : ' + myMealRecipe[prop]);
}