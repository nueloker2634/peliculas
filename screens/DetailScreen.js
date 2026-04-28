import { View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { getMovieDetails } from "../services/api";
import TrailerPlayer from "../components/TrailerPlayer";

import styles from "../styles/styles";

const YOUTUBE_API_KEY = "AIzaSyCsHZpZfzPh1LABRsGK6jpPs0YXGaLe-wU";

export default function DetailScreen({ route }) {
  const { imdbID } = route.params;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [videoId, setVideoId] = useState(null);
  const [loadingTrailer, setLoadingTrailer] = useState(true);

  useEffect(() => {
    const loadMovie = async () => {
      const data = await getMovieDetails(imdbID);
      setMovie(data);
      setLoading(false);
    };
    loadMovie();
  }, [imdbID]);

  useEffect(() => {
    if (!movie) return;
    const fetchTrailer = async () => {
      try {
        const query = `${movie.Title} ${movie.Year} trailer oficial`;
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=1&key=${YOUTUBE_API_KEY}`,
        );
        const data = await res.json();
        if (data.items && data.items.length > 0) {
          setVideoId(data.items[0].id.videoId);
        }
      } catch (error) {
        console.log("Error trailer:", error);
      } finally {
        setLoadingTrailer(false);
      }
    };
    fetchTrailer();
  }, [movie]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#3A86FF" />
      </View>
    );
  }

  if (!movie) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={{ color: "#fff" }}>No se pudo cargar</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.detailContainer}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      {/* POSTER */}
      <Image
        source={{
          uri:
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300",
        }}
        style={styles.banner}
        resizeMode="cover"
      />

      <View style={styles.detailContent}>
        {/* TITULO */}
        <Text style={styles.detailTitle}>{movie.Title}</Text>

        {/* RATING */}
        {movie.imdbRating !== "N/A" && (
          <Text style={styles.rating}>⭐ {movie.imdbRating} / 10</Text>
        )}

        {/* GÉNEROS */}
        <View style={styles.genreContainer}>
          {movie.Genre !== "N/A" &&
            movie.Genre.split(",").map((g, i) => (
              <View key={i} style={styles.genreBadge}>
                <Text style={styles.genreText}>{g.trim()}</Text>
              </View>
            ))}
        </View>

        {/* DESCRIPCIÓN */}
        <Text style={styles.plot}>{movie.Plot}</Text>

        {/* INFO */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}> Año: {movie.Year}</Text>
          <Text style={styles.infoText}> Director: {movie.Director}</Text>
          <Text style={styles.infoText}> Actores: {movie.Actors}</Text>
          <Text style={styles.infoText}> Duración: {movie.Runtime}</Text>
          <Text style={styles.infoText}> País: {movie.Country}</Text>
          <Text style={styles.infoText}> Idioma: {movie.Language}</Text>
        </View>

        {/*  TRAILER — abajo de todo */}
        <TrailerPlayer
          videoId={videoId}
          loading={loadingTrailer}
          movie={movie}
        />
      </View>
    </ScrollView>
  );
}
