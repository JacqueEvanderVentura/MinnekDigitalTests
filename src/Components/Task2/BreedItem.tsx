import axios from "axios";
import { useEffect, useState } from "react";

interface PropsBreedItem {
  breed: string;
}

function BreedItem({ breed }: PropsBreedItem) {
  const [hover, setHover] = useState(true);
  const [imageUrl, setImageUrl] = useState("");
  const [subBreed, setSubBreed] = useState<Object>({});
  function stringToCamelCase(str: string): string {
    return str[0].toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((res) => setImageUrl(res.data.message));

    axios
      .get(`https://dog.ceo/api/breed/${breed}/list`)
      .then((res) => setSubBreed(res.data.message));
  }, []);

	const subBreedEntries =Object.entries(subBreed)[0]

  return (
    <div
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
			className="cursor-pointer"
    >
      <div hidden={!hover} className="card">
        <img src={imageUrl} alt={`A gorgeous ${breed}`} />
        {stringToCamelCase(breed)}
      </div>
      <div hidden={hover} className="card overflow-auto">
        <ul className="pt-20">
          {subBreedEntries && subBreedEntries[1].length > 0 ? (
            subBreedEntries[1].map((subBreed: string, i: number) => (
              <li key={i + subBreed} >{subBreed}</li>
            ))
          ) : (
            <li>The {breed} breed has no sub-breeds.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default BreedItem;
