import { Modal, View, Text, TouchableOpacity, TextInput } from "react-native";
import style from "./RoastMeModal.style";
const RoastMeModal = ({
    showModal,
    setShowModal,
    getName,
    setName,
    handleRoast
}) => {

    return (
        <Modal transparent visible={showModal} animationType="fade">
            <View style={style.modalContainer}>
                <View style={style.modal}>
                    <Text style={style.modalTitle}>Enter Name</Text>
                    <TextInput placeholder="Type name..." placeholderTextColor={"#64748b"} value={getName} onChangeText={setName} style={style.input} />

                    <TouchableOpacity style={style.button} onPress={handleRoast}>
                        <Text style={style.genrateButtonText}>Genrate Roast</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={() => setShowModal(false)}>
                        <Text style={style.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )

}

export default RoastMeModal;