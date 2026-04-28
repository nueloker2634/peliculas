import { View, Text, TouchableOpacity, Modal } from "react-native";
import { useState } from "react";
import styles from "../styles/styles";

export default function TrailerPlayer({ videoId, loading }) {
  const [modalVisible, setModalVisible] = useState(false);

  if (loading) {
    return <Text style={styles.noTrailer}>Cargando trailer...</Text>;
  }

  if (!videoId) {
    return <Text style={styles.noTrailer}>Trailer no disponible</Text>;
  }

  return (
    <View>
      {/* BOTÓN */}
      <TouchableOpacity
        style={styles.trailerButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.trailerButtonText}>▶ Ver Trailer</Text>
      </TouchableOpacity>

      {/* MODAL */}
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>

            {/* CERRAR */}
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseText}>✕ Cerrar</Text>
            </TouchableOpacity>

            {/*  IFRAME (WEB) */}
            <iframe
              width="100%"
              height="600"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

          </View>
        </View>
      </Modal>
    </View>
  );
}