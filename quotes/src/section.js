import Image1 from "../src/img/descartes.jpg";
import Image2 from "../src/img/hegel.jpg";
import Image3 from "../src/img/heidegger.jpg";
import Image4 from "../src/img/hobbes.jpg";
import Image5 from "../src/img/leibniz.jpg";
import Image6 from "../src/img/ockham.jpg";
import Image7 from "../src/img/socrates.jpg";
import Image8 from "../src/img/wittgenstein.jpg";


const Section = () => {
    const randomQuotes = [
        { image: Image1, name: "René Descartes", quote: "“I think therefore I am Cogito, ergo sum”", id: 1 },
        { image: Image2, name: "G. W. F. Hegel", quote: "“What is rational is actual and what is actual is rational”  ", id: 2 },
        { image: Image3, name: "Martin Heidegger", quote: "“He who thinks great thoughts, often makes great errors” ", id: 3 },
        { image: Image4, name: "Thomas Hobbes", quote: "“The life of man (in a state of nature) is solitary, poor, nasty, brutish, and short”", id: 4 },
        { image: Image5, name: "Gottfried Wilhelm Leibniz", quote: "“We live in the best of all possible worlds”  ", id: 5 },
        { image: Image6, name: "William of Ockham", quote: "“Entities should not be multiplied unnecessarily” ", id: 6 },
        { image: Image7, name: "Socrates", quote: "“The unexamined life is not worth living” ", id: 7 },
        { image: Image8, name: "Ludwig Wittgenstein", quote: "“Whereof one cannot speak, thereof one must be silent” ", id: 8 },
    ]
    return (
        <section className="section-1">
            <h2>Random Philosophy Quote</h2>
            <div className="section-1-a">
                {randomQuotes.map((quote) => (
                    <div className="flex-1" key={quote.id}>
                        <div className="img">
                            <img src={quote.image} alt="Philosopher" />
                        </div>
                        <div className="header">{quote.name}</div>
                        <p>{quote.quote}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Section;