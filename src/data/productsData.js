import chana_dal from "../assets/images/chana-dal.png";
import chana from "../assets/images/chana.png";
import mix_food from "../assets/images/mix_food.png";
import mung from "../assets/images/mung.png";
import ready_fasal from "../assets/images/ready_fasal.png";
import rost_dal from "../assets/images/rost-dal.png";
import satnaja from "../assets/images/satnaja.png";
import seeds from "../assets/images/seeds.png";
import { loremIpsum } from "lorem-ipsum";
const products = [
    {
        name: "Chana Dal Delight",
        price: "₹120",
        images: [chana_dal, chana, satnaja, mix_food, mung, ready_fasal, rost_dal],
        description: "Premium quality chana dal, perfect for everyday cooking and rich in protein.",
        about: loremIpsum({ count: 3, units: "paragraphs" }),
    },
    {
        name: "Moong Magic Mix",
        price: "₹150",
        images: [chana_dal, chana, satnaja, mix_food, mung, ready_fasal, rost_dal],
        description: "A nutritious blend of moong and other pulses, ideal for healthy meals.",
        about: loremIpsum({ count: 3, units: "paragraphs" }),
    },
    {
        name: "Satnaja Super Pack",
        price: "₹180",
        images: [chana_dal, chana, satnaja, mix_food, mung, ready_fasal, rost_dal],
        description: "Seven-grain satnaja mix for a wholesome and balanced diet.",
        about: loremIpsum({ count: 3, units: "paragraphs" }),
    },
    {
        name: "Mix Pulse Fiesta",
        price: "₹135",
        images: [chana_dal, chana, satnaja, mix_food, mung, ready_fasal, rost_dal],
        description: "A colorful mix of pulses for soups, curries, and salads.",
        about: loremIpsum({ count: 3, units: "paragraphs" }),
    },
    {
        name: "Mung Bean Boost",
        price: "₹110",
        images: [chana_dal, chana, satnaja, mix_food, mung, ready_fasal, rost_dal],
        description: "High-fiber mung beans, great for sprouting or cooking.",
        about: loremIpsum({ count: 3, units: "paragraphs" }),
    },
    {
        name: "Ready Fasal Combo",
        price: "₹160",
        images: [chana_dal, chana, satnaja, mix_food, mung, ready_fasal, rost_dal],
        description: "Pre-cleaned and ready-to-cook fasal mix for quick meals.",
        about: loremIpsum({ count: 3, units: "paragraphs" }),
    },
    {
        name: "Roasted Dal Crunch",
        price: "₹140",
        images: [chana_dal, chana, satnaja, mix_food, mung, ready_fasal, rost_dal],
        description: "Crunchy roasted dal snack, perfect for guilt-free munching.",
        about: loremIpsum({ count: 3, units: "paragraphs" }),
    },
    {
        name: "Protein Pulse Pack",
        price: "₹170",
        images: [chana_dal, chana, satnaja, mix_food, mung, ready_fasal, rost_dal],
        description: "A curated selection of high-protein pulses for fitness-focused diets.",
        about: loremIpsum({ count: 3, units: "paragraphs" }),
    },
];



export default products;
