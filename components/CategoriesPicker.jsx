import { FlatList, TouchableOpacity, Text } from "react-native";
import style from "./CategoriesPicker.style";
const CategoriesPicker = ({
    data,
    selectedCategory,
    onCategorySelect
}) => {
    console.log("Selected Category: ", selectedCategory);
    console.log("Categories Data: ", data);
    return (
        <FlatList
            horizontal
            data={data}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                const isActive = selectedCategory === item.id;
                return (
                    <TouchableOpacity style={[style.categoryButton, isActive && style.activeCategoryButton]} onPress={() => onCategorySelect(item.id)} >
                        <Text style={[style.categoryText, isActive && style.activeCategoryText]}>{item.label}</Text>
                    </TouchableOpacity>
                )
            }}
        />
    );
}

export default CategoriesPicker;