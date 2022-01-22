import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {
    const favouritesCtx = useContext(FavouritesContext);

    const isItemFavourite = favouritesCtx.itemIsFavourite(props.id);

    function ToggleFavouriteStatusHandler() {
        if (isItemFavourite) {
            favouritesCtx.removeFavourite(props.id);
        } else {
            favouritesCtx.addFavourite({
                id: props.id,
                title: props.title,
                description: props.description,
                address: props.address,
                image: props.image,
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={ToggleFavouriteStatusHandler}>
                        {isItemFavourite ? "Remove from Favourites" : "Add to Favourites"}
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;
