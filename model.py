import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
import numpy as np
from scipy.spatial.distance import cosine

# Load data from JSON file
# json_file_path = r'C:\path\to\output\folder\2024-02-24_13-42-57\new_dataset.json'
json_file_path = r'C:\Users\AVuser\OneDrive - Dalhousie University\ML_INPUT_DATASET\new_dataset.json'
with open(json_file_path, 'r', encoding='utf-8') as file:
    data = json.load(file)

# Extract text from data
texts = [entry['text'] for entry in data]

# Feature extraction (TF-IDF)
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(texts)

# Apply K-means clustering
num_clusters = 5  # Adjust the number of clusters as needed
kmeans = KMeans(n_clusters=num_clusters)
kmeans.fit(X)

# Assign cluster labels to each story
cluster_labels = kmeans.labels_

# Function to recommend similar stories based on input text
def recommend_similar_stories(input_text, cluster_labels, texts, top_n=5):
    # Transform input text using the same vectorizer used for training
    input_vectorized = vectorizer.transform([input_text])
    
    # Predict the cluster label for the input text
    input_cluster = kmeans.predict(input_vectorized)[0]
    
    # Find stories belonging to the same cluster as the input text
    cluster_indices = np.where(cluster_labels == input_cluster)[0]
    
    # Remove the index of the input text from the cluster indices
    cluster_indices = cluster_indices[cluster_indices != texts.index(input_text)]
    
    # Sort the cluster indices based on similarity to the input text
    similarities = np.dot(X.toarray(), input_vectorized.T.toarray())
    cluster_indices_sorted = cluster_indices[np.argsort(similarities[cluster_indices], axis=0)[::-1].squeeze()]
    
    # Recommend top stories from the cluster
    recommended_stories = []
    for index in cluster_indices_sorted[:top_n]:
        recommended_stories.append({
            "text": texts[index],
            "emotions": data[index]["emotions"],
            "similarity": similarities[index]
        })
    
    return recommended_stories

# Function to calculate cosine similarity between emotion vectors
def calculate_emotion_similarity(emotions1, emotions2):
    # Convert emotion dictionaries to vectors
    emotion_vector1 = np.array([emotions1.get(emotion, 0.0) for emotion in ['Happy', 'Angry', 'Surprise', 'Sad', 'Fear']])
    emotion_vector2 = np.array([emotions2.get(emotion, 0.0) for emotion in ['Happy', 'Angry', 'Surprise', 'Sad', 'Fear']])
    # Calculate cosine similarity
    similarity = 1 - cosine(emotion_vector1, emotion_vector2)
    return similarity

# Example usage:
input_text = "Im pretty sure its just baby fever but Im desperate for a child now Ive been in adult work in my life and moved on Im at the age where having a child is ideal for me  Ive been single for a while and Ive tried to keep it that way but Im desperate for a relationship and a child To all people pregnant or have been what pushed you over the line in being  sure you wanted to be a mother"
recommended_stories = recommend_similar_stories(input_text, cluster_labels, texts)
input_emotions = data[texts.index(input_text)]["emotions"]
print("Input Story:")
print(input_text)
print("Emotions:", input_emotions)
print("\nRecommended Stories:")
for idx, story in enumerate(sorted(recommended_stories, key=lambda x: x["similarity"], reverse=True)):
    print(f"Story {idx + 1}:")
    print(story["text"])
    print("Emotions:", story["emotions"])
    print("Similarity:", story["similarity"])
    print("----------")
