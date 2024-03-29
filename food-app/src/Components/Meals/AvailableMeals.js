import { useEffect, useState } from "react";

import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card.js";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = (props) => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoding] = useState(true);
    const [httpError, setHttpError] = useState();
    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch(
                "https://react-food-app-32373-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
            );

            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            const responseData = await response.json();

            const loadedMeals = [];
            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }
            setMeals(loadedMeals);
            setIsLoding(false);
        };

        fetchMeals().catch((error) => {
            setIsLoding(false);
            setHttpError(error.message);
        });
    }, []);

    if (isLoading) {
        return (
            <section className={classes.MealsLoading}>
                <p>Loading...</p>
                <div className={classes.loader}></div>
            </section>
        );
    }

    if (httpError) {
        return (
            <section className={classes.MealsError}>
                <p>{httpError}</p>
            </section>
        );
    }
    const mealsList = meals.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
