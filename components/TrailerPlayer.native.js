import YoutubePlayer from "react-native-youtube-iframe";
import { View, Text, TouchableOpacity, Modal, ActivityIndicator } from "react-native";
import { useState } from "react";
import styles from "../styles/styles";

export default function TrailerPlayer({ videoId, loading }) {
  const [modalVisible, setModalVisible] = useState(false);

  if (loading) return (
    <ActivityIndicator size="large" color="#3A86FF" style={{ marginVertical: 10 }} />
  );

  if (!videoId) return (
    <Text style={styles.noTrailer}>Trailer no disponible</Text>
  );

  return (
    <View>
      {/* BOTÓN */}
      <TouchableOpacity style={styles.trailerButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.trailerButtonText}>▶ Ver Trailer</Text>
      </TouchableOpacity>

      {/* MODAL */}
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>

            {/* CERRAR */}
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseText}>✕ Cerrar</Text>
            </TouchableOpacity>

            {/* REPRODUCTOR */}
            <YoutubePlayer
              height={220}
              videoId={videoId}
              play={modalVisible}
            />

          </View>
        </View>
      </Modal>
    </View>
  );
}