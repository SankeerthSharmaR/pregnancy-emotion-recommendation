import json
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
import os

# Configuration
json_file_path = os.environ.get("JSON_FILE_PATH", "./resources/dataset1.json")
num_clusters = int(os.environ.get("NUM_CLUSTERS", 5))


# Load data from JSON file
def load_data():
    try:
        with open(json_file_path, "r", encoding="utf-8") as file:
            return json.load(file)
    except Exception as e:
        print(f"Failed to load data: {e}")
        raise


data = load_data()

# Extract text from data
texts = [entry["text"] for entry in data]

# Feature extraction (TF-IDF)
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(texts)

# Apply K-means clustering
kmeans = KMeans(n_clusters=num_clusters)
kmeans.fit(X)
cluster_labels = kmeans.labels_


def recommend_similar_stories(input_text, top_n=5):
    """
    Recommend similar stories based on input text.
    """
    input_vectorized = vectorizer.transform([input_text])
    input_cluster = kmeans.predict(input_vectorized)[0]
    cluster_indices = np.where(cluster_labels == input_cluster)[0]

    similarities = np.dot(X.toarray(), input_vectorized.T.toarray())
    cluster_indices_sorted = cluster_indices[
        np.argsort(similarities[cluster_indices], axis=0)[::-1].squeeze()
    ]

    recommended_texts = set()
    recommended_stories = []
    for index in cluster_indices_sorted:
        if len(recommended_texts) == top_n:
            break
        if texts[index] not in recommended_texts:
            recommended_stories.append(texts[index])
            recommended_texts.add(texts[index])

    return recommended_stories
