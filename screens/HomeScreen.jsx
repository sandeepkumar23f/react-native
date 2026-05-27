import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import useJoke from "../hooks/useJoke";
import style from "./HomeScreen.style";
import CategoriesPicker from "../components/CategoriesPicker";
import { CATEGORIES } from "../constants/categories";
import JokesView from "../components/JokesView";
import RoastMeModal from "../components/RoastMeModal";

const HomeScreen = () => {
    const useJokes = useJoke();
    const { joke, loading, error, generateNewJoke } = useJokes;

    const [selectedCategory, setSelectedCategory] = useState("tech");
    const [showModal, setShowModal] = useState(false);
    const [nameToRoast, setNameToRoast] = useState("");


    const handleGenrateJoke = () => {
        if(selectedCategory === "roast" && (!nameToRoast || nameToRoast.trim() === "")){
            setShowModal(true);
            return;
        }
        if(selectedCategory === "roast" && nameToRoast){
            generateNewJoke("roast", nameToRoast);
            return;
        }else{
            generateNewJoke(selectedCategory);
        }
    }

    const handleRoastMe = () => {
        setShowModal(false);
        generateNewJoke("roast", nameToRoast);
    }

    const handleCategorySelect = (categoryId) => {
        if (categoryId === "roast") {
            setShowModal(true);
            setSelectedCategory(categoryId);
        } else {
            setSelectedCategory(categoryId);
        }
    }



    return (
        <View style={style.container}>
            <Text style={style.title}>AI Joke Generator</Text>
            <CategoriesPicker data={CATEGORIES} selectedCategory={selectedCategory} onCategorySelect={handleCategorySelect} />
            <JokesView joke={joke} loading={loading} error={error} />
            <TouchableOpacity style={styles.button} onPress={handleGenrateJoke}>
                <Text style={styles.buttonText}>{
                    loading ? "Generating..." : "Genrate Joke"}</Text>
            </TouchableOpacity>
            <RoastMeModal
                showModal={showModal}
                setShowModal={setShowModal}
                getName={nameToRoast}
                setName={setNameToRoast}
                handleRoast={handleRoastMe}
            />


        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#0ea5e9",
        paddingVertical: 16,
        borderRadius: 14,
        alignItems: "center",
        shadowColor: "#38bdf8",
        shadowOffset: 0.6,
        shadowRadius: 12,
        elevation: 12
    },
    buttonText: {
        color: "#020617",
        fontWeight: "700",
        fontSize: 16,
    }
})