
import { View, Text } from "react-native";
import style from "./JokesView.style";
const JokesView = ({
    joke,
    loading,
    error
}) => {
    return (
        <View style={style.cardContainer}>
            {
                loading ? (
                    <Text style={style.loadingText}>Genrating....</Text>
                ) : error ? (
                    <Text style={style.errorText}>{error}</Text>
                ) : joke ? (
                    <Text style={style.jokeText}>{joke}</Text>
                ) : <Text style={style.placeholderText}>
                    Genrate a joke by selecting a category above.
                </Text>
            }
        </View>
    )
}

export default JokesView;