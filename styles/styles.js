import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // ── HOME ──────────────────────────────────────
  container: {
    flex: 1,
    backgroundColor: "#0B132B",
  },

  title: {
    fontSize: 28,
    color: "#3A86FF",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
  },

  input: {
    flex: 1,
    backgroundColor: "#1C2541",
    color: "#fff",
    padding: 12,
    borderRadius: 10,
  },

  clearButton: {
    marginLeft: 10,
    backgroundColor: "#3A86FF",
    padding: 15,
    borderRadius: 10,
  },

  clearText: {
    color: "#fff",
  },

  // 🔥 NUEVO: categorías tipo lista (debajo del input)
  categoryItem: {
    backgroundColor: "#1C2541",
    padding: 12,
    borderRadius: 10,
    marginBottom: 6,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: "#3A86FF30",
  },


  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },

  categoriesContainer: {
    marginHorizontal: 15,
    marginTop:10,
  },

  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  
  categoryButton: {
    width: "30%",
    backgroundColor: "#3A86FF",
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },

  categoryText: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#1C2541",
    margin: 20,
    borderRadius: 12,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 250,
  },

  movieTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
  },

  year: {
    color: "#A9BCD0",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },

  loader: {
    marginTop: 20,
  },

  empty: {
    color: "#ccc",
    textAlign: "center",
    marginTop: 20,
  },

  // ── DETAIL ────────────────────────────────────
  loaderContainer: {
    flex: 1,
    backgroundColor: "#0B132B",
    justifyContent: "center",
    alignItems: "center",
  },

  detailContainer: {
    flex: 1,
    backgroundColor: "#0B132B",
  },

  banner: {
    width: "100%",
    height: 550,
  },

  detailContent: {
    padding: 20,
  },

  detailTitle: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },

  rating: {
    color: "#FFD700",
    textAlign: "center",
    marginTop: 6,
    fontSize: 16,
  },

  genreContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 12,
  },

  genreBadge: {
    backgroundColor: "#3A86FF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    margin: 4,
  },

  genreText: {
    color: "#fff",
    fontSize: 13,
  },

  plot: {
    color: "#ccc",
    marginTop: 14,
    lineHeight: 22,
  },

  infoBox: {
    backgroundColor: "#1C2541",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    gap: 6,
  },

  infoText: {
    color: "#fff",
    fontSize: 14,
  },

  // ── TRAILER ───────────────────────────────────
  trailerButton: {
    backgroundColor: "#FF0000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  trailerButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  trailerContainer: {
    marginTop: 15,
    borderRadius: 10,
    overflow: "hidden",
  },

  noTrailer: {
    color: "#555",
    textAlign: "center",
    marginTop: 20,
  },

  // ───────────────────────────────────
  button: {
    backgroundColor: "#3A86FF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  // ── MODAL TRAILER ─────────────────────────────
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.85)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    width: "90%",
    backgroundColor: "#0B132B",
    borderRadius: 14,
    overflow: "hidden",
    padding: 10,
  },

  modalClose: {
    alignSelf: "flex-end",
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginBottom: 8,
  },

  modalCloseText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});