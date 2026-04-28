import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { searchMovies } from "../services/api";
import SearchBar from "../components/SearchBar";
import styles from "../styles/styles";

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (search.trim().length < 2) {
        setMovies([]);
        return;
      }

      setLoading(true);
      const data = await searchMovies(search);
      setMovies(data);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Peliculas</Text>

      {/*  BARRA */}
      <SearchBar search={search} setSearch={setSearch} />

      {/*  LOADING */}
      {loading && <ActivityIndicator style={styles.loader} />}

      {/*  SIN RESULTADOS */}
      {!loading && movies.length === 0 && search.length >= 2 && (
        <Text style={styles.empty}>No hay resultados</Text>
      )}

      {/*  LISTA */}
      <FlatList
        data={movies}
        keyExtractor={(item) => String(item.imdbID)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("Detalle", { imdbID: item.imdbID })
            }
          >
            <Image
              source={{
                uri:
                  item.Poster !== "N/A"
                    ? item.Poster
                    : "https://via.placeholder.com/300",
              }}
              style={styles.image}
            />
            <Text style={styles.movieTitle}>{item.Title}</Text>
            <Text style={styles.year}>{item.Year}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}