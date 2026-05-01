import PhotoCard from "./PhotoCard";

const TopGenerations = async() => {
    const res = await fetch ("https://a-8-qurbani-hat.vercel.app/data.json");
    const data = await res.json();
    const topData = data.slice(0, 4);
    console.log(topData);
    return (
        <div>
            <h1 className="text-2xl font-bold mt-5">Top Animals</h1>
            <div className="grid grid-cols-4 gap-5 mt-5">
                {
                    topData.map(animal => <div key={animal.id}>
                        <PhotoCard animal = {animal}></PhotoCard>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TopGenerations;