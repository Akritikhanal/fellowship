// import "./Home.module.css"
import css from "./Home.module.css"
const Home = () => {
    return (
        <div className={css.home}>
            <h3 className={css.title}> Nature</h3>
            <p className={css.text}>Nature is all the animals, plants, and other things in the world that are not made by people, 
                and all the events and processes that are not caused by people. Everything we see around us constitutes nature, \
                including the sun, the moon, trees, flowers, 
        fruits, human beings, birds, animals, etc. In nature, everyone depends on one another to keep the 
        ecosystem healthy. For survival, every creature is interrelated and reliant on one another. Humans, 
        for example, rely on nature for their survival, and nature provides us with oxygen, food, water, 
        shelter, medicines, and clothing, among other things. Many shades may be seen in nature, contributing 
        to the planet’s beauty. </p>
            <img src="first.jpeg"></img>
        </div>
    );
};
export default Home;