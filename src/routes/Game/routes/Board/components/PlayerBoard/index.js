import PokemonCard from "../../../../../../components/PokemonCard";
import cn from 'classnames';
import {useState} from "react";

import s from './style.module.css';

const PlayerBoard = ({player, cards, onClickCard}) => {
    const [isSelected, setselected] = useState(null);

    return (
        <div>
            {
                cards.map((item) => (
                    <div
                        className={cn(s.cardBoard, {
                            [s.selected]: isSelected === item.id
                        })}

                        onClick={() => {
                            setselected(item.id);
                            onClickCard && onClickCard({
                                player,
                                ...item,
                            })
                        }}
                    >
                        <PokemonCard
                            key={item.id}
                            name={item.name}
                            img={item.img}
                            id={item.id}
                            type={item.type}
                            values={item.values}
                            minimize
                            isActive
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default PlayerBoard;