import { StyleSheet, Image, SafeAreaView, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
// {index, imageUrl,songTitle,songArtists, albumName, duration}
export default function SongScreen() {
  const route = useRoute();
  const { index, imageUrl, songTitle, duration, songArtists, albumName } =
    route.params;
  console.log("song screen");
  console.log(songArtists);
  return (
    <SafeAreaView style = {styles.container}>
      
      <Image style={styles.albumCover} source={{ uri: imageUrl }} />
      <Text style={styles.songTitle}> {songTitle} </Text>
      <SafeAreaView>
        {songArtists.map((artist, idx) => (
          <Text style={styles.songArtists} key={idx}>
            {artist.name}
          </Text>
        ))}
      </SafeAreaView>
      <Text style = {styles.albumName}>{albumName} </Text>
      <Text style={styles.index}> {index + 1} </Text>
      <Text style = {styles.duration}> {duration} </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingVertical: 5
  },
  albumCover: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  songArtists: {
    fontSize: 20,
    marginVertical: 10,
  },
  albumName: {
    fontSize: 18,
    color: "#666",
  },
  index: {
    fontSize: 12,
    color: "#666",
  },
  duration: {
    fontSize: 18,
    color: "#666",
  },
});
