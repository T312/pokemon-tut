import React, { useEffect, useState } from "react";
import "./pokemon.css";
import { Detail } from "../interface";

interface Props {
  viewDetail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
  name: string;
  id: number;
  image: string;
  abilities:
    | {
        name: string;
        ability: string;
      }[]
    | undefined;
}

const PokemonList: React.FC<Props> = (props) => {
  const { name, id, image, abilities, viewDetail, setDetail } = props;
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(id === viewDetail?.id);
  }, [viewDetail]);
  const closeDetail = () => {
    setDetail({
      id: 0,
      isOpen: false,
    });
  };
  return (
    <div className="">
      {isSelected ? (
        <section className="pokemon-list-detailed" key={viewDetail.id}>
          <div className="detail-container">
            <div className="detail-close" onClick={closeDetail}>
              X
            </div>
            <div className="detail-info">
              <p className="detail-name">{name}</p>
              <img src={image} alt="pokemon" />
            </div>
            <div className="detail-skill">
              <p className="detail-ability">Abilities</p>
              {abilities?.map((ab: any) => {
                return <div className="">{ab.ability.name}</div>;
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="pokemon-list-container">
          <p className="pokemon-name">{name}</p>
          <img src={image} alt="pokemon" />
        </section>
      )}
    </div>
  );
};

export default PokemonList;
