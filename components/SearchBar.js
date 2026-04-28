import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/styles";

const categorias = [
  "Accion",
  "Comedia",
  "Terror",
  "Romance",
  "Ciencia ficcion",
  "Animacion",
  "Drama",
  "Aventura",
  "Fantasia",
];

export default function SearchBar({ search, setSearch }) {
  const [showCategories, setShowCategories] = useState(false);

  //  Cargar búsqueda guardada
  useEffect(() => {
    const loadSearch = async () => {
      const saved = await AsyncStorage.getItem("search");
      if (saved) setSearch(saved);
    };
    loadSearch();
  }, []);

  //  Guardar búsqueda
  useEffect(() => {
    AsyncStorage.setItem("search", search);
  }, [search]);

  return (
    <View>
      {/*  INPUT */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar pelicula..."
          placeholderTextColor="gray"
          value={search}
          onFocus={() => setShowCategories(true)}
          onChangeText={(text) => {
            setSearch(text);
            setShowCategories(false);
          }}
        />

        {/*  LIMPIAR */}
        {search.length > 0 && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => setSearch("")}
          >
            <Text style={styles.clearText}>X</Text>
          </TouchableOpacity>
        )}
      </View>

      {/*  CATEGORÍAS EN GRID */}
      {showCategories && (
        <View style={styles.categoriesContainer}>
          <View style={styles.categoriesGrid}>
            {categorias.map((cat, index) => (
              <TouchableOpacity
                key={index}
                style={styles.categoryButton}
                onPress={() => {
                  setSearch(cat);
                  setShowCategories(false);
                }}
              >
                <Text style={styles.categoryText}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}