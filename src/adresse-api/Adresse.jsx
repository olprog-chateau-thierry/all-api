import {useEffect, useState} from "react";
import {getRequest} from "../commons/requests.js";

const Adresse = () => {

    const [ad, setAd] = useState("");
    const [features, setFeatures] = useState([]);

    const cleanText = (input) => {
        input = input.toLocaleLowerCase();
        input = input.replaceAll(/[^\p{Ll}\p{Nd}]+/gu, "+");
        return input;
    }

    const handleInput = (ev) => {
        const val = ev.target.value;
        setAd(cleanText(val));
    }

    useEffect(() => {
        if (ad.length > 4) {
            const url = new URL("https://api-adresse.data.gouv.fr/search/");
            url.searchParams.set("q", ad);
            getRequest(url)
                .then(json => {
                    const f = json['features'];
                    if (f) {
                        setFeatures(json['features']);
                    }
                })
                .catch()
        } else {
            setFeatures([])
        }
    }, [ad])

    return (
        <main className="adresse">
            <h1>Adresse</h1>

            <section>
                <div>
                    <input type="search" list="features" placeholder="Entrez votre adresse..." onInput={handleInput}/>
                </div>

                <datalist id="features">
                    {features &&
                        features.map((f, i) => {
                            return <option key={i}>{f['properties']['label']}</option>
                        })
                    }
                </datalist>
            </section>
        </main>
    )
}

export default Adresse;