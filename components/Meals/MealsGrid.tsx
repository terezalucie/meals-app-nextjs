/* import classes from "./MealsGrid.module.css"
import MealItem, { type MealItemProps} from "./MealItem"

type MealsGridProps = {
    meals: MealItemProps []
}

export default function MealsGrid ({meals}: MealsGridProps){
    return(
         <ul className={classes.meals}>
            {meals.map(meal => <li key={meal.id}>
                <MealItem {...meal} />
            </li>)}
         </ul>
    )
} */